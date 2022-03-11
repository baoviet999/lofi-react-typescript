import { createContext, ReactNode, useState } from "react";

interface ThemeContexProviderProps {
    children : ReactNode
}


interface defaultTheme {
    theme: string;
    handleChangeTheme: (theme: string) => void;
}
const defaultThemeContext: defaultTheme = {
    theme: "primary",
    handleChangeTheme: () => {},
};


export const ThemeContext = createContext<defaultTheme>(defaultThemeContext);




const ThemeProvider = ({ children }: ThemeContexProviderProps) => {
    const [theme, setTheme] = useState(defaultThemeContext.theme)
    const handleChangeTheme = (theme: string) => {
        setTheme(theme)
    }

    const valueDynamic = {
        theme,
        handleChangeTheme
    }
    return (
        <ThemeContext.Provider value={valueDynamic}>
            {children}
        </ThemeContext.Provider>
    )
}