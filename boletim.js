const alunos = []
const notas = []

function menu() {
    console.log('Bem-vindo/a!')
    console.log('1 - Cadastrar aluno')
    console.log('2 - Cadastrar notas')
    console.log('3 - Exibir boletim')
    console.log('4 - Sair')
    return Number.parseInt(prompt('Selecione a opção desejada: '))
}

function cadastrarAluno() {
    var nomeAluno = prompt('Nome do aluno: ')
    alunos.push(nomeAluno)
    console.log('Nome cadastrado com sucesso!')
}

function cadastrarNotas() {
    if (alunos.length === 0) {
        console.log('Por favor, cadastre um aluno primeiro.')
        return;
    }
    
    var nomeAluno = prompt('Nome do aluno para cadastrar notas: ')
    var indiceAluno = alunos.indexOf(nomeAluno)

    if (indiceAluno === -1) {
        console.log('Aluno não encontrado.')
        return;
    }

    var numNotas = Number.parseInt(prompt('Quantas notas você deseja cadastrar para ' + nomeAluno + ': '))
    for (var i = 0; i < numNotas; i++) {
        var nota = Math.round(Number(prompt('Insira a nota ' + (i + 1) + ' para ' + nomeAluno + ': ')))
        if (!isNaN(nota)) {
            notas[indiceAluno] = notas[indiceAluno] || []
            notas[indiceAluno].push(nota)
        } else {
            console.log('Insira um número válido.')
            i--;
        }
    }
}

function calcularMedia(notasAluno) {
    var soma = 0
    for (var i = 0; i < notasAluno.length; i++) {
        soma += notasAluno[i]
    }
    var media = Math.round(soma / notasAluno.length)
    return media
}

function exibirBoletim() {
    if (alunos.length === 0) {
        console.log('Nenhum aluno cadastrado.')
        return
    }
    
    var nomeAluno = prompt('Nome do aluno para exibir o boletim: ')
    var indiceAluno = alunos.indexOf(nomeAluno)

    if (indiceAluno === -1) {
        console.log('Aluno não encontrado.')
        return
    }

    var notasAluno = notas[indiceAluno]
    if (!notasAluno || notasAluno.length === 0) {
        console.log('Nenhuma nota cadastrada para este aluno.')
        return
    }

    var media = calcularMedia(notasAluno)

    console.log('Notas: ' + notasAluno)
    console.log('Média: ' + media)

    if (media >= 7) {
        console.log('Situação: Aprovado!')
    } else if (media >= 5 && media < 7) {
        console.log('Situação: Em recuperação')
    } else {
        console.log('Situação: Reprovado ):')
    }
}

var entradaMenu = 0;
while (entradaMenu !== 4) {
    entradaMenu = menu()

    switch (entradaMenu) {
        case 1:
            cadastrarAluno()
            break
        case 2:
            cadastrarNotas()
            break
        case 3:
            exibirBoletim()
            break
        case 4:
            console.log('Programa encerrado.')
            break
        default:
            console.log('Opção inválida. Escolha um número de 1 a 4.')
            break
    }
}