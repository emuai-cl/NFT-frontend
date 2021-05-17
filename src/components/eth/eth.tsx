import React, { useEffect, useState } from "react"
import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import tw from "twin.macro"

import useConstant from "use-constant"

import abi from "../../assets/abi.json"
import CountInput from "../count-input"
import { CONTRACT_ADDRESS } from "../../helpers/constants"

const getWeb3 = async () => {
  if (typeof window != undefined && window["ethereum"]) {
    await window["ethereum"].enable()
    return new Web3(window["ethereum"])
  }

  return new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
}

const mint = async (contract: Contract, number: number) => {
  await contract.methods.mintEMU(number).send({
    from: contract.defaultAccount,
    value: 50000000000000000 * number,
    gas: 3_800_000,
  })
}

type Inputs = {
  contract: string
  address: string
}

const TextInput = styled.input`
  ${tw`text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2  pl-12`};
`

const Label = styled.label`
  ${tw`mb-1 text-xs sm:text-sm tracking-wide text-gray-600`};
`

const SubmitButton = styled.button`
  ${tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white`};
  ${({ theme }) => theme.backgrounds.accent};
  ${({ theme }) => theme.backgrounds.hoverAccent};
  ${({ theme }) => theme.backgrounds.focusAccent};
`

const Container = styled.div`
  ${tw`mt-5 md:col-span-2 w-3/5 mx-auto p-4 mb-5 shadow-md rounded`};
`

const connect = async (data: Inputs) => {
  console.log(data)
}

const valueInBounds = (n: number) => Math.min(Math.max(n, 0), 250)

const createSignTypedData = (web3: Web3) => (object: unknown) =>
  new Promise((resolve, reject) =>
    web3.currentProvider["sendAsync"](object, (error, response) => {
      if (error) reject(error)
      resolve(response)
    })
  )

const Eth = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [contract, setContract] = useState<Contract | undefined>()
  const { register, handleSubmit, watch } = useForm<Inputs>()
  const [numberOfTokens, setNumberOfTokens] = useState(0)

  const connect = async (data: Inputs) => {
    console.log(data)
    const web3 = await getWeb3()
    const contract = new web3.eth.Contract(abi as any, CONTRACT_ADDRESS)
    contract.defaultAccount = data.address

    setContract(contract)
  }
  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3()
      const accounts = await web3.eth.getAccounts()
      const address = accounts[0]

      if (!address) return
      const signTypedData = createSignTypedData(web3)
      const result = await signTypedData({
        method: "eth_signTypedData",
        params: [
          [
            {
              type: "string",
              name: "path",
              value: "QmajXXuz6qPL72FwWV4X8ANk3USjmrAQPJqbCjVREPfnvP",
            },
            { type: "uint32", name: "id", value: 1 },
          ],
          address,
        ],
        from: address,
      })

      console.log(result)
    }
    init()
  }, [])
  return (
    <>
      <Container ref={ref}>
        <form onSubmit={handleSubmit(connect)}>
          <div>
            <Label htmlFor="address">Your address</Label>
            {/* include validation with required or other standard HTML validation rules */}
            <TextInput name="address" id="address" {...register("address")} />
          </div>

          <SubmitButton type="submit"> submit</SubmitButton>
        </form>
      </Container>
      <div>
        {contract && (
          <>
            <CountInput
              value={numberOfTokens}
              setNumberOfTokens={setNumberOfTokens}
              onDecrement={() =>
                setNumberOfTokens(value => valueInBounds(value - 1))
              }
              onIncrement={() =>
                setNumberOfTokens(value => valueInBounds(value + 1))
              }
            />
            <SubmitButton onClick={() => mint(contract, numberOfTokens)}>
              MINT
            </SubmitButton>
          </>
        )}
      </div>
    </>
  )
})
export default Eth
