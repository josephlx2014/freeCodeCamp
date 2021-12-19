function checkCashRegister(price, cash, cid) {

    let outputObj = { status: "", change: [] };
    const change = cash - price;

    let currencyValue = [
        { unit: "ONE HUNDRED", amount: 100 },
        { unit: "TWENTY", amount: 20 },
        { unit: "TEN", amount: 10 },
        { unit: "FIVE", amount: 5 },
        { unit: "ONE", amount: 1 },
        { unit: "QUARTER", amount: 0.25 },
        { unit: "DIME", amount: 0.1 },
        { unit: "NICKEL", amount: 0.05 },
        { unit: "PENNY", amount: 0.01 },
    ]

    const sumOfCID = cid.reduce((sum, currentAmmount) => {

        sum += currentAmmount[1];
        return sum;

    }, 0);

    let sumOfCashDrawer = sumOfCID.toFixed(2);

    //reformats cash in drawer array
    /*
    const remapedCID = cid.map((obj, ind, cid) => {
        let rObj = {}
            //rObj[cid[ind][0]] = cid[ind][1]
        rObj["unit"] = cid[ind][0]
        rObj["available"] = cid[ind][1]
        rObj["value"] = currencyValue.filter(item => item.unit === cid[ind][0])[0].amount; //currencyValue.reduce((x) => x.unit === cid[ind][0]).amount
        return rObj
    });*/

    const remapedCID = cid.map((obj, ind, cid) => {
        obj = {};

        obj["unit"] = cid[ind][0]
        obj["available"] = cid[ind][1]
        obj["value"] = currencyValue.filter(item => item.unit === cid[ind][0])[0].amount; //currencyValue.reduce((x) => x.unit === cid[ind][0]).amount

        return obj
    });



    //let sortedRemapedCID = remapedCID.sort();

    console.log(remapedCID);

    //console.log(currencyValue.filter(item => item.unit === "PENNY")[0].amount)



    let stateObj = {
        previousRemainder: change,
        billQuantity: 0,
        newRemainder: 0,
        neededQty: 0,
        availableQty: 0,
        diff: 0
    }

    stateObj.previousRemainder = change;

    if (sumOfCashDrawer == 0 || change >= sumOfCashDrawer) {

        outputObj.status = "INSUFFICIENT_FUNDS";
        console.log(outputObj);

        return outputObj

    } else {

        for (let x = 0; x < remapedCID.length; x++) {

            console.log(stateObj.previousRemainder + " / " + remapedCID[x].value + " Divisor= " + stateObj.previousRemainder / remapedCID[x].value);

            /*
                        if (stateObj.previousRemainder % remapedCID[x].value >= 1) {

                            stateObj.billQuantity = Math.floor(previousRemainder / currencyValue[x])
                            stateObj.newRemainder = previousRemainder % currencyValue[x];
                            stateObj.neededQty = stateObj.billQuantity * currencyValue[x];
                            stateObj.availableQty = cid


                        }
            */
        }
    }


}
/*
checkCashRegister(19.5, 20, [
    ["PENNY", 0.0],
    ["NICKEL", 0],
    ["DIME", 1.5],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 10],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])
*/

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);