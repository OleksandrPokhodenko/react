import { ThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || '')
    const changeTheme = () => {
        setTheme(prev => (prev === 'dark' ? '' : 'dark'))
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <ThemeContext value={{ theme, changeTheme }}>
            {children}
        </ThemeContext>
    );
}

export default ThemeProvider;