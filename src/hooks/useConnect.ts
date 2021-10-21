import { useMemo } from "react"
import { toast } from "react-toastify"
import detectEthereumProvider from "@metamask/detect-provider"

import abi from "../assets/abi.json"
import { CONTRACT_ADDRESS, CONTRACT_CHAIN } from "../helpers/constants"
import { useStore } from "../state/store"
import { createRequestAsync } from "../helpers/createRequestAsync"
import type { provider as Provider } from "web3-core"

type HasEnable = {
  enable(): Promise<void>
}

const hasEnable = (provider: unknown): provider is HasEnable => {
  return (provider as HasEnable)?.enable instanceof Function
}

export const getWeb3 = async () => {
  if (typeof window == undefined) return undefined
  try {
    const provider = (await detectEthereumProvider()) as Provider
    if (!provider) throw new Error("Metamask required")
    const web3Module = await import("web3")
    const Web3 = web3Module.default

    if (hasEnable(provider)) await provider.enable()

    const web3 = new Web3(provider)

    try {
      const switchChain = createRequestAsync<void>(
        web3,
        "wallet_switchEthereumChain"
      )

      await switchChain({ params: [{ chainId: CONTRACT_CHAIN }] })
    } catch {
      toast.warn("Check your metamask network")
    }

    return web3
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
