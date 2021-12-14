function mutation(arr) {

    let regex = /[A-Za-z]/g
    let checkCounter = 0;

    let str1 = arr[0]
    let str2 = arr[1]
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let arr1 = [] 
    arr1 = str1.match(regex);

    let arr2 = [] 
    arr2 = str2.match(regex);

    arr1.sort();
    arr2.sort();
  
    //console.log(arr1);
    //console.log(arr2);
  
  if(arr1.length >= arr2.length)
  {
    console.log("Palabra 1 es mayor");

      for(let x=0; x < arr1.length; x++)
      {
          for(let y = 0; y< arr2.length; y++)
          {

console.log(x+ ":" +arr1[x]+ " - " + x + ":" + arr2[y] + " " + (arr1[x] == arr2[y]));

            if(arr1[x] === arr2[y])
            {
                checkCounter++;
                
            }
            
          }
      }
    
      //console.log(checkCounter + " " + arr2.length);
      if(checkCounter >= arr2.length)
      {
        console.log("hits: " + checkCounter + " - " + "arr2: " + arr2.length);
        console.log(true);
        return true;
      }
      else
      {
        console.log("hits: " + checkCounter + " - " + "arr2: " + arr2.length);
        console.log(false);
        return false;
      }
  }
  else if(arr1.length < arr2.length)
  {
    console.log("Palabra 2 es mayor");

      for(let x=0; x < arr1.length; x++)
      {
          for(let y = 0; y< arr2.length; y++)
          {

console.log(x+ ":" +arr1[x]+ " - " + x + ":" + arr2[y] + " " + (arr1[x] == arr2[y]));

            if(arr1[x] === arr2[y])
            {
                checkCounter++;
            }
            
          }
      }
    
      //console.log(checkCounter + " " + arr2.length);
      if(checkCounter >= arr1.length)
      {
        console.log("hits: " + checkCounter + " - " + "arr2: " + arr1.length);
        console.log(true);
        return true;
      }
      else
      {
        console.log("hits: " + checkCounter + " - " + "arr2: " + arr1.length);
        console.log(false);
        return false;
      }
  }
}
  
//mutation(["hello", "hey"]);
//mutation(["hello", "Hello"]);
//mutation([ "qrstu", "zyxwvutsrqponmlkjihgfedcba"]);
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);+
mutation(["voodoo", "no"])
  
