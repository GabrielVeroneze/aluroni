import { ICardapioItem } from '@/interfaces/ICardapioItem'
import styles from './Tags.module.scss'

interface TagsProps {
    item: ICardapioItem
}

const Tags = ({ item }: TagsProps) => {
    return (
        <div className={styles.tags}>
            <div className={styles.tags__tipo}>
                {item.category.label}
            </div>
            <div className={styles.tags__porcao}>
                {item.size}g
            </div>
            <div className={styles.tags__pessoas}>
                Serve {item.serving} pessoas
            </div>
            <div className={styles.tags__valor}>
                R$ {item.price}
            </div>
        </div>
    )
}

export default Tags
