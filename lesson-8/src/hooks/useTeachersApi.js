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
    const deleteTeacher = async (id) => {
        setLoading(true)
        setError(null)
        try {
            const confirmation = confirm('Ви точно хочете видалити вчителя?')
            if (confirmation) {
                await axios.delete(apiRoutes.deleteTeacher(id))
                setData(prev => prev.filter(teacher => teacher.id !== id))
            }
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    const editTeacher = async (id, updateTeacher) => {
        setLoading(true)
        setError(null)
        try {
            const res = await axios.put(apiRoutes.editTeacher(id), updateTeacher)
            setData(prev => prev.map(teacher => teacher.id === id ? res.data : teacher))
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    const addTeacher = async (newTeacher) => {
        setLoading(true)
        setError(null)
        try {
            const res = await axios.post(apiRoutes.addTeacher, newTeacher)
            setData(prev => [...prev, res.data])
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        {
            error,
            loading,
            data,
            fetchTeachers,
            deleteTeacher,
            editTeacher,
            addTeacher
        }
    )
}

export default useTeachersApi