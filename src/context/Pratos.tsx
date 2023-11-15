import { createContext, useContext, useEffect, useState } from 'react'
import { useBuscarCardapioPratos } from '@/hooks/useBuscarCardapioPratos'
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
    const { cardapioPratos } = useBuscarCardapioPratos()
    const { pratos, setPratos } = useContext(PratosContext)

    useEffect(() => {
        setPratos(cardapioPratos)
    }, [cardapioPratos, setPratos])

    return {
        pratos
    }
}
