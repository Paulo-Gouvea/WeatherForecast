import React, {
    ReactNode,
    createContext,
    useState,
    useContext,
} from 'react';

interface DarkModeProviderProps {
    children: ReactNode;
}

interface DarkModeContextData {
    isDarkModeOn: boolean;
    handleDarkMode(): void;
}

const DarkModeContext = createContext({} as DarkModeContextData);

function DarkModeProvider({ children }: DarkModeProviderProps){
    const [isDarkModeOn, setIsDarkModeOn] = useState(false);

    function handleDarkMode(){
        setIsDarkModeOn(!isDarkModeOn);
    }

    return (
        <DarkModeContext.Provider
            value={{
                isDarkModeOn, handleDarkMode
            }}
        >
            { children }
        </DarkModeContext.Provider>
    )
}

function useDarkMode(){
    const context = useContext(DarkModeContext);

    return context;
}

export { DarkModeProvider, useDarkMode };