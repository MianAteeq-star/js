function MyName () {
    console.log("My Name is Ateeq");
}

// MyName()


function addNo (number1,number2){
    return number1+ number2
}


console.log(addNo(3,4))


function login(username) {
    if (!username) {
      return  console.log("please enter userName");
    }

   return `${username} just loggedIn `
}


console.log(login("Mian"));