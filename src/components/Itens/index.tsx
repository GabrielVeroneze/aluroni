import { ICardapioItem } from "@/interfaces/ICardapioItem"
import styles from './Itens.module.scss'

interface ItensProps {
    item: ICardapioItem
}

const Itens = ({ item }: ItensProps) => {    
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={item.photo} alt="" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Itens