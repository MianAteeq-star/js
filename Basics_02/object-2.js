const myObj= new Object()
// console.log(myObj);
const objTinder= {}
// console.log(objTinder);
objTinder.name="Mian"
objTinder.id="123"
objTinder.email="m@gmail.com"
console.log(objTinder);
// console.log(objTinder.hasOwnProperty("j"));
const obj1= {1:"a",2:"b",3:"c"}
const obj2= {4:"d",5:"e",6:"f"}
const obj3= {7:"a",8:"b",9:"c"}
// const obj4= {...obj1,...obj2,...obj3}
// const obj4= {obj1,obj2,obj3} object k andar object aa jata hai 
const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);
const my={
    name:"Moa",
    fullName:{
        firstName:{
            myName:"Mian"
        }
    }
}
// console.log(my.fullName.firstName.myName);


const arrWithObject=[
    {
id:"23",
name:"Mian"
},
    {
id:"23",
name:"Mian"
},
    {
id:"23",
name:"Mian"
},
    {
id:"23",
name:"Mian"
},
]
arrWithObject[1].id="42"
console.log(arrWithObject);