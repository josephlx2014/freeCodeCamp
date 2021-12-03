function smallestCommons(arr) {


    let sorted = arr.sort((a,b) =>  
    {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
    });

    

    for(let x = 2; x <= sorted[1];x++)
    {

        let obj = {
                num: x,
                primesFactorization: [] 
            }

        for(let y = 2; y <= x; y ++){

            if(x%y === 0){

                
                obj.primesFactorization.push(y);


            }
        
        }

        console.log(obj);

    }

   
    


  return arr;
}




smallestCommons([6,1]);