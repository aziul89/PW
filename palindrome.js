let palavra = prompt('Digite uma palavra: ')
let reverso = palavra.split('').reverse().join('')
let resposta = palavra === reverso?'Essa palavra é um palíndromo.':'Essa palavra não é um palíndromo.'
console.log(resposta)
