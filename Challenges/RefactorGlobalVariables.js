// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

// Change code below this line
function add(bookArr, bookName) {
  let arr = [...bookArr];
  arr.push(bookName);

  return arr;
  // Change code above this line
}

const newBookList = add(bookList, "A Brief History of Time");

console.log(bookList);
