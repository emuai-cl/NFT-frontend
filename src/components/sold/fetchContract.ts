import Web3 from "web3"

import { CONTRACT_ADDRESS } from "../../helpers/constants"
import abi from "../../assets/abi.json"
import { toast } from "react-toastify"

//
// AutoProvider
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/3dda2d2e59694900a48fee58f18cde43"
  )
)

export const fetchContract = async () => {
  try {
    const contract = new web3.eth.Contract(abi as any, CONTRACT_ADDRESS)
    const MAX_SUPPLY = Number(await contract.methods.MAX_NFT_SUPPLY().call())
    const TOTAL_SUPPLY = Number(await contract.methods.totalSupply().call())

    return { MAX_SUPPLY, TOTAL_SUPPLY }
  } catch (error) {
    toast(error)
  }
}
