import Web3 from "web3"
import { toast } from "react-toastify"

type Signed = { id?: number; jsonrpc: string; result: string }

const createSignTypedData = (web3: Web3) => (object: unknown) =>
  new Promise<Signed>((resolve, reject) =>
    web3.currentProvider["sendAsync"](object, (error, response) => {
      if (error) reject(error)
      resolve(response)
    })
  )

export const signNFTUpdate = async (web3: Web3, path: string, id: number) => {
  try {
    if (!web3) throw new Error(`Connect your wallet`)

    const [address] = await web3.eth.getAccounts()

    if (!address) throw new Error(`Couldn't find address`)
    const signTypedData = createSignTypedData(web3)
    const result = await signTypedData({
      method: "eth_signTypedData",
      params: [
        [
          {
            type: "string",
            name: "path",
            value: path,
          },
          { type: "uint32", name: "id", value: id },
        ],
        address,
      ],
      from: address,
    })

    return result.result
  } catch (error) {
    toast.error(error.message)
  }
}
