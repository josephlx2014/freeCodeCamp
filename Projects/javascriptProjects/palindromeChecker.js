function palindrome(str) {


    let validatedStr = stringSanitizer(str);
    let strLenght = validatedStr.length;

    if (strLenght % 2 === 0) {

        //even
        for (let x = 0; x < strLenght; x++) {

            let y = (strLenght - 1) - x;

            //console.log(validatedStr[x] + " === " + validatedStr[y] + " = " + (validatedStr[x] === validatedStr[y]));

            if (validatedStr[x] != validatedStr[y]) {


                return false;

            }

        }

    } else if (strLenght % 2 != 0) {

        //odd
        let halfStrLength = (strLenght - 1) / 2

        for (let x = 0; x < halfStrLength; x++) {

            let y = (strLenght - 1) - x;

            if (validatedStr[x] != validatedStr[y]) {


                return false;

            }

        }

    }

    return true;
}

function stringSanitizer(str) {

    const regex = /[A-Z0-9]/
    const upperCStr = str.toUpperCase();
    //console.log(upperCStr);


    let newStrArr = [];
    let newStr = "";

    //console.log(upperCStr.length);

    for (let x = 0; x < upperCStr.length; x++) {

        //console.log(upperCStr[x] + " test " + regex.test(upperCStr[x]));

        let testResult = regex.test(upperCStr[x]);
        //console.log(upperCStr[x] + " test " + regex.test(upperCStr[x]));

        if (testResult === true) {

            //console.log(upperCStr[x] + " test " + testResult);

            newStrArr.push(upperCStr[x]);

        }

    }
    newStr = newStrArr.join("");

    return newStr;
}

console.log(palindrome("_eye"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
//console.log(stringSanitizer("zaepeaz"));