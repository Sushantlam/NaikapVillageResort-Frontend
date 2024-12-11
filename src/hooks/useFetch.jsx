import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(url)
       
        setTimeout(() => {
          setLoading(false)
          setData(res.data)
        }, 3000)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchData()
  }, [url])

  const reFetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(url)
      console.log("/product", res)
      setTimeout(() => {
        setLoading(false)
        setData(res.data)
      }, 3000)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  return { data, loading, error, reFetchData }
}

export default Fetch
