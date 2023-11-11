import { BuscaProvider } from '@/context/Busca'
import { FiltroProvider } from '@/context/Filtro'
import Cabecalho from '@/components/Cabecalho'
import CardapioSecao from '@/components/CardapioSecao'
import logo from '@/assets/logo.svg'
import styles from './Cardapio.module.scss'

const Cardapio = () => {
    return (
        <BuscaProvider>
        <FiltroProvider>
            <main>
                <nav className={styles.menu}>
                    <img src={logo} alt="Logo do Aluroni" />
                </nav>
                <Cabecalho />
                <CardapioSecao />
            </main>
        </FiltroProvider>
        </BuscaProvider>
    )
}

export default Cardapio
