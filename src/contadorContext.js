import React, { useState, useContext} from 'react'

const counterContext = React.createContext();
const incrementar = React.createContext();
const decrementar = React.createContext();

export function useCounter(){
    return useContext(counterContext)
}

export function IncrementarContador(){
    return useContext(incrementar)
}

export function DecrementarContador(){
    return useContext(decrementar)
}

export function CounterProvider({children}){
    let [contador, setContador]=useState(0)

    function implementarCounter(){
        contador++
        setContador(contador)
    }
    
    function decrementarCounter(){
        contador--
        setContador(contador)
    }

    return(
        <counterContext.Provider value={contador}>
            <incrementar.Provider value={implementarCounter}>
                <decrementar.Provider value={decrementarCounter}>
                    {children}
                </decrementar.Provider>
            </incrementar.Provider>
        </counterContext.Provider>
        
    )

}
