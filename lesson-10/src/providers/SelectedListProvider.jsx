import { SelectedListContext } from "@/context/SelectedListContext";
import { useState } from "react";

function SelectedListProvider({ children }) {
    const [dataSummary, setDataSummary] = useState([])

    const addItem = (item) => {
        const id = new Date().getTime()
        item.id = id
        setDataSummary(prev => [...prev, item])
    }

    const removeItem = (id) => {
        setDataSummary(prev => prev.filter(item => item.id !== id))
    }

    return (
        <SelectedListContext value={{ dataSummary, addItem, removeItem }}>
            {children}
        </SelectedListContext>
    );
}

export default SelectedListProvider;