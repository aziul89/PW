class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

// Classe ContaCorrente (Herda de ContaBancaria)
class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}

// Lista de contas criadas
const contas = [];

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    let novaConta;

    if (tipo === "Conta Corrente") {
        const cartaoCredito = prompt("Informe o limite do cartão de crédito:");
        novaConta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
    } else if (tipo === "Conta Poupança") {
        novaConta = new ContaPoupanca(agencia, numero, saldo);
    } else if (tipo === "Conta Universitária") {
        novaConta = new ContaUniversitaria(agencia, numero, saldo);
    }

    contas.push(novaConta);
}

function deletarConta() {
    const indice = prompt("Informe o índice da conta a ser deletada:");
    if (indice >= 0 && indice < contas.length) {
        contas.splice(indice, 1);
    }
}

function visualizarContas() {
    const contasList = document.getElementById("contas-list");
    contasList.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const conta = contas[i];
        const listItem = document.createElement("li");
        listItem.textContent = `Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: ${conta.getSaldo()}`;
        contasList.appendChild(listItem);
    }
}
