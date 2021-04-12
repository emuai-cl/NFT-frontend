import React, { useEffect, useState } from "react"
import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import tw from "twin.macro"

import useConstant from "use-constant"

import abi from "../assets/abi.json"
import CountInput from "./CountInput"

const getWeb3 = () => {
  // if (typeof window != undefined && window["ethereum"])
  //   return new Web3(window["ethereum"])
  // return new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
  return new Web3("http://127.0.0.1:7545")
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
  ${tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`};
`

const Container = styled.div`
  ${tw`mt-5 md:col-span-2 w-3/5 mx-auto p-4 mb-5 shadow-md rounded`};
`

const connect = async (data: Inputs) => {
  console.log(data)
}

export default () => {
  const [contract, setContract] = useState<Contract | undefined>()
  const { register, handleSubmit, watch } = useForm<Inputs>()
  const [numberOfTokens, setNumberOfTokens] = useState(0)

  const connect = async (data: Inputs) => {
    console.log(data)
    const web3 = getWeb3()
    const contract = new web3.eth.Contract(abi as any, data.contract)
    contract.defaultAccount = data.address

    setContract(contract)
  }
  const web3 = useConstant(() => getWeb3())
  useEffect(() => {
    //initContract(web3, setContract, setAddress)
  }, [web3])
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(connect)}>
          <div>
            <Label htmlFor="example">Contact address</Label>
            <TextInput
              name="contract"
              defaultValue="test"
              {...register("contract")}
            />
          </div>

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
              onDecrement={() => setNumberOfTokens(value => value - 1)}
              onIncrement={() => setNumberOfTokens(value => value + 1)}
            />
            <SubmitButton onClick={() => mint(contract, numberOfTokens)}>
              MINT
            </SubmitButton>
          </>
        )}
      </div>
    </>
  )
}
