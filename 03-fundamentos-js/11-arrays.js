const valores = [7.7, 8.1, 6.3, 9.5]
console.log(valores[0], valores[3])
console.log(valores[5]) // não retorna erro quando é passado
// indice que nao existe | retorna undefined

valores[5] = 1.1
console.log(valores[5]) // não retorna erro quando é passado

console.log(valores)
console.log(valores.length)

// pode adicionar mais de um valor
valores.push({id: 1}, false, null, 'teste')
console.log(valores)


console.log(valores.pop())
console.log(valores)
delete valores[1]
console.log(valores)
console.log('tipo do array:', typeof valores)
