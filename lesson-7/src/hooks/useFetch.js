import { useEffect, useState } from "react"

function useFetch(url, deps = []) {
    const [isLoading, setIsLoading] = useState(false)
    const [dataList, setDataList] = useState(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        if (!url) return
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(url)
                const data = await res.json()
                setDataList(data)
            }
            catch (err) {
                if (err) setError(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url, ...deps])
    return { dataList, isLoading, error }
}
export default useFetch