// FizzBuzz
// stampa numeri da 1 a 100
// multipli di 3 Fizz
// multipli di 5 Buzz
// multipli di entrambi FizzBuzz


const fizz = "Fizz"

const buzz = "Buzz";

const fizzBuzz = "FizzBuzz ";

for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) {

        console.log(fizzBuzz);

    } else if (i % 3 === 0) {

        console.log(fizz);

    } else if (i % 5 === 0) {

        console.log(buzz);
    } else {
        console.log(i)
    }

}

