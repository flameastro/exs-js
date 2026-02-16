// Crie uma função que receba um número (1-7) e devolva o dia da semana correspondente. (considerando que: o primeiro dia é segunda-feira)
function retornaDiaSemana(numero) {
    if (numero < 1 || numero > 7) {
        return "Você deve inserir um número entre 1 a 7";
    }

    let diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    let diaEscolhido = diasSemana[numero-1];

    return diaEscolhido;
}


console.log(retornaDiaSemana(1)) // Segunda
console.log(retornaDiaSemana(7)) // Domingo
console.log(retornaDiaSemana(3)) // Quarta
console.log(retornaDiaSemana(999)) // Você deve inserir um número entre 1 a 7
