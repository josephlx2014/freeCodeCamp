function binaryAgent(str) {

    let binarySequence = str.split(" ");
    let str2 = "";
    //console.log(binarySequence);

    let char = '';

    for (let x = 0; x < binarySequence.length; x++) {

        char = String.fromCharCode(parseInt(binarySequence[x], 2));
        str2 += char;
        //console.log(char);

    }
    console.log(str2);

    return str2;
}
//binaryAgent("01100001 01110010");
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");