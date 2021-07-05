/* Esercizio FizzBuzz: 

1. Stampa i numeri da 1 a 100

!--------------------MA-------------------!

2. Per i multipli di 3, stampare "Fizz"
3. Per i multipli di 5, stampare "Buzz"
4. Per entrambi multipli, stampare "FizzBuzz"
*/

var display = document.getElementById("result");


for (var i=1; i < 101; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        display.innerHTML += "FizzBuzz</br>";
    }
    else if ( i % 5 === 0 ) {
        console.log("Buzz");
        display.innerHTML +="Buzz</br>";
    }

    else if (i % 3 === 0) {
        console.log('Fizz');
        display.innerHTML += "Fizz</br>"
    }

    else {
        console.log[i];
        display.innerHTML += i + "</br>"
    }
}

