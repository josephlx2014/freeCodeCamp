/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that 
is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {

    let sortedArr = arr.sort(compare);
    let sortedMultiplesArr = [];
    let multiple = 0;
    let multiplesArr = [];

    //get multiples
    for (let x = sortedArr[0]; x <= sortedArr[1]; x++) {

        for (let y = sortedArr[0]; y <= sortedArr[1]; y++) {

            multiple = x * y;

            multiplesArr.push(multiple);

        }
    }

    //remove duplicates
    let uniqueMultiples = []

    for (let y = 0; y < multiplesArr.length; y++) {

        if (uniqueMultiples.indexOf(multiplesArr[y]) === -1) {

            uniqueMultiples.push(multiplesArr[y]);

        }

    }

    console.log(uniqueMultiples);

    ///sortedMultiplesArr = multiplesArr.sort(compare);

    // find the least common multiple
    for (let z = 0; z < uniqueMultiples.length; z++) {

        for (let d = 0; d < sortedArr.length; d++) {

            console.log(uniqueMultiples[z] + " - " + sortedArr[d]);

        }
    }

    //console.log(multiplesArr);

    return arr;
}


function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

smallestCommons([1, 3]);
//smallestCommons([10, 5]);