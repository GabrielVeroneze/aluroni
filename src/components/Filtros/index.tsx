import { useFiltro } from '@/context/Filtro'
import classNames from 'classnames'
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
                className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles['filtros__filtro--ativo']]: filtro === id,
                })}
                onClick={() => selecionarFiltro(id)}
            >
                {label}
            </button>
        </div>
    )
}

export default Filtros
