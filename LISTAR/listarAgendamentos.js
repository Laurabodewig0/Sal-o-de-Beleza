function listarAgendamentos() {
agendamento.forEach((agendamento, index) => {
  agendamento[index] = agendamento;
  console.log(`
id: ${agendamento.id}
 Data: ${agendamento.data}
 idCliente: ${agendamento.idcliente}
 Horario: ${agendamento.horario}
 idServico: ${agendamento.idservico}`);
});
}

module.exports = listarAgendamentos