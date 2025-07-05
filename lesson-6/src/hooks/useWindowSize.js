import { useEffect } from "react"
import { useState } from "react"

function useWindowSize(dimension) {
    const validDimension = dimension === 'width' ? 'width' : 'height'
    const getSize = () => validDimension === 'width' ? window.innerWidth : window.innerHeight

    const [size, setSize] = useState(getSize)
    useEffect(() => {
        const handleResize = () => setSize(getSize())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return size
}
export default useWindowSize