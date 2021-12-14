//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their
//corresponding HTML entities.

function convertHTML(str) {

    let htmlEntities = { "&": "amp", "\<": "lt", "\>": "gt", "\"": "quot", "\'": "apos" }
    const regex = /[&<>"']/
    let strArr = "";
    let newStrArr = [];

    //strArr = regex.test("<");
    //console.log(strArr);

    for (let x = 0; x < str.length; x++) {


        strArr = regex.test(str[x]);

        //console.log(strArr);

        if (strArr === true) {

            //console.log(htmlEntities[str[x]]);
            newStrArr.push("&" + htmlEntities[str[x]] + ";");

        } else if (strArr === false) {

            newStrArr.push(str[x]);

        }

    }


    resultStr = newStrArr.join("");


    //console.log(htmlEntities["<"]);

    //console.log(resultStr);
    return resultStr;
}

convertHTML("Dolce & Gabbana"); //should return the string Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");