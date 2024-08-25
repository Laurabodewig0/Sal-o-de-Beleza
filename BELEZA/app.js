const prompt = require('prompt-sync') ()

const cadastrarCliente = require('cadastrarCliente');
const cadastrarServico = require('cadastrarServico');
const agendarServico = require('agendarServico');
const atualizarAgendamento = require('atualizarAgendamento');
const listarAgendamentos = require('listarAgendamentos')
const removerAgendamento = require('removerAgendamento');
const removerCliente = require('removerCliente');
const removerServico = require('removerServico');

function mainMenu() {
    console.log(`
        1. cadastrar cliente
        2. cadastrar servico
        3. agendar servico
        4. atualizar agendamento
        5. listar agendamentos
        6. remover agendamento
        7. remover cliente
        8. remover servico
        9. sair
        `);
}

const opcao = prompt('Escolha a opcao:');
let index;

switch(opcao){
  default:
    case'1':
    cadastrarCliente();
    const id = prompt('id:');
    const nome = prompt('nome:');
    const cpf = prompt('cpf:');
    const telefone = prompt('telefone:');
    const email = prompt('email');
    cadastrarCliente({id, nome, cpf, telefone, email});
    console.log('Cliente cadastrado com sucesso!');
    mainMenu();
    break;
    case'2':
    cadastrarServico();
    const servico = prompt('servico:');
    const preco = prompt('preco:');
    cadastrarServico({servico, preco});
    console.log('Servico cadastrado com sucesso!');
    mainMenu();
    break;
    case'3':
   agendarServico();
   const horario1 = prompt('horario1:');
   const horario2 = prompt('horario2:');
   const horario3 = prompt('horario3:');
   const horario4 = prompt('horario4:');
   agendarServico({horario1, horario2, horario3, horario4});
   console.log('Agendado com sucesso!');
   mainMenu();
   break;
   case'4':
   atualizarAgendamento();
   index = parseInt(prompt('Agendamento atualizado:'))
   const novoData = prompt('novo data:');
   const novoidCliente = prompt('novo idcliente:');
   const novoHorario = prompt('novo horario:');
   const novoidServico = prompt('novo idservico:');
   atualizarAgendamento(index, {data: novoData, idcliente: novoidCliente, horario: novoHorario, idservico: novoidServico});
   console.log('Agendamento atualizado com sucesso!');
   mainMenu();
   break;
   case'5':
   listarAgendamentos();
   mainMenu();
   break;
   case'6':
   listarAgendamentos();
   index = parseInt(prompt('Agendamento removido:'))
   removerAgendamento();
   console.log('Agendamento removido com sucesso!');
   mainMenu();
   break;
   case'7':
   removerCliente();
   index = parseInt(prompt('Cliente removido:'))
   console.log('Cliente removido com sucesso!');
   mainMenu();
   break;
   case'8':
removerServico();
index = parseInt(prompt('Servico removido:'))
console.log('Servico removido com sucesso!');
mainMenu();
break;

}

mainMenu(); 
