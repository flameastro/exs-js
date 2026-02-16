// Faça uma função que receba 3 números e em seguida exiba qual é o maior número dentre os números informados.
function maiorNumero(numero1, numero2, numero3) {
    if ((numero1 > numero2) && (numero1 > numero3)) {
        console.log("Número 1 é o maior");
    } else if ((numero2 > numero1) && (numero2 > numero3)) {
        console.log("Número 2 é o maior");
    } else if ((numero3 > numero1) && (numero3 > numero2)) {
        console.log("Número 3 é o maior");
    } else if ((numero1 == numero2) && (numero1 != numero3)) {
        console.log("O número 1 é igual ao número 2");
    } else if ((numero2 == numero3) && (numero2 != numero1)) {
        console.log("O número 2 é igual ao número 3");
    }  else {
        console.log("Todos os números são iguais");
    }
}

maiorNumero(1, 2, 3);
maiorNumero(3, 3, 1);
maiorNumero(1, 3, 1);
maiorNumero(4, 4, 4);
maiorNumero(3, 2, 2);
