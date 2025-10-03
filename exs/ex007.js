// ex007: Sabendo que você possui duas camisas, tem um frete de 12 reais e o valor total da compra é de 172 reais, descubra qual é o preço do valor da camisa por unidade
let quantidadeCamisas = 2;
let valorFreteReais = 12;
let valorTotal = 172;

let valorCamisaUnitaria = (valorTotal - valorFreteReais) / quantidadeCamisas
console.log(`O preço do valor unitário da camisa é de R$${valorCamisaUnitaria}`) // O preço do valor unitário da camisa é de R$80
