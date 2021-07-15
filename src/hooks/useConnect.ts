import { useMemo } from "react"
import { toast } from "react-toastify"
import detectEthereumProvider from "@metamask/detect-provider"

import abi from "../assets/abi.json"
import { CONTRACT_ADDRESS } from "../helpers/constants"
import { useStore } from "../state/store"

type Provider = {
  enable(): Promise<void>
}

export const getWeb3 = async () => {
  if (typeof window == undefined) return undefined
  try {
    const provider = (await detectEthereumProvider()) as Provider
    if (!provider) throw new Error("Metamask required")
    const web3Module = await import("web3")
    const Web3 = web3Module.default
    await provider?.enable()
    return new Web3(provider as any)
  } catch (error) {
    toast.error(error.message)
  }
}

export const useConnect = () => {
  const setContract = useStore(store => store.setContract)
  const setWeb3 = useStore(store => store.setWeb3)

  const connect = useMemo(
    () => async () => {
      try {
        const web3 = await getWeb3()
        if (web3 == undefined) return
        const contract = new web3.eth.Contract(abi as any, CONTRACT_ADDRESS)
        const [address] = await web3.eth.getAccounts()
        contract.defaultAccount = address
        toast.success("Wallet successfully connected")
        setWeb3(web3)
        setContract(contract)
      } catch (error) {
        toast.error(`Failed to connect. Error: ${error.message}`)
      }
    },
    [setContract, setWeb3]
  )
  return connect
}
