import useSWR from "swr"

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    cache: "default"
  }).then(res => res.json())

const useGetImages = () => {
  const { data, error } = useSWR("/api/listCryptoLogo", fetcher)
  return { data, error }
}

export default useGetImages
