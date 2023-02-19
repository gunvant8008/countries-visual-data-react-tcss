import { useState, useEffect } from "react"
import axios from "axios"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState("Loading...")
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading("Loading...")
    setData(null)
    setError(null)
    const source = axios.CancelToken.source()
    axios
      .get(url, { cancelToken: source.token })
      .then(res => {
        setData(res.data)
        setLoading(null)
        setError(null)
      })
      .catch(err => {
        setLoading(null)
        setError("An Error Occurred. Try Again..")
      })
    return () => {
      source.cancel()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
