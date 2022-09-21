// 1 - Criar context

import { createContext, useState } from "react"; //sempre importar o creatContext e o useState para usar context


export const CounterContext = createContext() // exportar dessa forma

// 2 - Criar provider

export const CounterContextProvider= ({children}) => {
    const [counter, setCounter] = useState(5)
    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}