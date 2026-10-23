let num = [5, 8, 2, 9, 3]
num.sort() // por em ordem
num.push(1) // o 1 fica no final pq a ordem veio antes
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)