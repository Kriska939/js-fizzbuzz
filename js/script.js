/* Esercizio FizzBuzz: 

1. Stampa i numeri da 1 a 100

!--------------------MA-------------------!

2. Per i multipli di 3, stampare "Fizz"
3. Per i multipli di 5, stampare "Buzz"
4. Per entrambi multipli, stampare "FizzBuzz"
*/

var display = document.getElementById("result");
var listItems = "";

for (var i=1; i < 101; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        listItems += "FizzBuzz</br>";
    }
    else if ( i % 5 === 0 ) {
        console.log("Buzz");
        listItems +="Buzz</br>";
    }

    else if (i % 3 === 0) {
        console.log('Fizz');
        listItems += "Fizz</br>"
    }

    else {
        console.log(i);
        listItems += i + "</br>"
    }
}

display.innerHTML = listItems;

