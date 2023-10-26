// 1. Premitive 
// 7 Types: String , Number, Boolean, Null, Undefined, symbols(used for uniqueness), BigInt

const score = "100" // string
const scoreInfo= 200.3 // number


const isLoggedIn= false  //boolean
const temp= null   // empty
let counter;   //undefined

//use of symbol

const id = Symbol("222")
const anotherId = Symbol("222")
// console.log(id === anotherId);

// BigInt
const big= 234343434324343n
// console.log(typeof big);

//Note :
// all premitve types are stored in stack memory and make copy




// 2.Non-Premitive(Call by reference)
// Object,Array,Function

// Note: all non-premitive types are stored in Heap and make reference
const names=["Mian","g","Ateeq"]
console.log( typeof names);
const obj={
    name:"Mian",
    age:15,
}


const myFunction=function(){
console.log("Hello 👋 World");
}
// console.log(myFunction);