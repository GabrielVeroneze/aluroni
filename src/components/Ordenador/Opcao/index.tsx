import { useContext } from 'react'
import { OrdenarContext } from '@/context/Ordenar'
import styles from './Opcao.module.scss'

interface OpcaoProps {
    nome: string
    value: string
}

const Opcao = ({ nome, value }: OpcaoProps) => {
    const { setOrdenador } = useContext(OrdenarContext)

    return (
            {nome}
        </div>
    )
}

export default Opcao
