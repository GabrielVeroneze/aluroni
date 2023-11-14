import { usePratos } from '@/context/Pratos'
import Buscador from '@/components/Buscador'
import Filtros from '@/components/Filtros'
import Ordenador from '@/components/Ordenador'
import Itens from '@/components/Itens'
import filtros from '@/json/filtros.json' 
import styles from './CardapioSecao.module.scss'

const CardapioSecao = () => {
    const { pratos } = usePratos()

    return (
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardápio</h3>
            <Buscador />
            <div className={styles.cardapio__controles}>
                <div className={styles.cardapio__filtros}>
                    {filtros.map(opcao => (
                        <Filtros key={opcao.id} {...opcao} />
                    ))}
                </div>
                <Ordenador />
            </div>
            <div className={styles.cardapio__itens}>
                {pratos.map(item => (
                    <Itens key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default CardapioSecao
