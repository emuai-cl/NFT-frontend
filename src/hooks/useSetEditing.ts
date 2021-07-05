import { useStore } from "../state/manage"

export const useSetEditing = () => useStore(store => store.setEditing)
