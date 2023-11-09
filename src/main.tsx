import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/reset.css'
import '@/styles/index.css'
import Cardapio from '@/pages/Cardapio'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Cardapio />
    </React.StrictMode>
)
