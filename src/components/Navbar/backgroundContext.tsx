import { Context } from "model/common";
import { createContext, useState } from "react";

export const BackgroundContext = createContext({})

const BackgroundProvider = ({ children }: { children: JSX.Element }) => {
    
    const [theme , setTheme] = useState<string>('day')
    const value :Context = {
        theme,
        setTheme,
    }

    return (
        <BackgroundContext.Provider value={value}>
            {children}
        </BackgroundContext.Provider>
    )
}
export default BackgroundProvider