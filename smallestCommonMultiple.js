function smallestCommons(arr) {

    let sortedRangeArr = arr.sort(compare);

    let startRange = arr[0];
    let endRange = arr[1];

     let multiplesArr = [];

    for(let x = 0; x <= endRange; x++){
        //obj.num = x;
        for(let y=0; y <= x; y++){

            if (x % y === 0){
               
                multiplesArr.push(y);
                //console.log(x + " " + y);

            }

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

smallestCommons([1,3]);