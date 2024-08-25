function cadastrarServico (callback){
let cortecabelo = prompt('Qual corte voce quer:')
let precoC = prompt('O valor é 10.00 reais:')
let manicure = prompt('Vamos fazer uma manicure em voce:')
let precoM = prompt('O valor é 15.00 reais:')
let cortebarba = prompt('O senhor quer que faça sua barba: ')
let precoB = prompt('O preco é 12.00 reais:')
servico.push({cortecabelo, precoC, manicure, precoM, cortebarba, precoB})
console.log('O servico foi cadastrado com sucesso')
callback()
}

module.exports = cadastrarServico