import Buscador from '@/components/Buscador'
import Filtros from '@/components/Filtros'
import filtros from '@/json/filtros.json' 
import styles from './CardapioSecao.module.scss'

const CardapioSecao = () => {
    return (
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardápio</h3>
            <Buscador />
            <div className={styles.cardapio__filtros}>
                {filtros.map(opcao => (
                    <Filtros key={opcao.id} {...opcao} />
                ))}
            </div>
        </section>
    )
}

export default CardapioSecao
