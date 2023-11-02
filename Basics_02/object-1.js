//Object literals

const sym = Symbol("symbol")
// console.log(typeof sym)

    const obj = {
        [sym]:"mySym",
        "my":"Ateeq",
        name:"Mian",
        age:123,
        location:"Painsra",
        email:"MIan@gmail.com"
    }
    // console.log(typeof obj[sym]);
obj.age= 22;
// Object.freeze(obj)
// obj.name="Saab";
// console.log(obj);
    // console.log(sym);

    // console.log(obj.age);
    // console.log(obj["location"]);
    // console.log(obj);
    // console.log(typeof obj[sym]);
    obj.mian= function(){
        console.log("This is Mian ");
    }
console.log(obj.mian());
obj.mianAteeq = function (){
    console.log(`This is ${obj.name} Ateeq Saab`);
}
console.log(obj.mianAteeq());