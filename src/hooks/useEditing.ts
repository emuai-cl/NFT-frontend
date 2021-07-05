import { useStore } from "../state/manage"

export const useEditing = () => useStore(store => store.editing)
