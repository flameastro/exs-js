/*
ex009: Crie uma função que receba como parâmetro preco e desconto e retorne o preço final com o desconto sobre o preo incluído.

---- Exemplos ----
desconto(15, 10) -> 13.5
desconto(5675, 45) -> 3121.25
desconto(256.99, 2.9) -> 249.53729
*/

function desconto(preco, porcentagem) {
    return preco - (preco * porcentagem) / 100
}

console.log(desconto(15, 10)) // 13.5
console.log(desconto(5675, 45)) // 3121.25
console.log(desconto(256.99, 2.9)) // 249.53729
