import create from "zustand"
import type { Contract } from "web3-eth-contract"
import type Web3 from "web3"

type Store = {
  contract?: Contract
  setContract: (contract: Contract) => void
  web3?: Web3
  setWeb3: (web3: Web3) => void
}

export const useStore = create<Store>(set => ({
  contract: undefined,
  setContract: contract => set(state => ({ contract })),
  web3: undefined,
  setWeb3: web3 => set(state => ({ web3 })),
}))
