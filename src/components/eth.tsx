import React, { useEffect, useState } from "react"
import Web3 from "web3"
import { Contract } from "web3-eth-contract"

import useConstant from "use-constant"

import abi from "../assets/abi.json"
import { createFileNodeFromBuffer } from "gatsby-source-filesystem"

const getWeb3 = () => {
  if (typeof window != undefined && window["ethereum"])
    return new Web3(window["ethereum"])
  return new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
}

const initContract = async (
  web3: Web3,
  setContract: React.Dispatch<React.SetStateAction<Contract>>,
  setAddress: React.Dispatch<React.SetStateAction<string>>
) => {
  const [defaultAccount] = await web3.eth.getAccounts()
  web3.eth.defaultAccount = defaultAccount
  setAddress(defaultAccount)
  const contract = new web3.eth.Contract(
    abi as any,
    "0x386150C21d2788A261636714CC8F5C9f16320530"
  )
  contract.defaultAccount = defaultAccount

  setContract(contract)
  const balance = await contract.methods.getBalance().call()
  console.log(balance)
}

const doContracts = async (contract: Contract, address: string) => {
  for (let i = 0; i < 50; i++) {
    await contract.methods.mintNFT(100).send({
      from: address,
      value: 50000000000000000 * 100,
      gas: 3_700_000,
    })
  }
}

export default () => {
  const [contract, setContract] = useState<Contract>()
  const [address, setAddress] = useState("")

  const web3 = useConstant(() => getWeb3())
  useEffect(() => {
    initContract(web3, setContract, setAddress)
  }, [web3])
  const onClick = () => contract && doContracts(contract, address)
  return (
    <div>
      <button onClick={onClick}>adad</button>
      <p>holas</p>
    </div>
  )
}
