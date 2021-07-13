import { useStore } from "../state/manage"

export const useHash = () => useStore(store => store.hash)
