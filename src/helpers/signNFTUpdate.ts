import Web3 from "web3"
import { toast } from "react-toastify"
import { createRequestAsync } from "./createRequestAsync"

type Signed = { id?: number; jsonrpc: string; result: string }

export const signNFTUpdate = async (web3: Web3, path: string, id: number) => {
  try {
    if (!web3) throw new Error(`Connect your wallet`)

    const [address] = await web3.eth.getAccounts()

    if (!address) throw new Error(`Couldn't find address`)
    const signTypedData = createRequestAsync<Signed>(web3, "eth_signTypedData")
    const result = await signTypedData({
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
