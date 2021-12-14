function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr = [];


    for (let x = 0; x < arr.length; x++) {

        let obj = arr[x];
        //console.log(obj);

        let newObj = {
            "name": obj.name,
            "orbitalPeriod": Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + obj.avgAlt), 3) / GM), 0)
        }

        newArr.push(newObj);

    }

    console.log(newArr);
    return newArr;
}

//orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])