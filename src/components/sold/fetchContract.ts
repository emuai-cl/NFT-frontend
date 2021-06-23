import { toast } from "react-toastify"
import { axiosInstance } from "../../helpers/axios"

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
