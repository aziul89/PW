var saldo = 100
const historicoTransacoes = []

function menu(){
    console.log('Bem vindo/a ao menu da sua conta bancária!')
    console.log('1 - Depositar')
    console.log('2 - Sacar')
    console.log('3 - Ver saldo')
    console.log('4 - Histórico de transações')
    console.log('5 - Sair')
    return Number.parseInt(prompt('Selecione a opção desejada: '))
}

function depositar(){
    var valor = Number.parseFloat(prompt('Digite o valor: '))
    if (isNaN(valor) || valor <= 0){
        console.log('Por favor, digite um valor válido.')
        return
    }
    console.log('Valor de R$' + valor + ' depositado com sucessso!')
    saldo += valor 
    historicoTransacoes.push({forma: 'Depósito', valor, data: new Date()})
    console.log('Seu saldo atual é de R$' + saldo)
}

function sacar(){
    var valor = Number.parseFloat(prompt('Digite o valor: '))
    if (isNaN(valor) || valor <= 0){
        console.log('Por favor, digite um valor válido.')
        return
    }
    if (saldo < valor){
        console.log('Saldo insuficiente.')
        return
    }
    console.log('Valor de R$' + valor + ' sacado com sucessso!')
    saldo -= valor 
    historicoTransacoes.push({forma: 'Saque', valor, data: new Date()})
    console.log('Seu saldo atual é de R$' + saldo)
}

function verSaldo(){
    console.log('Seu saldo é de R$' + saldo)
}

function formatarData(data){
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`
}

function histotrans(){
    for (const transacao of historicoTransacoes) {
        const dataFormatada = formatarData(transacao.data);
        console.log(`${transacao.forma}: R$${transacao.valor} em ${dataFormatada}`)
    }
}   

var opcaoMenu = 0
while (opcaoMenu !== 5) {
    opcaoMenu = menu()

    switch (opcaoMenu) {
        case 1:
            depositar()
            break;
        case 2:
            sacar()
            break
        case 3:
            verSaldo()
            break
        case 4:
            histotrans()
            break
        case 5:
            console.log('Saindo...\nVocê saiu do programa.')
            break
        default:
            console.log('Por favor, escolha um número de 1 a 5.')
            break
    }
}