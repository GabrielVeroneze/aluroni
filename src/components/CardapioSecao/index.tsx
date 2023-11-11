import Buscador from '@/components/Buscador'
import styles from './CardapioSecao.module.scss'

const CardapioSecao = () => {
    return (
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardápio</h3>
            <Buscador />
            <div className={styles.cardapio__filtros}>
            </div>
        </section>
    )
}

export default CardapioSecao
