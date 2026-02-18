function CelsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

console.log(CelsiusParaFahrenheit(32));
console.log(CelsiusParaFahrenheit(23));
console.log(CelsiusParaFahrenheit(15));

function FahrenheitParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

console.log(FahrenheitParaCelsius(98));
console.log(FahrenheitParaCelsius(53));
console.log(FahrenheitParaCelsius(76));

