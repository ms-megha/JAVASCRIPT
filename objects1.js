// if we do not assign any value in the object it returns {} empty object

// object create with constructor --> singleton Object.create
const mysm=Symbol();
//object literal
const myobj={
     name: "Megha",
    [mysm] : "sym1",
    age : 23,
    isLoggedIn : false
}
// console.log(myobj);
// // console.log(typeof(myobj));
// // console.log(myobj.name);
// // console.log(myobj["name"]);
// // console.log(myobj[mysm]);
// // console.log(typeof(myobj[mysm]));
// console.log(typeof(mysm));

// ********freeze******
// myobj.name = "Debojyoti"
// console.log(myobj["name"]);
// Object.freeze(myobj)
// myobj.name = "Megha"
// console.log(myobj["name"]);
// console.log(myobj);

myobj.greeting = function(){
    // console.log("Hello Mgha");
}
// console.log(myobj.greeting); //[Function (anonymous)]
// console.log(myobj.greeting());//Hello Mgha undefined
// myobj.name = "Debojyoti"
// myobj.greetingTwo = function(){
//     console.log(`Hello js user ${this.name}`);
// }
// console.log(myobj.greetingTwo());


const myAppUser = {
    userId : 1,
    fullName:{
        userFullName:{
            firstName:"Megha",
            lastName:"Sadhukhan"
        }
    }
}
// console.log(myAppUser.fullName.userFullName.firstName);

// ******Combine two or more objects ******

const obj1 = {1:"a", 2:"b",3:"c"}
const obj2 = {3:"a", 4:"b",5:"c"}
const obj4 = {6:"a", 7:"b",8:"c"}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);
// console.log(Object.keys(obj1)); //[ '1', '2', '3' ] || same for value
// console.log(Object.entries(obj1)); //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ] ]

// console.log(myobj.hasOwnProperty('name'));//true
// console.log(myobj.hasOwnProperty('year'));//false