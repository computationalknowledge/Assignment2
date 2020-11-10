// make a function to say which of 2 numbers is bigger:

// give it 2 numbers : parameters
function hawaii(a, b) {
    // we put the code of our function in curly brackets
    if (a > b ){console.log(a , " is bigger than ", b);}
    if (b > a ){console.log(b , " is bigger than ", a);}
    if (b == a ){console.log(b , " is equal to ", a);}
}

for(a=1; a<=10; a++){
    for (b=1 ; b<=10; b++){
        hawaii(a,b);
    }
}
