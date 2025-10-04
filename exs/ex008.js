/*
ex008: Crie uma função que receba como parâmetro preco e aumento e retorne o preço final com a porcentagem do aumento incluído.

---- Exemplos ----
aumento(1500, 10) -> 1650
aumento(2450, 50) -> 3675
aumento(76500, 75) -> 133875
*/

function aumento(preco, aumento) {
    return preco + (preco * aumento) / 100
}

console.log(aumento(1500, 10)) // 1650
console.log(aumento(2450, 50)) // 3675
console.log(aumento(76500, 75)) // 133875
console.log(aumento(250000, 15)) // 287500
console.log(aumento(245.59, 45.7)) // 357.82463
