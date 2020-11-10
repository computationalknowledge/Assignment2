// comments
// parameters: variables that can Change 
var startingNumber = 1;
var currentNumber = startingNumber;
var endNumber = 100;
var sum = 0;
// add all the numbers from 1 to 100
for ( ; currentNumber <= endNumber  ; ){
    currentNumber = currentNumber + 1;
    sum = sum + currentNumber;
}
console.log(sum);
