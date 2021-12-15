function palindrome(str) {

    let strLenght = str.length;

    if (strLenght % 2 === 0) {

        //even
        for (let x = 0; x < strLenght; x++) {

            let y = (strLenght - 1) - x;
            //console.log("x:" + x + " -- y:" + y);
            //console.log(y);

            console.log(str[x] + " === " + str[y] + " = " + (str[x] === str[y]));

            if (str[x] != str[y]) {


                return false;

            }

        }

    } else if (strLenght % 2 != 0) {

        //odd
        let halfStrLength = (strLenght - 1) / 2

        for (let x = 0; x < halfStrLength; x++) {

            let y = (strLenght - 1) - x;
            //console.log("x:" + x + " -- y:" + y);

            //console.log(str[x] + " === " + str[y] + " = " + (str[x] === str[y]));

            if (str[x] != str[y]) {


                return false;

            }

        }


    }


    return true;
}

console.log(palindrome("zaepeax"));