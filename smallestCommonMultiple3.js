function smallestCommons(arr) {

    let sortedArr = arr.sort(compare);

    console.log(sortedArr);

    let num1 = sortedArr[0];
    let num2 = sortedArr[1];
    let maxMultiple = 1;

    for (let x = num1; x <= num2; x++) {

        maxMultiple = x * maxMultiple;

    }

    let currMultiple = 1;
    let qtyOfNumbersInRange = num2 - num1;
    let counter = 1;


    while (currMultiple <= maxMultiple) {

        currMultiple = num2 * counter;
        //console.log(currMultiple);

        let matchCounter = 0;


        for (let x = num1; x < num2; x++) {

            if (currMultiple % x === 0) {

                //console.log(x + " " + currMultiple + " " + "yes");

                matchCounter++;


            } else {

                //console.log(x + " " + currMultiple + " " + "no");

            }

            if (matchCounter === qtyOfNumbersInRange) {

                //console.log("lcm " + currMultiple);
                return currMultiple;
            }

        }

        //console.log("-----------");
        counter++;

    }

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

//smallestCommons([1, 3]);
//smallestCommons([2, 10]);
//smallestCommons([1, 13]);
smallestCommons([23, 18]);