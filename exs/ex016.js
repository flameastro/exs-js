// FizzBuzz: Crie um programa que itera sobre os números de 1 até 100 e exiba "Fizz" se o número for múltiplo de 3, "Buzz" caso o número seja múltiplo de 5, "FizzBuzz" se o número é múltiplo de 5 e 3, ou exiba o próprio número caso ele não se encaixe em nenhuma das alternativas.
// n % 3 == 0 -> "Buzz";
// n % 5 == 0 -> "Fizz";
// n % 5 == 0, n % 3 == 0 -> "FizzBuzz";
// n % 5 != 0, n % 3 != 0 -> n;
function FizzBuzz() {
    for (let n = 1; n <= 100; n++) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log("FizzBuzz");
        } else if (n % 3 === 0) {
            console.log("Fizz");
        } else if (n % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(n);
        }
    }
}

FizzBuzz();
