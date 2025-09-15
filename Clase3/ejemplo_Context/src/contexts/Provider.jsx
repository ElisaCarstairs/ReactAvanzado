import { createContext, useState } from "react";

const AppContext = createContext();

function Provider ({ children }) {
    const [value, setValue] = useState("");

    return (
        <AppContext.Provider value={{value, setValue}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, Provider };