function executar(fn, n1 = 0, n2 = 0) {
    if (typeof fn == "function") {
        return fn(n1, n2)
    }
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a/b
}

while (true) {
    var opcao = prompt("Escolha uma operação (ou digite 'parar' para encerrar):")

    if (opcao === "parar") {
        console.log("Encerrado.")
        break;
    }

    var numero1 = parseFloat(prompt("Digite o primeiro número:"))
    var numero2 = parseFloat(prompt("Digite o segundo número:"))

    var resultado;

    if (opcao === "somar") {
        resultado = executar(somar, numero1, numero2)
    } else if (opcao === "subtrair") {
        resultado = executar(subtrair, numero1, numero2)
    } else if (opcao === "multiplicar") {
        resultado = executar(multiplicar, numero1, numero2)
    } else if(opcao === 'dividir') {
        resultado = executar(dividir, numero1, numero2)
    } else {
        console.log("Opção inválida.")
        continue;
    }

    console.log("Resultado: " + resultado)
}
