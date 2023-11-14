import { PratosProvider } from '@/context/pratos'
import { BuscaProvider } from '@/context/Busca'
import { FiltroProvider } from '@/context/Filtro'
import { OrdenarProvider } from '@/context/Ordenar'
import Cabecalho from '@/components/Cabecalho'
import CardapioSecao from '@/components/CardapioSecao'
import logo from '@/assets/logo.svg'
import styles from './Cardapio.module.scss'

const Cardapio = () => {
    return (
        <PratosProvider>
        <BuscaProvider>
        <FiltroProvider>
        <OrdenarProvider>
            <main>
                <nav className={styles.menu}>
                    <img src={logo} alt="Logo do Aluroni" />
                </nav>
                <Cabecalho />
                <CardapioSecao />
            </main>
        </OrdenarProvider>
        </FiltroProvider>
        </BuscaProvider>
        </PratosProvider>
    )
}

export default Cardapio
