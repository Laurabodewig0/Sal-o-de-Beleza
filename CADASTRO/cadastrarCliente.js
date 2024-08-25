function cadastrarCliente(callback) {
    let id  = prompt('Qual é seu id: ')
    let nome = prompt('Qual é seu nome: ')
    let cpf = prompt('Qual é seu cpf: ')
    let telefone = prompt('Qual é seu número de telefone: ')
    let email = prompt('Qual é seu email:')
    cliente.push({id, nome, cpf, telefone, email})
    console.log('Cliente Cadastrado')
    callback()
}
module.exports = cadastrarCliente