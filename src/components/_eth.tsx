import React, { useEffect, useState } from "react"
import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import tw from "twin.macro"

import useConstant from "use-constant"

import abi from "../assets/abi.json"

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
  try {
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
  } catch (error) {
    toast.error("Couldn't load")
  }
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

type Inputs = {
  example: string
  exampleRequired: string
}

const Input = styled.input`
  ${tw`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`};
`

const Label = styled.label`
  ${tw`block text-sm font-medium text-gray-700`};
`

const connect = async (data: Inputs) => {
  console.log(data)
}

export default () => {
  const [contract, setContract] = useState<Contract>()
  const [address, setAddress] = useState("")
  const { register, handleSubmit, watch } = useForm<Inputs>()

  const web3 = useConstant(() => getWeb3())
  useEffect(() => {
    initContract(web3, setContract, setAddress)
  }, [web3])
  const onClick = () => contract && doContracts(contract, address)
  return (
    <div>
      <button onClick={onClick}>adad</button>
      <form onSubmit={handleSubmit(connect)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* <Label for="first_name">First name</Label>
                <Input type="text" name="first_name" id="first_name" autocomplete="given-name" class=""> */}
        <Label>First name</Label>
        <Input name="example" defaultValue="test" {...register("example")} />

        <Label>First name</Label>
        {/* include validation with required or other standard HTML validation rules */}
        <Input name="exampleRequired" {...register("exampleRequired")} />
        {/* errors will return when field validation fails  */}

        <input type="submit" />
      </form>
      <p>holas</p>
    </div>
  )
}
