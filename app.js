// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


//ejercicio 09
let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

function fromEuroToDollar(amountInEuros) {

    const amountInDollars = amountInEuros * oneEuroIs["USD"];
    return amountInDollars;
}

function fromDollarToYen(amountInDollars) {

    const amountInYen = amountInDollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
    return amountInYen;
}


function fromYenToPound(amountInYen) {

    const amountInPounds = amountInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return amountInPounds;
}

module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
};