function smallestCommons(arr) {

    let sortedRangeArr = arr.sort(compare);

    let startRange = arr[0];
    let endRange = arr[1];

    let multiplesArr = [];

   

    for(let x = startRange; x <= endRange; x++){
    let mcmObj = {
      "num": x,
      "multiples": []
    }
        
        for(let y=startRange; y <= x; y++){

            if (x % y === 0){
                mcmObj.multiples.push(y);
                
                //console.log(x + " " + y);

            }
        multiplesArr.push(mcmObj);
        }
    }


    
    let uniqueMultiples =  [];

    for(let y=0; y < multiplesArr.length; y++){

        if(uniqueMultiples.indexOf(multiplesArr[y]) === -1){

            uniqueMultiples.push(multiplesArr[y]);

        }

    }
    console.log(uniqueMultiples);

    let mcm = 0;
    


  return arr;
}

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

smallestCommons([1,10]);