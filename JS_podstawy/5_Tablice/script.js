
// zadanie 1
var firstArray = [3, 5, 89];
for (var i = 0; i < firstArray.length; i++) {
    console.log(firstArray[i]);
}


// zadanie 2
var fruitsArray = ["Ania", "Basia", "Katarzyna", "pomarańcze", "brzoskwinki"];
console.log(fruitsArray[0]);
console.log(fruitsArray[fruitsArray.length - 1]);
for (var i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}


// zadanie 3 
var freeNumbers = [11, 2, 2, 1, 1, 1, 1, 1, 1, 11];
var sum = 0;
for (var i = 0; i < freeNumbers.length; i++) {
    sum += freeNumbers[i];
}
console.log("Suma: " + sum);


// zadanie 4
var freeNumbersTask4 = [11, 2, 2, 12, 1, 1, 1, 1, 1, 11];
var sumTask4 = 0;
for (var i = 0; i < freeNumbersTask4.length; i++) {
    if (freeNumbersTask4[i] % 2 === 0) {
        sumTask4 += freeNumbersTask4[i];
    }
}
console.log("Suma parzystych: " + sumTask4);


// zadanie 5
var freeNumbersTask5 = [11, 2, 2, 12, 1, 1, 44, 1, 1, 11];
var max = 0;
for (var i = 0; i < freeNumbersTask5.length; i++) {
    if (freeNumbersTask5[i] > max) {
        max = freeNumbersTask5[i];
    }
}
console.log("max = " + max);


// zadanie 6
var freeNumbersTask6 = [11, 3, 2, 2, 14, 15, 44, 16, 13, 13];
var firstIndex;
for (var i = 0; i < freeNumbersTask6.length; i++) {
    if (freeNumbersTask6[i] === freeNumbersTask6[i + 1]) {
        firstIndex = i;
        break;
    }
}
console.log("firstIndex: " + firstIndex);





















