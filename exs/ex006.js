// ex006: Crie um programa onde dois times disputam pontos entre si. Crie a variável dos pontos do time A e dos pontos do time B e compare quem teve a maior pontuação.
let pontosTimeA = Math.floor(Math.random() * 100) + 1;
let pontosTimeB = Math.floor(Math.random() * 100) + 1;

console.log(`Pontos do Time A: ${pontosTimeA}; Pontos do Time B: ${pontosTimeB}`) // Pontos do Time A: 18; Pontos do Time B: 40

if (pontosTimeA > pontosTimeB) {
    console.log("O Time A venceu");
} else if (pontosTimeA < pontosTimeB) {
    console.log("O Time B venceu")
} else {
    console.log("Ambos os times fizeram a mesma quantidade de pontos, houve um empate!")
}
