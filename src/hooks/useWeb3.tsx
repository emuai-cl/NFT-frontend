import { useStore } from "../state/store"

export const useWeb3 = () => useStore(store => store.web3)
