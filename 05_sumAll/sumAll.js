const sumAll = function(firstArg, secondArg) {
    let sum = 0;
    if (firstArg < 0 || secondArg < 0) return "ERROR";
    if (typeof firstArg != "number" || typeof secondArg != "number") return "ERROR";

    if (firstArg > secondArg) {
        let temp = firstArg;
        firstArg = secondArg;
        secondArg = temp;
    }
    for (let i = firstArg; i <= secondArg; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
