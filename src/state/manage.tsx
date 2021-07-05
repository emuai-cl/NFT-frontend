import create from "zustand"

type ManageStore = {
  editing?: number
  setEditing: (editingId?: number) => void
  hash?: string
  setHash: (hash?: string) => void
}

export const useStore = create<ManageStore>(set => ({
  editing: undefined,
  hash: undefined,
  setEditing: editing => set(state => ({ editing })),
  setHash: hash => set(state => ({ hash })),
}))
