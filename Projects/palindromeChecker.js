function palindrome(str) {

    let strLenght = str.length;

    if (strLenght % 2 === 0) {

        //even
        for (let x = 0; x < strLenght; x++) {

            let y = (strLenght - 1) - x;

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

            if (str[x] != str[y]) {


                return false;

            }

        }

    }

    return true;
}

function stringSanitizer(str) {

    const regex = /\W|[_]/g
    let newStr = "";

    for (let x = 0; x < str.length; x++) {

        if (!regex.test(str[x])) {

            newStr += str[x];

        }

    }

    return newStr;

}

console.log(stringSanitizer("_eye"));
console.log(stringSanitizer("0_0 (: /-\ :) 0-0"));
//console.log(palindrome("zaepeax"));