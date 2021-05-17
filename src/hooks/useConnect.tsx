import { useMemo } from "react"
import { toast } from "react-toastify"
import abi from "../assets/abi.json"
import { CONTRACT_ADDRESS } from "../helpers/constants"
import { useStore } from "../state/store"

export const getWeb3 = async () => {
  if (typeof window == undefined) return undefined
  const web3Module = await import("web3")
  const Web3 = web3Module.default
  if (typeof window != undefined && window["ethereum"]) {
    await window["ethereum"].enable()
    return new Web3(window["ethereum"])
  }

  return new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
}

export const useConnect = () => {
  const setContract = useStore(store => store.setContract)
  const setWeb3 = useStore(store => store.setWeb3)

  const connect = useMemo(
    () => async () => {
      const web3 = await getWeb3()
      if (web3 == undefined) return
      const contract = new web3.eth.Contract(abi as any, CONTRACT_ADDRESS)
      const [address] = await web3.eth.getAccounts()
      contract.defaultAccount = address
      toast.success("Wallet successfully connected")
      setWeb3(web3)
      setContract(contract)
    },
    [setContract, setWeb3]
  )
  return connect
}
