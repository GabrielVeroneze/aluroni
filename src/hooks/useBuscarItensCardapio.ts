import { useEffect, useState } from 'react'
import { ICardapioItem } from '@/interfaces/ICardapioItem'

export const useBuscarItensCardapio = () => {
    const [cardapioItens, setCardapioItens] = useState<ICardapioItem[] | []>([])
    
    useEffect(() => {
        (async function () {
            try {
                const resposta = await fetch('https://my-json-server.typicode.com/gabrielveroneze/aluroni-api/itens')
                const dados = await resposta.json()
                setCardapioItens(dados)
            } catch (erro) {
                console.log(erro)
            }
        })()
    }, [])

    return {
        cardapioItens
    }
}