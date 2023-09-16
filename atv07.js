class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(novoSaldo) {
      this._saldo = novoSaldo;
    }
  
    sacar(valor) {
      if (valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this._saldo}`);
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this._saldo}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito, saldo = 0) {
      super(agencia, numero, "Conta Corrente", saldo);
      this._cartaoCredito = cartaoCredito;
    }
  
    get cartaoCredito() {
      return this._cartaoCredito;
    }
  
    set cartaoCredito(novoCartaoCredito) {
      this._cartaoCredito = novoCartaoCredito;
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
      super(agencia, numero, "Conta Poupança", saldo);
    }
  }
  
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
      super(agencia, numero, "Conta Universitária", saldo);
    }
  
    sacar(valor) {
      if (valor <= 500 && valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this._saldo}`);
      } else {
        console.log("Limite de saque excedido ou saldo insuficiente.");
      }
    }
  }
  
  // Exemplo de uso das classes
  const contaCorrente = new ContaCorrente("001", "12345", 1000, 2000);
  const contaPoupanca = new ContaPoupanca("002", "67890", 5000);
  const contaUniversitaria = new ContaUniversitaria("003", "54321", 1000);
  
  contaCorrente.depositar(500);
  contaCorrente.sacar(200);
  console.log(`Saldo da Conta Corrente: R$ ${contaCorrente.saldo}`);
  
  contaPoupanca.depositar(1000);
  contaPoupanca.sacar(800);
  console.log(`Saldo da Conta Poupança: R$ ${contaPoupanca.saldo}`);
  
  contaUniversitaria.depositar(200);
  contaUniversitaria.sacar(600);
  console.log(`Saldo da Conta Universitária: R$ ${contaUniversitaria.saldo}`);
  
  