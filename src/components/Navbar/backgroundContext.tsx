import { Context } from "model/common";
import { createContext, ReactNode, useState } from "react";

interface BackgroundProviderProps {
    children: ReactNode;
}
interface DefaultBackGround {
    theme: "day" | "night";
    onChange: (theme: DefaultBackGround["theme"]) => void;
}
const defaultBackGroundContext: DefaultBackGround = {
    theme: "day",
    onChange: () => {},
};

export const BackgroundContext = createContext(defaultBackGroundContext);

const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
    const [theme, setTheme] = useState<DefaultBackGround["theme"]>(defaultBackGroundContext.theme);
    const onChange = (theme: DefaultBackGround["theme"]) => {
        setTheme(theme);
    };
    const value: DefaultBackGround = {
        theme,
        onChange,
    };

    return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>;
};
export default BackgroundProvider;
