console.log('this is JavaScript Class 4')

// keywords = predefined reserved words 
// ex = let ver const function do d0-while forloop so on!!!!!!!

// token = smallest unit of programe

console.log(typeof(typeof(typeof('false'))))


console.log('ritik' + 11)

console.log(11 + 'karan')

console.log("11" + 'karan')

console.log( 1111 == '11' + 11)  // true
console.log( 11 == '11' + 11)  // false

let a=10;
console.log(a)      //10
{
    let a=500;
    var b=70;
    console.log(a)   //500
}
console.log(b)       // 70
function Demo(){
    console.log(a);   //10
    var b = 197;
    console.log(b)  //197
}
Demo();
console.log(b)    //70


///////////////////

// !!!!!!!!!!!!!!!!!!!!!!!!Synchronous Js!!!!!!!!!!!!!!!!
// agar mera code line by line excute hota hai to use synchronous bolte hai



// console.log("This is java script class 4");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// keywords-> predife reserved word is known as keyword
//ex-> let const var function for while do if so on!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// identfiers-> name of the variable/function/class is known as identifiers
// let x=10 here x is identifiers

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// token-> smallest unit of the program is known as token.
// ex-> console.log("hey")
//token syntex
// console.
//     log
//     (`
//     hello`
// );


// variables-> variables is a container which is used to store values.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// way of creating variable->

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*let-> it is  used for creating block scope variable.
let variable ko banate time value de bhi sakte or nhi bhi de sakte hai
agar value nhi deta hu to us case me variable ke andar undefined
store ho jata hai. let se banaye variable ko dubara same nhi se
nhi banaya ja sakta hai same block ke andar ya same
function ke andar.*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const->
/*it is  used for creating block scope variable.
const variable ko banate time value ko dena most imp hai
agar value nhi deta hai to us case me error aa jati hai
const se banye gaye variable ko update nhi keaya ja sakta hai

const se banaye variable ko dubara same scope me
nhi banaya ja sakta hai" same block ke andar ya same
function ke andar".*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var
/*it is  used for creating function scope variable.
var variable ko banate time value de bhi sakte or nhi bhi de sakte hai
agar value nhi deta hu to us case me variable ke andar undefined
store ho jata hai. var se banaye variable ko dubara same scope ke andar
create keaya ja sakta hai but hame nhi karna chaheaye.
*/


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Rules of creating variables/functions/classes

/*
1. varaible ka name hamesa alphabet, underscore and doller se hee start hoga.
2. varible ke name ke beech me space nhi hona chaheaye.
3. variable ka name kabhi bhi js ke keyword ke name par nhi hona chaheaye.
4. variable ka name meaning ful hona chaheaye.
5. functio ka name hamesa camel case me hona chaheaya and class ka name pascal case me
*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// syntex of creating variable
// let x;// ye bhi kar sakte hai
// let x1 = 10;// ye bhi kar sakte hai
// x1 = 5875;// ye bhi kar sakte hai
// var y = 20;// ye bhi kar sakte hai
// var y;// ye bhi kar sakte hai
// y = 8907;// ye bhi kar sakte hai

// const z = 10;//app ye hee kar sakte hai
// z = 100;
// //  const z1;// error dega
// let x2=10;
// let x2=20;same name variable cant exist in the same scope
// const y1=3748;
// const y1=24734; same name variable cant exist in the same scope
// var x=1089;
// var x=4767


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//scoping -> life time of a vriable is known as scoping.
/*block scope-> jo bhi variable let const ka use karke block ke andar bante hai
unko bahar access nhi keaya ja sakta hai bcs let and const varible ka scope
 block hota hai
 */
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!Block Scope!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ex->
// {
//     let a = 10;
//     const b = 100;
//     console.log(a, b)

// }
// console.log(a,b)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// local scope/function scope -> var se banaye gaye varible ka scope function scope hota hai
//function -> function is a set of lines which is used to perform a
// specific task.addEventListener('type', listener, options)

// function kee syntex
// function sayHey() {
// console.log("hey")
// }
// function ka o/p dekhne ke leaye function ko call karna padta hai
//sayHey();// parenthesis lagana most imp hai.

//  example of function scope
// function sayHey() {
//    var x=10;
// x ko aap only function ke andar hee use kar payenge
// }
// console.log(x);// yha par error aa jayegi


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// global scope-> es scope me banaye gaye variable ko aap khi par bhi use kar sakte hai
// jahe function ke andar ya block ke andar but yad rhe jis block ke andfar
// agar global variable ke jaise name hoga to us block ke andar us varible kee priority jyada hogi
// let x = 10;
// const y = 20;
// var z = 674;

