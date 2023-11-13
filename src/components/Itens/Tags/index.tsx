import { ICardapioItem } from '@/interfaces/ICardapioItem'
import styles from './Tags.module.scss'

interface TagsProps {
    item: ICardapioItem
}

const Tags = ({ item }: TagsProps) => {
    const { size, serving, price, category } = item

    return (
        <div className={styles.tags}>
            <div className={styles.tags__tipo}>
                {category.label}
            </div>
            <div className={styles.tags__porcao}>
                {size}g
            </div>
            <div className={styles.tags__pessoas}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    )
}

export default Tags
