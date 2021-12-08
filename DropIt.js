function dropElements(arr, func) {

    let newArr = [];
    let counter = arr.length;

    for (let x = 0; x < arr.length; x++) {

        if (func(arr[x])) {

            counter = x;

            break;

        }

    }

    //console.log(counter);

    for (let x = counter; x < arr.length; x++) {

        newArr.push(arr[x]);

    }

    console.log(newArr);

    return newArr;
}

//dropElements([1, 2, 3, 4], function(n) { return n >= 3; }) passed
dropElements([0, 1, 0, 1], function(n) { return n === 1; }) //should return [1, 0, 1].
    //dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }) //should return [3, 9, 2].
    //dropElements([1, 2, 3, 4], function(n) { return n > 5; })