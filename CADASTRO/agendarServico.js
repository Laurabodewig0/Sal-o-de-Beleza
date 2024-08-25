function agendarServico(callback) {
let horario1 = prompt('O seu horario ficou para 10:00 horas:')
let horario2 = prompt('O seu horario ficou para 10:30 horas:')
let horario3 = prompt('O seu horario ficou para 11:00 horas:')
let horario4 = prompt('O seu horario ficou para 12:00 horas:')
agendamento.push({horario1, horario2, horario3, horario4})

console.log('O servico foi agendado com sucesso')
callback()
}

module.exports = agendarServico