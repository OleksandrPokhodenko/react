import { useCallback } from "react"
import { useState } from "react"
import apiRoutes from "../api/apiRoutes"
import axios from 'axios'

function useTeachersApi() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchTeachers = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await axios.get(apiRoutes.teachersList)
            setData(res.data)
        } catch (error) {
            if (error) setError(error)
        }
        finally {
            setLoading(false)
        }
    }, [])
    return (
        {
            error,
            loading,
            data,
            fetchTeachers
        }
    )
}

export default useTeachersApi