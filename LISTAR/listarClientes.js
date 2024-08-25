function listarClientes(){
  cliente.forEach((cliente, index) =>{
cliente[index] = cliente;
console.log(`
id: ${cliente.id}
Nome: ${cliente.nome}
CPF: ${cliente.cpf}
Telefone: ${cliente.telefone}
Email: ${cliente.email}`);
  });
}

module.exports = listarClientes