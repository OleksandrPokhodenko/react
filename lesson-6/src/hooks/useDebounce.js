import { useState } from "react";
import { useEffect } from "react"

function useDebounce(value, delay) {
    const [debounceSearch, setDebounceSearch] = useState(value)
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceSearch(value)
        }, delay)
        return () => clearTimeout(timeOutId)
    }, [value, delay])
    return (debounceSearch)
}
export default useDebounce