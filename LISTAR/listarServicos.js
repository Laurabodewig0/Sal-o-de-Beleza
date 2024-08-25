function listarServicos(){
  servico.forEach((servico, index ) => {
    servico[index] = servico
    console.log(`
    id: ${servico.id}
    Servico: ${servico.servico}
    Preco: ${servico.preco}`);
  });
}

module.exports = listarServicos