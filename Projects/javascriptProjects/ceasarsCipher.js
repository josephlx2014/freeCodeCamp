function rot13(str) {

    let offSet = 13;
    let decryptedStr = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tempArr = [];
    let newIndex = -1;
    let indexOfLetter = -1;

    for (let x = 0; x < str.length; x++) {

        indexOfLetter = alphabet.indexOf(str[x]);
        // console.log("indexOfLetter " + indexOfLetter);

        if (indexOfLetter === -1) {

            //  console.log("str not found: " + str[x]);
            tempArr.push(str[x]);


        } else {

            if (indexOfLetter < offSet) {

                newIndex = indexOfLetter + offSet;

                //console.log("= offset: indexOfLetter " + indexOfLetter + " cypher letter " + alphabet[indexOfLetter] + " newIndex " + newIndex + " letter " + alphabet[newIndex]);

                tempArr.push(alphabet[newIndex]);

            } else if (indexOfLetter >= offSet) {

                newIndex = (indexOfLetter + offSet) - alphabet.length;
                //console.log(">= offset:  indexOfLetter " + indexOfLetter + " cypher letter " + alphabet[indexOfLetter] + " newIndex " + newIndex + " letter " + alphabet[newIndex]);

                tempArr.push(alphabet[newIndex]);

            }

        }


    }

    decryptedStr = tempArr.join("");
    return decryptedStr;

}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR! CVMMN!"));