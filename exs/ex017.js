// Crie uma função que receba a idade do usuário e retorne quantos dias de vida a pessoa tem
function calculaDias(idade) {
    let ano = 365;
    let dias = idade * ano;

    return dias;
};

console.log(calculaDias(42));
