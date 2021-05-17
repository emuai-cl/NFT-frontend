import { useStore } from "../state/store"

export const useContract = () => useStore(store => store.contract)
