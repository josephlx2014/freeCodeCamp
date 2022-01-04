function myReplace(str, before, after) {

  const regex = /[A-Z]/
  let strArray = str.split(" ");
  let newStr = "";
  let isUpperCase = false;


for( let x = 0; x < strArray.length; x++){

    //console.log(strArray[x]);
    

    if( strArray[x] === before ){
      
      isUpperCase = regex.test(strArray[x]);

      if(isUpperCase){
        
        strArray[x] = after.replace(after[0], after[0].toUpperCase());

      }else{

        strArray[x] = after.replace(after[0], after[0].toLowerCase())

      }
    }

    //console.log(strArray[x] + " - " + isUpperCase);
}

  newStr = strArray.join(" ");
  console.log(newStr);

  return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "dog", "cat");
myReplace("I think we should look up there", "up", "Down")
//myReplace("a quick brown fox jumped over the lazy dog", "jumped", "leaped");