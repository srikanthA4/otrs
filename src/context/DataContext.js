import { createContext } from "react";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    return(
        <DataProvider value={{}}>
            {children}
        </DataProvider>
    )
}