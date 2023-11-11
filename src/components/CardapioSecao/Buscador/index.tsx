import { useContext } from 'react'
import { BuscaContext } from '@/context/Busca'
import styles from './Buscador.module.scss'

const Buscador = () => {
    const { busca, setBusca } = useContext(BuscaContext)

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                value={busca}
                onChange={evento => setBusca(evento.target.value)}
            />
        </div>
    )
}

export default Buscador