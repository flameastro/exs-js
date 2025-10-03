// ex005: João foi ao supermercado, e comprou 15 batatas, custando R$ 3.45 a unidade. Chegou ao caixa e apresentou um Voucher de desconto de 15%. Qual foi o total da compra?
let batatas = 15
let custoBatatasPorUnidade = 3.45
let preco = batatas * custoBatatasPorUnidade
console.log(`Preço Original: R$${preco}`)  // Preço Original: R$51.75

// Cálculo do Desconto
let voucher = 15
let precoFinal = preco - (preco * voucher / 100)

// Imprimindo o preço final
console.log(`O preço final é de R$${precoFinal}`)  // O preço final é de R$43.9875
