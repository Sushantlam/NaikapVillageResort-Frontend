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
               
                setData(res.data)


            } catch (error) {
                setError(error)
            }

        }
        fetchData()
    }, [url])

    const reFetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            console.log("/product", res);
            setData(res.data)


        } catch (error) {
            setError(error)
        }

    }
    return { data, loading, error, reFetchData }
}

export default Fetch

