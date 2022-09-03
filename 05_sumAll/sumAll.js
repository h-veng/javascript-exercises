const sumAll = function(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    }

    /*
     * Technically, nothing in the spec(README) says don't deal with negative
     * numbers. Also, technically, this function should mathematically be able
     * to handle negative numbers. Regardless, here, I assume that there's some
     * unseen context regarding the function and hence it shouldn't receive
     * negative numbers.
     */
    if (x < 0 || y < 0) {
        return "ERROR";
    }

    let start;
    let end;

    if (x < y) {
        start = x;
        end = y;
    } else {
        start = y;
        end = x;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
