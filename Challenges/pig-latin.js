function translatePigLatin(str) {

 const regex = /^[aeiou]/g
 const consonantsRegex = /^[^aeiou]*/g
 const testx = regex.test(str);

 let arrX = [];
 arrX = str.match(consonantsRegex);
 //console.log(arrX);

 let newStr = "";


 if(testx){

newStr = str + "way";
//passed
//vowels

 }else{


newStr = str + arrX[0] + "ay"
newStr = newStr.substring(arrX[0].length, newStr.length);

//consonants

 }

 console.log(newStr);

 //let newStr = str.match(regex);
 //console.log(newStr);

 return newStr;

}

translatePigLatin("consonant");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin("schwartz");
translatePigLatin("rhythm");