// take unlimitaed parameter --- rest operator
function cartValue (...num1){
    return num1
}

// console.log(cartValue(100,200,300,400)); //[ 100, 200, 300, 400 ]

function cartValue1(val1, vql2, ...num1){
    return num1
}
// console.log(cartValue1(100,200,300,400,500,600,700)); //[ 300, 400, 500, 600, 700 ]

// passes object in function
 const user={
    id:1,
    name:"Megha"

 }
 function accessObject(anyobject){
    console.log(`username is ${anyobject.name} and id is ${anyobject.id}`);
 }
 accessObject(user) // we can pass object directly e.g., accessObject({
//     id:1,
//     name:"Megha"

//  })

// passes array in the function

const arr = [100,200,300,400,500]
function accessArray(getArray){
    return getArray[2]
}
// console.log(accessArray(arr));
// console.log(accessArray([100,200,300,400,500]));// access directly