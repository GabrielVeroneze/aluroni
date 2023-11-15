export const verificaBusca = (title: string, busca: string) => {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
}

export const verificaFiltro = (id: number, filtro: number | null) => {
    if (filtro !== null) {
        return filtro === id
    }
    return true
}
