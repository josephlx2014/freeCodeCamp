const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly

    let fullName = firstAndLast;

    this.getFullName = function() {

        return fullName;
    };

    this.getFirstName = function() {

        let firstName = fullName.split(" ")[0];

        return firstName;

    };

    this.getLastName = function() {

        let lastName = fullName.split(" ")[1];

        return lastName;
    };


    this.setFirstName = function(first) {

        let temp = fullName.split(" ");
        temp[0] = first;

        fullName = temp.join(" ");

    };

    this.setLastName = function(last) {

        let temp = fullName.split(" ");
        temp[1] = last;

        fullName = temp.join(" ");

    };

    this.setFullName = function(firstAndLast) {

        fullName = firstAndLast;

    }

};

const bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);

bob.setFirstName("Haskell")
console.log(bob.getFullName()); //should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.setLastName("Curry");
console.log(bob.getFullName());

/*

// running tests
No properties should be added. Object.keys(bob).length should always return 6.
bob.getFirstName() should return the string Bob.
bob.getLastName()  should return the string Ross.
bob.getFullName()  should return the string Bob Ross.
bob.getFullName()  should return the string Haskell Ross after bob.setFirstName("Haskell").
bob.getFullName()  should return the string Haskell Curry after bob.setLastName("Curry").
bob.getFullName()  should return the string Haskell Curry after bob.setFullName("Haskell Curry").
bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
bob.getLastName()  should return the string Curry after bob.setFullName("Haskell Curry").
// tests completed

*/