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

    stateObj.previousRemainder = change;
    stateObj.newRemainder = change;

    if (sumOfCashDrawer == 0 || change >= sumOfCashDrawer) {

        outputObj.status = "INSUFFICIENT_FUNDS";
        console.log(outputObj);

        return outputObj

    } else {

        for (let x = 0; x < sortedRemapedCID.length; x++) {

            if (stateObj.newRemainder / sortedRemapedCID[x].value >= 1) {

                let temp = stateObj.newRemainder; //19

                stateObj.previousRemainder = temp; //19
                stateObj.billQuantity = Math.floor(stateObj.newRemainder / sortedRemapedCID[x].value)
                stateObj.newRemainder = stateObj.previousRemainder % sortedRemapedCID[x].value;
                stateObj.neededQty = stateObj.billQuantity * sortedRemapedCID[x].value;
                stateObj.availableQty = sortedRemapedCID[x].available;
                stateObj.diff = stateObj.availableQty - stateObj.neededQty;
                stateObj.bill = sortedRemapedCID[x].unit

                if (stateObj.diff < 0) {

                    stateObj.billQuantity++;
                    stateObj.newRemainder = stateObj.billQuantity + stateObj;

                }

                console.log(stateObj);
            }

            if (stateObj.previousRemainder === 0) {

                outputObj.status = "OPEN";
                outputObj.change = sortedRemapedCID;

                return outputObj
            }
        }
    }
}


checkCashRegister(1, 20, [
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