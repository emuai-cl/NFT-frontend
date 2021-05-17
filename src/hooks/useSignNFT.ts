import { useCallback } from "react"
import type Web3 from "web3"
import { signNFTUpdate } from "../helpers/signNFTUpdate"

type RestArguments<F extends Function> = F extends (
  web3: Web3,
  ...args: infer A
) => any
  ? A
  : never

type SignNFTArguments = RestArguments<typeof signNFTUpdate>

export const useSignNFT = (web3: Web3) =>
  useCallback((...args: SignNFTArguments) => signNFTUpdate(web3, ...args), [
    web3,
  ])
