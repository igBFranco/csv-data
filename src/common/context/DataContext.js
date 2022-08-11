import { createContext, useState } from 'react';

export const DataContext = createContext();
DataContext.displayName = "DataContext";

export const DataProvider = ({ children }) => {
    const [file, setFile] = useState();
    return (
        <DataContext.Provider value={ {
           file, 
           setFile
        }}>
            {children}
        </DataContext.Provider>
    )
}