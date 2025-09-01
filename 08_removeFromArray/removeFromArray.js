const removeFromArray = function (array, ...args) {
    let updatedArray = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            updatedArray.push(element);
        }
    });
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
