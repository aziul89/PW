const produtos = []
const pessoas = []

function menu(){
    console.log('Bem vindo/a! Aqui está o menu de opções.')
    console.log('1 - Cadastrar Produto')
    console.log('2 - Cadastrar Pessoa')
    console.log('3 - Realizar Sorteio')
    console.log('4 - Sair')
    return Number.parseInt(prompt('Digite sua escolha: '))
}

function cadastroProduto() {
    var nomeProd = prompt('Digite o nome do produto: ')
    produtos.push(nomeProd)
    console.log('Pronto!')
}

function cadastroPessoa() {
    var nomePes = prompt('Digite o nome da pessoa: ')
    pessoas.push(nomePes)
    console.log('Pronto!')
}

function sorteio() {
    if (produtos.length === 0 || pessoas.length === 0){
        console.log('Para realizar o sorteio é necessário cadastrar pessoas e/ou produtos.')
        return
    }
    const sorteioNumero = Math.floor(Math.random()*produtos.length)
    const pessoaSorteada = Math.floor(Math.random()*pessoas.length)

    console.log('Pessoa sorteada: ' + pessoas[pessoaSorteada])
    console.log('Prêmio: ' + produtos[sorteioNumero])
}

var entradaMenu = 0
while (entradaMenu !== 4){
    entradaMenu = menu()

    switch (entradaMenu) {
        case 1:
            cadastroProduto()
            break;
        case 2:
            cadastroPessoa()
            break;
        case 3:
            sorteio()
            break;
        case 4:
            console.log('Encerrando...\nVocê encerrou o programa.')
            break;
        default:
            console.log('Opção inválida. Escolha um número de 1 a 4.')
            break;
    }
}