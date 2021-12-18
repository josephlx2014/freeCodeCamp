function telephoneCheck(str) {

    //const regex = /((^[+](?=1)1)|^[1])*\W(([0-9]{3}|\([0-9]{3}\))\W)+([0-9]{3})+([0-9]{4})+/g;

    //const regex = /^(\+1|1){0,3}[ -]{0,1}([0-9]{3})[ -]{0,1}([0-9]{3})(?<=([0-9]{3}))[ -]{0,1}([0-9]{4})$/;
    const regex = /^(\+1|1){0,3}[ -]{0,1}([(0-9)]{5}|[0-9]{3})[ -]{0,1}([0-9]{3})(?<=([0-9]{3}))[ -]{0,1}([0-9]{4})$/

    const countryCodeRegex = /^(\+1|1){0,3}/
    const areaCodeRegex = /(?<=\+1|1\W*)(\([0-9]\)|[0-9]){3}(?=\W*[0-9]{3})/
    const region = /[0-9]{3}(?=\W*[0-9]{4})/
    const lineNumber = /[0-9]{4}$/

    //const all = /^(\+1|1){0,3}[ -]{0,1}([0-9]{3})[ -]{0,1}([0-9]{3})(?<=([0-9]{3}))[ -]{0,1}([0-9]{4})$/


    if (regex.test(str)) {

        //console.log(matchesArr);
        //console.log(str + " test: " + true);
        return true;

    } else {

        //console.log(matchesArr);
        //console.log(str + " test: " + false);
        return false;

    }

}

console.log(telephoneCheck("555-555-5555") + " should return  a boolean ");

console.log(telephoneCheck("1 555-555-5555") + " should return  true ");

console.log(telephoneCheck("1 (555) 555-5555") + " should return  true ");

console.log(telephoneCheck("5555555555") + " should return  true ");

console.log(telephoneCheck("555-555-5555") + " should return  true ");

console.log(telephoneCheck("(555)555-5555") + " should return  true ");

console.log(telephoneCheck("1(555)555-5555") + " should return  true ");

console.log(telephoneCheck("555-5555") + " should return  false ");

console.log(telephoneCheck("5555555") + " should return  false ");

console.log(telephoneCheck("1 555)555-5555") + " should return  false ");

console.log(telephoneCheck("1 555 555 5555") + " should return  true ");

console.log(telephoneCheck("1 456 789 4444") + " should return  true ");

console.log(telephoneCheck("123**&!!asdf#") + " should return  false ");

console.log(telephoneCheck("55555555") + " should return  false ");

console.log(telephoneCheck("(6054756961)") + " should return  false ");

console.log(telephoneCheck("2 (757) 622-7382") + " should return  false ");

console.log(telephoneCheck("0 (757) 622-7382") + " should return  false ");

console.log(telephoneCheck("-1 (757) 622-7382") + " should return  false ");

console.log(telephoneCheck("2 757 622-7382") + " should return  false ");

console.log(telephoneCheck("10 (757) 622-7382") + " should return  false ");

console.log(telephoneCheck("27576227382") + " should return  false ");

console.log(telephoneCheck("(275)76227382") + " should return  false ");

console.log(telephoneCheck("2(757)6227382") + " should return  false ");

console.log(telephoneCheck("2(757)622-7382") + " should return  false ");

console.log(telephoneCheck("555)-555-5555") + " should return  false ");

console.log(telephoneCheck("(555-555-5555") + " should return  false ");

console.log(telephoneCheck("(555)5(55?)-5555") + " should return  false ");

console.log(telephoneCheck("55 55-55-555-5") + " should return  false ");