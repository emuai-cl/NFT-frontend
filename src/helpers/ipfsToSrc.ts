import type IPFS from "ipfs-core/src/components"

export const ipfsToSrc = async (cid: string, node: IPFS) => {
  if (typeof window === "undefined") return ""
  const bufs = []
  for await (const buf of node.cat(cid)) {
    bufs.push(buf)
  }
  const data = Buffer.concat(bufs)

  const blob = new Blob([data])
  return window.URL.createObjectURL(blob)
}
