
// zadanie 1
var number1 = -88;
var number2 = 35;

if (number1 > number2) {
    console.log(number1 + " jest wieksza");
} else if (number2 > number1) {
    console.log(number2 + " jest wieksza");
} else {
    console.log("rowne lub brak mozliwosci porownania");
}


// zadanie 2
var number21 = 33;
var number22 = 3;
var number23 = 332;

if (number21 > number22 && number21 > number23) {
    console.log(number21 + " jest najwieksza");
} else if (number22 > number21 && number22 > number23) {
    console.log(number22 + " jest najwieksza");
} else {
    console.log(number23 + " jest najwieksza");
}


// zadanie 3
for (var i = 1; i <= 10; i++) {
    console.log(i + " Lubię JavaScript");
}


// zadanie 4
var result = 0;
for (var i = 1; i <= 10; i++) {
    result += i;
}
console.log(result);


// zadanie 5
function checkNumber(n) {
    for (var i = 0; i < n + 1; i++) {
        if (i % 2 === 0) {
            console.log(i + " - parzysta");
        } else {
            console.log(i + " - nieparzysta");
        }
    }
}
checkNumber(5);


// zadanie 6
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log("i = " + i + ", j = " + j);
    }
}


// zadanie 7
var size = 5;
var starLines = "";

for (var i = 0; i < size; i++) {
    starLines = "";
    for (var j = 0; j < size; j++) {
        starLines = starLines + "*";
    }
    console.log(" ");
    console.log(starLines);
}

































