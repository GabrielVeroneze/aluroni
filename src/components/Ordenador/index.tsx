import Opcao from './Opcao'
import opcoes from '@/json/opcoes.json'
import styles from './Ordenador.module.scss'

const Ordenador = () => {
    return (
        <button className={styles.ordenador}>
            <span>Ordenar Por</span>
            <div className={styles.ordenador__options}>
                {opcoes.map(opcao => (
                    <Opcao key={opcao.value} {...opcao} />
                ))}
            </div>
        </button>
    )
}

export default Ordenador