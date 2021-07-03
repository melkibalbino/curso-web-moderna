const escola = "Cod3r"

console.log(escola)
console.log(escola.charAt(4)) // Retorna a letra que esta no indice passado
console.log(escola.charAt(5)) // não retorna nada quando é passado
// um indice que nao existe na string
console.log(escola.charCodeAt(3)) // retorna valor unicode
console.log(escola.indexOf('3')) // Retorna o indice do valor passado
console.log(escola.indexOf('n')) // Retorna -1 ao passa um valor que
// não faz parte da string

// Retornar a partir do indice passado - slice
console.log(escola.substring(1))
// retorna a partir do primeiro indice ate o ultimo antes do 
// outro indice passado
console.log(escola.substring(0, 3))

// Concatenação
console.log('Escola '.concat(escola).concat('!'))

console.log(escola.replace(3,  'e'))
console.log(escola.replace('o',  '@'))

// Replace com Regex
console.log(escola.replace(/\d/, 'e'))

console.log('pedro,thiago,joão'.split(','))