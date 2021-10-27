import React, { useMemo } from "react"
import type { PageProps } from "gatsby"

import useSWR from "swr"
import { axiosInstance } from "../helpers/axios"

type Location = PageProps["location"]

const useID = (location: Location) => {
  const id = useMemo(() => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get("id")
  }, [location])
  return id
}

const NFTPage = (props: PageProps) => {
  const id = useID(props.location)
  const { data, error } = useSWR(["nft/metadata", id], async (url, key) => {
    try {
      const response = await axiosInstance.get(`${url}/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  })

  if (error) return "error"

  return (
    <div>
      <p>sssss: {JSON.stringify(data)}</p>
    </div>
  )
}
export default NFTPage
