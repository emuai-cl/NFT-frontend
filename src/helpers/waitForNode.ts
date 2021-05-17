import type { IPFS } from "ipfs"

const IPFS_NODE_SYMBOL = Symbol("IPFS_NODE")

export const waitForNode = async () => {
  if (typeof window == undefined) return
  if (!window[IPFS_NODE_SYMBOL]) {
    const IPFS = await import("ipfs")
    const node = IPFS.create()

    window[IPFS_NODE_SYMBOL] = node
    return node
  }
  return window[IPFS_NODE_SYMBOL] as Promise<IPFS>
}
