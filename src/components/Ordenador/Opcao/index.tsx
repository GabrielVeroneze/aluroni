import styles from './Opcao.module.scss'

interface OpcaoProps {
    nome: string
    value: string
}

const Opcao = ({ nome, value }: OpcaoProps) => {
    return (
        <div className={styles.option}>
            {nome}
        </div>
    )
}

export default Opcao
