const sumAll = function (int1, int2) {

    sum = 0
    if (!Number.isInteger(int1) || int1 < 0 || !Number.isInteger(int2) || int2 < 0) {
        return "ERROR";
    }

    if (int1 > int2) {
        for (let i = int1; i >= int2; i--) {
            sum += i;
        }
    }
    else if (int1 < int2) {
        for (let i = int1; i <= int2; i++) {
            sum += i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
