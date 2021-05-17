import React, { useEffect, useState } from "react"
import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { toast } from "react-toastify"
import styled from "styled-components"
import tw from "twin.macro"

import abi from "../../assets/abi.json"
import CountInput from "../count-input"
import { CONTRACT_ADDRESS } from "../../helpers/constants"
import { Button, PageParagraph, PageSubtitle } from "../common"

const getWeb3 = async () => {
  if (typeof window != undefined && window["ethereum"]) {
    await window["ethereum"].enable()
    return new Web3(window["ethereum"])
  }

  return new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
}

const estimateGas = (number: number) =>
  Math.floor((30763 * number + 35236) * 1.5)

const mint = async (contract: Contract, number: number) => {
  try {
    await contract.methods.mintEMU(number).send({
      from: contract.defaultAccount,
      value: 60000000000000000 * number,
      gas: estimateGas(number),
    })
    toast.success(`${number} EMUS Minted`)
  } catch (error) {
    toast.error(`Failed to mint. Error: ${error.message}`)
  }
}

const SubmitButton = styled(Button)`
  ${tw`w-full`};
`

const AccentParagraph = styled(PageParagraph)`
  color: ${({ theme }) => theme.colors.accent};
`
const Container = styled.div`
  ${tw`mt-5 md:col-span-2 w-3/5 mx-auto p-4 mb-5 shadow-md rounded`};
`

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
  const [numberOfTokens, setNumberOfTokens] = useState(0)

  const connect = async () => {
    const web3 = await getWeb3()
    const contract = new web3.eth.Contract(abi as any, CONTRACT_ADDRESS)
    const [address] = await web3.eth.getAccounts()
    contract.defaultAccount = address
    setContract(contract)
    toast.success("Wallet successfully connected")
  }
  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3()
      const [address] = await web3.eth.getAccounts()

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
    // init()
  }, [])
  return (
    <>
      <Container ref={ref}>
        <PageSubtitle>Buy now!</PageSubtitle>

        <div>
          {contract ? (
            <>
              <AccentParagraph>
                Wallet: {contract.defaultAccount}
              </AccentParagraph>
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
              <br />
              <SubmitButton onClick={() => mint(contract, numberOfTokens)}>
                MINT
              </SubmitButton>
            </>
          ) : (
            <>
              <PageParagraph>
                In order to buy, first connect your wallet with the button
                below!
              </PageParagraph>
              <SubmitButton onClick={connect}> Connect wallet</SubmitButton>
            </>
          )}
        </div>
      </Container>
    </>
  )
})
export default Eth
