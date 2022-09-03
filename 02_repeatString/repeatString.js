const repeatString = function(baseString, nRepeats) {
    if (nRepeats < 0) {
        return "ERROR";
    }

    let outputString = "";
    for (let i = 0; i < nRepeats; i++) {
        outputString += baseString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
