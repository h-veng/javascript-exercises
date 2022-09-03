const removeFromArray = function(array, ...toRemove) {
    if (arguments.length < 2) {
        return array;
    }

    let returnArray = [];

    outerLoop: for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < toRemove.length; j++) {
            if (array[i] === toRemove[j]) {
                continue outerLoop;
            }
        }
        returnArray.push(array[i]);
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
