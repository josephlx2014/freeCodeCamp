let checkThisUrl = "https://gomakethings.com/truthiness-in-javascript/";

function truthCheck(collection, pre) {

    let result = true;
    
      for(let x = 0; x<collection.length; x++){
    
  
        //console.log(!!collection[x][pre]);
    
        if(!!collection[x][pre]  === false){
    
            
            result = false;
            //console.log("disque ahorita es true :" + result);
            return result;

    
        }
    
    
      }
    
      
      return result;
    }
    
    
    const res = truthCheck([
      {"user": "Tinky-Winky", "sex": "male"}, 
      {"user": "Dipsy", "sex": "male"}, 
      {"user": "Laa-Laa", "sex": "female"}, 
      {"user": "Po", "sex": "female"}], "rabbit");

  console.log(res);
