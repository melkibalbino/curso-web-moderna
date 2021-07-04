let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// usando operadores logicos para transformar em boleano
// js aceita number como verdadeiro
isAtivo = 1
console.log(typeof isAtivo)
console.log(isAtivo)
console.log(!!isAtivo)

console.log('São verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // Com espaço em branco
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))// qualquer valor que seja como verdadeiro

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = 0))
console.log(!!(isAtivo = null))

// para finalizar
console.log('' || null || 0 || 'epa' || 123)

// Usado muito para colocar valores padrões
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Jurema'
console.log(nome || 'Desconhecido')