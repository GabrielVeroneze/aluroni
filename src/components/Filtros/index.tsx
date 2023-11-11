import { useFiltro } from '@/context/Filtro'
import styles from './Filtros.module.scss'

interface FiltrosProps {
    id: number
    label: string
}

const Filtros = ({ label, id }: FiltrosProps) => {
    const { filtro, selecionarFiltro } = useFiltro()

    return (
        <div className={styles.filtros}>
            <button
                className={styles.filtros__filtro}
                onClick={() => selecionarFiltro(id)}
            >
                {label}
            </button>
        </div>
    )
}

export default Filtros
