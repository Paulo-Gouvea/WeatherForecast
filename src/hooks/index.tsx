import React, {
    ReactNode
} from 'react';

import { LocationInfoProvider } from './locationInfo';

interface AppProviderProps {
    children: ReactNode;
}

function AppProvider({children}: AppProviderProps){
    return(
        <LocationInfoProvider>
            { children }
        </LocationInfoProvider>
    )
}

export { AppProvider };