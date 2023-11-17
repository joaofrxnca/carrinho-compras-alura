let totalGeral;
limpar ();

function adicionar () {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById ('quantidade').value;
    //calcular subtotal
    let preco = valorUnitario * quantidade
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`
    // atualizar o valor total
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById('valor-total')
    valorTotal.innerHTML = (`R$${totalGeral}`)

    document.getElementById ('quantidade').value = ''
}
function limpar () {
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0'; 
}