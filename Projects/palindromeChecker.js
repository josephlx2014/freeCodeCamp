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

//console.log(stringSanitizer("_eye"));
//console.log(stringSanitizer("0_0 (: /-\ :) 0-0"));
console.log(stringSanitizer("zaepeaz"));