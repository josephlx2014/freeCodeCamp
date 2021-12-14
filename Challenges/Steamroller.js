function steamrollArray(arr) {

    //console.log(arr);
    //steamrollArray(arr);
    const answer = recursiveSearch(arr);
    console.log(answer);

    return answer;

}

let newArr = [];

function recursiveSearch(arr) {

    for (let x = 0; x < arr.length; x++) {

        //console.log(Array.isArray(arr[x]));

        if (Array.isArray(arr[x])) {

            //console.log(arr[x]);
            recursiveSearch(arr[x]);

        } else {

            newArr.push(arr[x]);
            //console.log(arr[x]);

        }

    }

    return newArr;

}

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);

/*steamrollArray([
    [1, 2, 3],
    [
        [20, 25],
        [10, 11, 12],
        [1, 2, 3, 4]
    ],
    [0, 100]
])*/