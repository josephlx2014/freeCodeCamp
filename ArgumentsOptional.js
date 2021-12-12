function addTogether(value1, value2) {
    let numOfArgs = [...arguments];
    let argumentsCount = numOfArgs.length;

    if (argumentsCount > 1) {

        if (typeof(value1) != "number" || typeof(value2) != "number") {
            return undefined;
        } else {
            return value1 + value2;
        }
    } else if (argumentsCount === 1) {
        if (typeof(value1) != "number") {

            return undefined;

        } else {

            return function(param) {
                if (typeof(param) === "number") { return value1 + param } else {
                    return undefined;
                }
            };

        }
    }
}

//var sumThreeAnd = addTogether(3);
//console.log(sumThreeAnd(2));

// running tests
//addTogether(2, "3"); //should return undefined.
console.log(addTogether(2)([3])); //should return undefined.
console.log(addTogether(2)(3))
    // tests completed

//console.log(addTogether(1, 2));
//console.log(addTogether(1));
//console.log(addTogether("helo", "asfd"));
//console.log(addTogether("helo"));