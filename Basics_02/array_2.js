const my_hero= ["Mian","g","The Great"]
const appKHeros= ["batman","thor","Iron Man"]
// const my_hero= ["Mian","g","The Great"]
// my_hero.push(appKHeros)
// console.log(my_hero);
// const total_Heros= my_hero+ appKHeros
// console.log(total_Heros);
// const newHero = my_hero.concat(appKHeros)
// console.log("without spread operator ",newHero);
const all = [...my_hero,...appKHeros]
console.log("with spread operator ",all);
const another = [1,2,3,4, [3,5,6, [3,9,0,[1,3,4,7]],[3,2,1,5,5]]]
console.log(another.flat(Infinity));
console.log(Array.isArray(1));
console.log(Array.from("Mian"));
const score1 = 100
const score2 = 100
const score3 = 100
const score4 = 100
console.log(Array.of(score1,score2,score3,score4));