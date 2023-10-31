const date =new Date()
console.log( date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
// let mydate= new Date(2023,10,12,6,8,7,9)
// let mydate= new Date("2023-05-04") YY_MM_DD
// let mydate= new Date("04-28-2005") MM_DD_YY
// console.log(mydate.toLocaleString());


// const time= Date.now()
// console.log(time);
// console.log(Math.floor(date.getTime()/1000));
console.log(date.toLocaleString("default",{
    weekday: "long"
}));