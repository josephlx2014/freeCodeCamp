/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that 
is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {

    //1,2,3    

    //1,2,3,4,5,6
    //2,4,6
    //3,6

    let sortedArr = arr.sort(compare);
    let multiple = 0;
    //console.log(sortedArr[1]);
    let multiplesArr = [];


    for (let x = 0; x <= sortedArr[1]; x++) {

        for (let y = 0; y <= sortedArr[1]; y++) {

            multiple = x * y; // x + "*" + y + " = " + x * y;

            multiplesArr.push(multiple);

        }

    }

    let mcms = [];
    for (let x = 0; x < sortedArr[1]; x++) {

        for (let y = 0; y < multiplesArr.length; y++) {

            //console.log(x % multiplesArr[y]);
            if (x % multiplesArr[y] === 0) {

                mcms.push(multiplesArr[y]);

            }
        }

    }

    console.log(multiplesArr);

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