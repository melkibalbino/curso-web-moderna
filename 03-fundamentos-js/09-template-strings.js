const nome = 'Rebeca'
const concatenacao1 = 'Olá ' + nome + '!' // não pode quebrar linha
// dentro de uma string
console.log(concatenacao1)

const template = `
    Olá
    ${nome}!`
// Template string aceita quebra de linha

console.log(template)
// expressoes dentro de template strings
console.log(`1 + 1 = ${1 + 1}`)

// Funções dentro de template strings
const up = s => s.toUpperCase()
console.log(`Olá ${up(nome)}!`)