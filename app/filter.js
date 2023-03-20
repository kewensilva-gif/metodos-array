const bntFilterAll = document.querySelectorAll(".btn");

bntFilterAll.forEach(btnFilter => btnFilter.addEventListener('click', filtraLivros))

function filtraLivros(){
    const categoria = this.value;
    const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        const valorTotal = calculaValorTotalLivrosDisponiveis(livros).toFixed(2);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorDisponibilidade(){
    return livros.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria){
    return livros.filter(livro => livro.categoria == categoria);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valor){
    elementoValTotalLivrosDisp.innerHTML = `
    <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
  </section> 
    `
}