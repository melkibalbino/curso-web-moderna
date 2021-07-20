const prod1 = {} // iniciando um objeto vazio
prod1.nome = 'Celular Ultra Mega' // adicionando atributo dinamicamente
prod1.preco = 49656.58
prod1['desconto legal'] = 0.40 // não e recomendado chaves com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.99,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}
console.log(prod2)