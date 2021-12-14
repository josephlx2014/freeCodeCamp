function smallestCommons(arr) {

    let num1 = arr[0];
    let num2 = arr[1];
    let maxMultiple = 1;

    for (let x = num1; x <= num2; x++) {

        maxMultiple = x * maxMultiple;

    }

    let currMultiple = 1;
    let qtyOfNumbersInRange = num2 - num1;
    let lcm = 1;
    let counter = 1;


    while (currMultiple <= maxMultiple) {

        currMultiple = num2 * counter;
        //console.log(currMultiple);

        let matchCounter = 0;


        for (let x = num1; x < num2; x++) {

            if (currMultiple % x === 0) {

                console.log(x + " " + currMultiple + " " + "yes");

                matchCounter++;


            } else {

                console.log(x + " " + currMultiple + " " + "no");

            }

            if (matchCounter === qtyOfNumbersInRange) {

                console.log("lcm " + currMultiple);
                return currMultiple;
            }

        }

        console.log("-----------");
        counter++;

    }




    //console.log(maxMultiple);



    return arr;
}

smallestCommons([1, 3]);