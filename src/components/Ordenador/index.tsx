import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import classNames from 'classnames'
import Opcao from './Opcao'
import opcoes from '@/json/opcoes.json'
import styles from './Ordenador.module.scss'

const Ordenador = () => {
    const [aberto, setAberto] = useState<boolean>(false)

    return (
        <button
            className={styles.ordenador}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>Ordenar Por</span>
            {aberto ? (
                <MdKeyboardArrowUp size={20} />
            ) : (
                <MdKeyboardArrowDown size={20} />
            )}
            <div
                className={classNames({
                    [styles.ordenador__options]: true,
                    [styles['ordenador__options--ativo']]: aberto
                })}
            >
                {opcoes.map(opcao => (
                    <Opcao key={opcao.value} {...opcao} />
                ))}
            </div>
        </button>
    )
}

export default Ordenador