const peso1 = 1.0 // é igual a inteiro 1 apesar do .0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// Verificar se valor é um inteiro
console.log('Peso 1 é inteiro:', Number.isInteger(peso1))
console.log('Peso 2 é inteiro:', Number.isInteger(peso2))

const avaliacao1 = 9.875
const avaliacao2 = 6.822

const total = avaliacao1 * peso1 + avaliacao2 + peso2
const media = total / (peso1 + peso2)

console.log(media)
// Retornar valor com casas decimais fixada | valor de media continua do mesmo jeito
console.log(media.toFixed(2))

// converter em string
console.log(typeof media.toString())
console.log(peso2.toString(2)) // Em binario 
