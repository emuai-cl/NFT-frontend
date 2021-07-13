import { useStore } from "../state/manage"

export const useSetHash = () => useStore(store => store.setHash)
