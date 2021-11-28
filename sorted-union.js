function uniteUnique(arr) {

    let joinedArr = []

    for (let x = 0; x < arguments.length; x++) {

        joinedArr.push(...arguments[x]);

    }

    let newArr = [];

    for (let x = 0; x < joinedArr.length; x++) {

        if (newArr.indexOf(joinedArr[x]) === -1) {


            newArr.push(joinedArr[x])


        }
    }

    console.log(newArr);

    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);