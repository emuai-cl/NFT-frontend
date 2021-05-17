import axios from "axios"

import { API_URL } from "../../helpers/constants"
import { toast } from "react-toastify"

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
})

export const fetchContract = async () => {
  try {
    const { data } = await axiosInstance.get("/nft/supply")
    const MAX_SUPPLY = Number(data?.totalSupply)
    const TOTAL_SUPPLY = Number(data?.currentSupply)

    return { MAX_SUPPLY, TOTAL_SUPPLY }
  } catch (error) {
    toast(error)
    return { MAX_SUPPLY: 5940, TOTAL_SUPPLY: 0 }
  }
}
