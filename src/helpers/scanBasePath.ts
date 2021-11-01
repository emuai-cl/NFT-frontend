import {
  BSC_MAINNET,
  GOERLI_TESTNET,
  KOVAN_TESTNET,
  MAINNET,
  RINKEBY_TESTNET,
  ROPSTEN_TESTNET,
} from "../constants/known-networks"

export const scanBasePath = (network = MAINNET) => {
  switch (network) {
    case ROPSTEN_TESTNET:
      return "https://ropsten.etherscan.io/token"
    case RINKEBY_TESTNET:
      return "https://rinkeby.etherscan.io/token"
    case GOERLI_TESTNET:
      return "https://goerli.etherscan.io/token"
    case KOVAN_TESTNET:
      return "https://kovan.etherscan.io/token"
    case BSC_MAINNET:
      return "https://bscscan.com/token"
    default:
      return "https://etherscan.io/token"
  }
}
