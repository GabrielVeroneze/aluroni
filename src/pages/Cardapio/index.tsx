import Cabecalho from '@/components/Cabecalho'
import logo from '@/assets/logo.svg'
import styles from './Cardapio.module.scss'

const Cardapio = () => {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="Logo do Aluroni" />
            </nav>
            <Cabecalho />
        </main>
    )
}

export default Cardapio
