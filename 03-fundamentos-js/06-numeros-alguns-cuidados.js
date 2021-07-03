console.log(7 / 0) // retorna tipo infinito
console.log('show' * 2) // Não repete a string
console.log(0.1 + 0.7) // não retorna 0.8
// console.log(10.toString())
// console.log((10).toString())
console.log((10.1564598).toFixed(2))

/**
 * Quando dois tipo diferentes entao na mesma operação
 * Como por exempro uma string + number
 * o js tenta primeiro tratar os dois valores como string
 * no caso do + ele concatena, porem o sinal de divisor
 * não faz sentindo em opeção com strings então ele transforma
 * em number e faz a operação
 */

console.log('10' / 2) // faz a divisão so em caso de valor inteiro na string
const vl1 = '3' + 2
console.log(vl1) // retorna uma string
console.log(typeof vl1) // retorna uma string
const vl2 = '3' - 2
console.log(vl2) // retorna um number
console.log(typeof vl2) // retorna um number