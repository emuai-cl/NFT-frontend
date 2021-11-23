import type Web3 from "web3"

export const createRequestAsync = <T>(web3: Web3, method: string) => (
  object: Record<string, unknown>
) =>
  new Promise<T>((resolve, reject) =>
    web3.currentProvider["sendAsync"](
      { method, ...object },
      (error, response) => {
        if (error) reject(error)
        resolve(response)
      }
    )
  )