// {
//     console.log(x, y, z)
// }

// function sayHey() {
//     console.log(x, y, z)

// }

// sayHey()
// console.log(x, y, z)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->1
/*agar kisi variable ko var kee help se kisi block ke andar banaya jata hai
to us varible ko block ke bahar bhi access kar sakte hai.*/

// {
//     let h=87;
//     var k=871223;
// }
// console.log(k)
/* you can access variable outside scope but that varible must be
 created via var*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->2
/*
agar aapne same name ke variable multiple scope me banaye hai
to hamesa us scope ke andar un variable kee priority alag scope 
me banaye gaye variable jyada hoti hai
*/

// let x=10;
// console.log(x)//10
// {
//     let x=20;
//     var z=90;
//     console.log(x)//20
// }
// console.log(z)// 90
// function Demo(){
//     console.log(x);//10
//     var z=197;
//     console.log(z)//197
// }
// Demo();
// console.log(z)//90


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3

//(3.1) global variable ko khi se bhi change keya ja sakta hai 
// var x = 90;
// console.log(x)
// {
//     x = 8724;
//     console.log(x)
// }

// function changeValue() {
//     x = 485466546;
// }
//  changeValue()
// console.log(x)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3.2

//(3.2) global variable  agar me bina kisi let const ya var ke banata hu tab
// x = 19;
// {
//     x = 8724;
   
// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3.3

//(3.3) Harkate 
// x = 19;
// {
//    var x = 8724;
   
// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)

// // 
// //(3.4) Harkate 
// var x = 19;
// {
//     x = 8724;
   
// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)


// lets see on the dev tools about view the scope

// var x=90;
// console.log(x)
// {
//     debugger;
//     let yt=908;
//     console.log(yt)
//     const x1=3785;
//     console.log(x1)
// }

// function sayHehfdf()
// {
//     debugger;
//     var x=90;
// }
// sayHehfdf()

// debugger
// let x=10;
// console.log(x)


// function - set of lines or block of code which is used to perform some specific task
// -----------------------------------------------------------------------------------------
/*Advantage of functions - 
readability - easy to understand
reusability - write once and use anytime anywhere
better performance - due to less number of lines our code will be fast */
// -------------------------------------------------------------------------------------------
/* syntax of function -

normal function/simple function

js supports function declaration along with definition
function functionName(parameter list - make variable without using let, var, const){
   write your logic here...
}

if you want to execute the function we must have to call it */
// -------------------------------------------------------------------------------------------
/*types of function --

1. normal function/simple function
2. arrow function
3. callback function
4. Higher order function
5. anonymous function
6. pure function
7. impure function
8. IIFE

function expression- not a type of function*/
// -------------------------------------------------------------------------------------------

// example of simple function -- 

// function add(x,y){
//     z = x +y;
//  console.log(z) 
// }
// add(5,10);
// add(78,22);


// -------------------------------------------------------------------------------------------
// edge cases-1
/*1. agar function ke logic se jo o/p aaya hai use agar aap function ke bahar use karna chahte hai
us case me function ke andar keaye gaye logic ka jo o/p use return karna padega or function ki calling ko ek variable me store karna padega*/

function incrementByBonus(salary, bonus) {
    return salary + bonus;
}

let incrementAmount = incrementByBonus(10000, 1000);
let initialSalary = 10000;
let finalSalary = initialSalary + incrementAmount;
console.log(finalSalary, "after promotion")
// -------------------------------------------------------------------------------------------
/*2. agar function ke logic se jo o/p aaya hai use agar aap function ke bahar print karna chahte hai
us case me aap function ki calling ko ek consloe.log() ke andar likh do */
console.log(incrementByBonus(10000, 1000));

// -------------------------------------------------------------------------------------------
/*3. agar function ke andar return keyword ka use nhi keaya hai or agar aap function ko ek 
variable me store karte hai to us case me us variable me undefined store ho jayega  */

function demoChaha() {
    console.log("chacha")
}
let ans = demoChaha();
console.log(ans)

// -------------------------------------------------------------------------------------------

/*4. agar function ke andar return keyword ka use nhi keaya hai or agar aap function ko ek 
console.log() ke andar likhte to us case me us console.log()  undefined print   */

function demoFufa() {
    console.log("ham to na jayega")
}

console.log(demoFufa())

// -------------------------------------------------------------------------------------------

// 5. agar function ka name bhar aap console.*log() ke andar karte hai code me khi par bhi us case me function kee puri body print hoti hai
// console.log(demoChaha)
// ----------------------------------------------------------------------------------------------