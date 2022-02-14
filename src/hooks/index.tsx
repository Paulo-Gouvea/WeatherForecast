import React, {
    ReactNode
} from 'react';

import { LocationInfoProvider } from './locationInfo';
import { DarkModeProvider } from './darkMode';

interface AppProviderProps {
    children: ReactNode;
}

function AppProvider({children}: AppProviderProps){
    return(
        <DarkModeProvider>
            <LocationInfoProvider>
                { children }
            </LocationInfoProvider>
        </DarkModeProvider>
    )
}

export { AppProvider };