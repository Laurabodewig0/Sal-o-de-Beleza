const clientes = [
  {id: 1, Nome:'Alexandre', CPF:'154.542.518-51', Telefone:'(42)25235-1523', Email:'alexandre@gmail.com'},
  {id: 2, Nome:'Felipe', CPF:'156.458.235-65', Telefone:'(65)54548-5453', Email:'felipe@gmail.com'},
  {id: 3, Nome:'Joao', CPF:'458.156.154-62', Telefone:'(75)32543-5113', Email:'joao@gmail.com'},
  {id: 4, Nome:'Isadora', CPF:'354.153.154-56', Telefone:'(45)34548-3321', Email:'isadora@gmail.com'}
];


const servicos = [
  {id: 1, Servico:'Corte de cabelo', PrecoC:'10.00'},
  {id: 2, Servico:'Manicure', PrecoM:'15.00'},
  {id: 3, Servico:'Corte barba', PrecoB:'12.00'}
];


const agendamento = [
  {id: 1, Data:'12-12-2000', idCliente: 1, Horario1:'10:00', idServico: 3},
  {id: 2, Data:'35-45-2001', idCliente: 2, Horario2:'10:30', idServico: 1},
  {id: 3, Data:'45-31-2002', idCliente: 3, Horario3:'11:00', idServico: 2},
  {id: 4, Data:'12-32-2003', idCliente: 4, Horario4:'12:00', idServico: 1}
];

module.exports = [clientes, servicos, agendamento];