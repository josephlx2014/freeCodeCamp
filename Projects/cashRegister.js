function checkCashRegister(price, cash, cid) {

    let outputObj = { status: "", change: [] };
    const change = cash - price;

    //values of each bill/coin
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

    //get sum
    const sumOfCID = cid.reduce((sum, currentAmmount) => {
        sum += currentAmmount[1];
        return sum;
    }, 0);

    let sumOfCashDrawer = sumOfCID.toFixed(2);

    //reformat CID array to operate
    const remapedCID = cid.map((obj, ind, cid) => {
        obj = {};

        obj["unit"] = cid[ind][0]
        obj["available"] = cid[ind][1]
        obj["value"] = currencyValue.filter(item => item.unit === cid[ind][0])[0].amount;

        return obj
    });

    //reorder array
    let sortedRemapedCID = remapedCID.sort((a, b) => {
        if (a.value > b.value) {
            return -1;
        } else if (a.value < b.value) {
            return 1;
        } else {
            return 0;
        }
    });

    let stateObj = {
        bill: "",
        previousRemainder: 0,
        billQuantity: 0,
        newRemainder: 0,
        neededQty: 0,
        availableQty: 0,
        diff: 0
    }

    let cidRecord = [];
    let newCID = [];


    stateObj.previousRemainder = change;
    stateObj.newRemainder = change;

    if (sumOfCashDrawer == 0 || change > sumOfCashDrawer) {

        outputObj.status = "INSUFFICIENT_FUNDS";
        console.log(outputObj);

        return outputObj

    } else if (change <= sumOfCashDrawer) {

        for (let x = 0; x < sortedRemapedCID.length; x++) {

            if (stateObj.newRemainder / sortedRemapedCID[x].value >= 1) {

                let temp = stateObj.newRemainder;

                stateObj.previousRemainder = temp;
                stateObj.billQuantity = Math.floor(stateObj.newRemainder / sortedRemapedCID[x].value)
                stateObj.newRemainder = (stateObj.newRemainder % sortedRemapedCID[x].value).toFixed(2);
                stateObj.neededQty = stateObj.billQuantity * sortedRemapedCID[x].value;
                stateObj.availableQty = sortedRemapedCID[x].available;
                stateObj.diff = stateObj.availableQty - stateObj.neededQty;
                stateObj.bill = sortedRemapedCID[x].unit
                    /*
                        if (stateObj.diff < 0) {
                            console.log("se ejecuto");
                            stateObj.billQuantity--;
                            stateObj.newRemainder = stateObj.newRemainder + sortedRemapedCID[x].value;
                        }
                    */


                while (stateObj.diff < 0) {

                    stateObj.billQuantity--;
                    stateObj.neededQty = stateObj.billQuantity * sortedRemapedCID[x].value;
                    stateObj.diff = stateObj.availableQty - stateObj.neededQty;

                    /*console.log(stateObj.newRemainder + " + " + sortedRemapedCID[x].value + " = " +
                        (parseFloat(stateObj.newRemainder) + parseFloat(sortedRemapedCID[x].value)))
                    */
                    stateObj.newRemainder = parseFloat(stateObj.newRemainder) + parseFloat(sortedRemapedCID[x].value);

                }

                //console.log(stateObj);

                //console.log(stateObj);
                cidRecord = [];
                cidRecord.push(stateObj.bill)
                cidRecord.push(stateObj.neededQty)

                newCID.push(cidRecord);

            }

            //console.log(stateObj.newRemainder);

            if (stateObj.newRemainder == 0) {

                outputObj.status = "OPEN";
                outputObj.change = newCID;

                return outputObj
            }
        }
    }
}
/*
console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))
*/
/*should return {status: "OPEN", change: 
[
    ["TWENTY", 60], 
    ["TEN", 20], 
    ["FIVE", 15], 
    ["ONE", 1], 
    ["QUARTER", 0.5], 
    ["DIME", 0.2], 
    ["PENNY", 0.04]
]}.
*/

checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ])
    /*should
return { status: "INSUFFICIENT_FUNDS", change: [] }.*/

/*
checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ])
    /*should
    return {
        status: "CLOSED",
        change: [
            ["PENNY", 0.5],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ]
    }.*/