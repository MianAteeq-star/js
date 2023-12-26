function MyName () {
    console.log("My Name is Ateeq");
}

// MyName()


function addNo (number1,number2){
    return number1+ number2
}


// console.log(addNo(3,4))


function login(username) {
    if (!username) {
      return  console.log("please enter userName");
    }

   return `${username} just loggedIn `
}


// console.log(login("Mian"));



function calculatedPrice (...num){
 return num
}

// console.log(calculatedPrice(200,400,500))




function calculatedPrices(num1,num2,...num){
 return num
}

// console.log(calculatedPrices(200,400,500,70,60))






const obj = {
    name:"Ateeq",
    age:18
}

function handleObj(anyObject) {
    return `my name is ${anyObject.name} and age is ${anyObject.age}`
}

// console.log(handleObj(obj));
console.log(handleObj({
    name:"mian",
    age:18
}));




const my = [1,2,3,4,5]

function handleArray (anyArray){
    return anyArray
}
console.log(handleArray([5,6,7,8,9]));