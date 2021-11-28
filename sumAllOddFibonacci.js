function sumFibs(num) {

    let sum = 0;
    let x = 0;
    let y = 0;
    let counter = 0;
    let arr = [];
    let temp = 0;

    while (sum <= num) {


        if (sum % 2 > 0) {

            arr.push(sum);
            temp = temp + sum;
        }



        if (x == 0 && y == 0) {

            sum = 1;
            y = 1;

        } else {

            sum = x + y;

            x = y;

            y = sum;

        }

        //console.log(counter + "-" + sum);

        //counter++;

    }

    console.log(arr);
    console.log(temp)

    return temp;

}

sumFibs(10);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);