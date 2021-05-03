import IPFS from "ipfs-core/src/components"

const pica = require("pica")()

const resizeCanvas = async (canvas: HTMLCanvasElement) => {
  const to = document.createElement("canvas")
  to.width = 100
  to.height = 100
  const result = await pica.resize(canvas, to)
  const resized = await pica.toBlob(result, "image/png")
  return resized
}
export const upload = async (canvas: HTMLCanvasElement, node: IPFS) => {
  if (!canvas || !node) {
    return
  }
  const resized = await resizeCanvas(canvas)
  const results = await node.add(resized)
  if (!results) return
  console.log(results)
  if (!results.path) return

  return results.path
}
