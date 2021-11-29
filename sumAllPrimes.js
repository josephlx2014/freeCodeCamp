function sumPrimes2(num) {

    let divisorCounter = 0;
    let sum = 0;
    let x = 0;
    let y = 0;
    let check = 0;


    while (x <= num) {

        divisorCounter = 0;

        while (y <= num) {


            console.log(x + "--" + y);
            check = x % y === 0

            if (check) {
                divisorCounter++
            }


            y++;

        };

        /*if (divisorCounter === 2) {

            //console.log(x + " - " + divisorCounter);
            sum = sum + x;

        }*/


        x++;
    }


    /*
        for (let x = 0; x <= num; x++) {
            divisorCounter = 0;
            for (let y = 0; y <= num; y++) {
                if (x % y === 0) {
                    divisorCounter++
                }
            }
    
        if (divisorCounter === 2) {
            //console.log(x + " - " + divisorCounter);
            sum = sum + x;
        }
}*/

    console.log(sum);

    return sum;
}

function sumPrimes(num) {

    let divisorCounter = 0;
    let sum = 0;
    let check = 0;
    let x = 0;
    let y = 0;


    for (x = 0; x <= num; x++) {

        divisorCounter = 0;

        for (y = 0; y <= num; y++) {

            check = x % y === 0;

            if (check) {

                divisorCounter++
            }

        }

        if (divisorCounter === 2) {
            //console.log(x + " - " + divisorCounter);
            sum = sum + x;
        }
    }

    console.log(sum);

    return sum;
}

sumPrimes(10);
sumPrimes(977);