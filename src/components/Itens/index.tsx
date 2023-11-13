import { ICardapioItem } from "@/interfaces/ICardapioItem"
import Tags from "./Tags"
import styles from './Itens.module.scss'

interface ItensProps {
    item: ICardapioItem
}

const Itens = ({ item }: ItensProps) => {    
    return (
        <div className={styles.item}>
            <img
                className={styles.item__imagem}
                src={item.photo}
                alt=""
            />
            <div className={styles.item__info}>
                <h2 className={styles.item__titulo}>
                    {item.title}
                </h2>
                <p className={styles.item__descricao}>
                    {item.description}
                </p>
                <Tags item={item} />
            </div>
        </div>
    )
}

export default Itens