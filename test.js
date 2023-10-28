console.log("Megha")
// // console.log("Megha")
// const arr = [1,2,3,4,5]

// console.log(arr) // [ 1, 2, 3, 4, 5 ]
// console.log(typeof(arr)) // object
// const newArr = arr.join() // 1,2,3,4,5 
// console.log(newArr) //string
// console.log(typeof(newArr))


// *************** slice and splice *****************
//Slice is used to get a new array from the original array whereas the splice is used to add/remove items in the original array.
// const arr = [1,2,3,4,5,78,9]
// console.log("original array", arr)
// const arrSlice = arr.slice(1,4)
// console.log("slice",arrSlice);//slice [ 2, 3, 4 ]
// console.log("original array", arr)
// // At position 1, remove 4 items: 
// const arrSplice = arr.splice(1,4)
// console.log("splice",arrSlice);//splice [ 2, 3, 4 ]
// console.log("original array", arr)//original array [ 1, 78, 9 ]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add 2 elements: 
// fruits.splice(2,0, "Lemon", "Kiwi");
// console.log(fruits);

const arr = [1,2,3,4,5,78,9]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// arr.push(fruits)
// console.log(arr); // Array under array [ 1, 2, 3, 4, 5, 78, 9, [ 'Banana', 'Orange', 'Apple', 'Mango' ] ]
/*
The concat() method concatenates (joins) two or more arrays.

The concat() method returns a new array, containing the joined arrays.

The concat() method does not change the existing arrays.
*/
// const concatArray = arr.concat(fruits)//
// console.log(concatArray) ////[ 1, 2, 3, 4, 5, 78, 9, 'Banana', 'Orange', 'Apple', 'Mango']

// **********spread operator *****************
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// const spreadArray = [...arr, ...fruits]
// console.log(spreadArray); //[ 1, 2, 3, 4, 5, 78, 9, 'Banana', 'Orange', 'Apple', 'Mango']
// flat()--> Create a new array with the sub-array elements concatenated:
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat(Infinity);
// console.log(newArr);//[ 1, 2, 3, 4, 5, 6 ]
// The isArray() method returns true if an object is an array, otherwise false.
console.log(Array.isArray("MEGHA"));//false

// Create an array from a string
console.log(Array.from("MEGHA"));//[ 'M', 'E', 'G', 'H', 'A' ]

// convert variable to array
let score = 200
let score1 = 300
let score2 = 400
// A set of elements to include in the new array object.Returns a new array from a set of elements.
console.log(Array.of(score, score1, score2));//[ 200, 300, 400 ]