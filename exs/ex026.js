function conversorHoras(horas) {
    let minutos = horas * 60;
    let segundos = minutos * 60;

    return [segundos, minutos];
}

console.log(conversorHoras(10));
console.log(conversorHoras(24));
console.log(conversorHoras(15));
