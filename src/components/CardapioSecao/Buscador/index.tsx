import styles from './Buscador.module.scss'

const Buscador = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" />
        </div>
    )
}

export default Buscador