import { createContext, useContext, useEffect, useState } from 'react'
import { ICardapioItem } from '@/interfaces/ICardapioItem'

interface PratosContextType {
    pratos: ICardapioItem[]
    setPratos: React.Dispatch<React.SetStateAction<ICardapioItem[]>>
}

const defaultValue: PratosContextType = {
    pratos: [],
    setPratos: () => {},
}

export const PratosContext = createContext<PratosContextType>(defaultValue)
PratosContext.displayName = 'Pratos'

interface PratosProviderProps {
    children: React.ReactNode
}

export const PratosProvider = ({ children }: PratosProviderProps) => {
    const [pratos, setPratos] = useState<ICardapioItem[]>(defaultValue.pratos)

    return (
        <PratosContext.Provider value={{ pratos, setPratos }}>
            {children}
        </PratosContext.Provider>
    )
}

export const usePratos = () => {
    const { pratos, setPratos } = useContext(PratosContext)

    useEffect(() => {
        (async function () {
            try {
                const resposta = await fetch('https://my-json-server.typicode.com/gabrielveroneze/aluroni-api/itens')
                const dados = await resposta.json()
                setPratos(dados)
            } catch (erro) {
                console.log(erro)
            }
        })()
    }, [setPratos])

    return {
        pratos
    }
}

