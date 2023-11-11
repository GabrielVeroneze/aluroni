import styles from './Filtros.module.scss'

interface FiltrosProps {
    id: number
    label: string
}

const Filtros = ({ label, id }: FiltrosProps) => {
    const selecionarFiltro = () => {
        console.log('Selecionado!')
    }

    return (
        <div className={styles.filtros}>
            <button
                className={styles.filtros__filtro}
                onClick={() => selecionarFiltro()}
            >
                {label}
            </button>
        </div>
    )
}

export default Filtros
