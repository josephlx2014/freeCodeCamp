function convertToRoman(num) {


    const romanNotationArr = [
        { "dec": 1000, "Roman": "M" },
        { "dec": 900, "Roman": "CM" },
        { "dec": 500, "Roman": "D" },
        { "dec": 400, "Roman": "CD" },
        { "dec": 100, "Roman": "C" },
        { "dec": 90, "Roman": "XC" },
        { "dec": 50, "Roman": "L" },
        { "dec": 40, "Roman": "XL" },
        { "dec": 10, "Roman": "X" },
        { "dec": 9, "Roman": "IX" },
        { "dec": 5, "Roman": "V" },
        { "dec": 4, "Roman": "IV" },
        { "dec": 1, "Roman": "I" }
    ]

    let romanNumArr = [];
    let temp = num;
    let romanNumStr = "";

    while (temp > 0) {


        for (let x = 0; x < romanNotationArr.length; x++) {

            //	alert("Floor" + Math.floor(temp/romanNotationArr[x].dec))
            if (Math.floor(temp / romanNotationArr[x].dec) === 1) {

                //	alert(temp);
                temp = temp % romanNotationArr[x].dec;
                romanNumArr.push(romanNotationArr[x].Roman);


            } else if (Math.floor(temp / romanNotationArr[x].dec) > 1) {


                let counter = Math.floor(temp / romanNotationArr[x].dec);
                // alert("counter "+ counter);

                for (let y = 0; y < counter; y++) {

                    romanNumArr.push(romanNotationArr[x].Roman);

                }
                temp = temp % romanNotationArr[x].dec;
                //	console.log(temp);
            }


        }
    }

    romanNumStr = romanNumArr.join("");
    return romanNumStr;

}


convertToRoman(36);