let btnOrnarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrnarPorPreco.addEventListener('click', ordenarLivrosPorPreco)


function ordenarLivrosPorPreco(){
    let livrosOPrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOPrdenados)
}