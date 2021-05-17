import React, { useEffect, useState } from "react"
import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { toast } from "react-toastify"
import styled from "styled-components"
import tw from "twin.macro"

import CountInput from "../count-input"
import { Button, PageParagraph, PageSubtitle } from "../common"
import { useConnect } from "../../hooks/useConnect"
import { useContract } from "../../hooks/useContract"
import { useWeb3 } from "../../hooks/useWeb3"

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

const signNFTUpdate = async (web3: Web3) => {
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

const Eth = React.forwardRef<HTMLDivElement>((props, ref) => {
  const contract = useContract()
  const connect = useConnect()
  const web3 = useWeb3()
  const [numberOfTokens, setNumberOfTokens] = useState(0)

  useEffect(() => {
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
