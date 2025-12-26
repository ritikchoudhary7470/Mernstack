//clouser => it ia a object in js
//   clouser is a combination of two things => 1. lexical scoping  2. simple function
// clouser is Indipendent 
// data ko sefly change karne ke liye clouser ka use karte hai
// clouser lexical wale ko terminate karte hai
// clouser address ko retain  karte hai initial value ko.

//disadvantage => westage of memory kyoki clouser variable ke adress ko yadd karke rakhte hai or us adress ko kahi n kahi store karte hai 
//solution :- clouser ke object ko null se inisialised kardege

// without clouser hai 
// function simpleFunction(params) {
//     let x = 0
//     x++
//     console.log(x);
// }
// simpleFunction() //op-1   // simple function mai ek hi baar update hogi or output repeat hoga

// function clouserFunction() {
//     let count = 1
//     return function(){
//         console.log(`inisial value = `+ count);
//         return count = count + count*count
//     }
// }
// let clouser = clouserFunction()    //object ke sath yadi hum return ko clouser mai store nahi karte hai to => ploblem aati hai -> MEMORYWASTE/MEMORYLEAK ki is liye Variable mai null ko store karte hai
// console.log(clouser());
// console.log(clouser());
// console.log(clouser());
// console.log(clouser());
// console.log(clouser());
// console.log(clouser());

// let variable = obj1.null => ese hum clouser ke object  ko null mai store kar sakte is se memory waste nahi hoti hai. 



// CallBack Hell  => ek function ki calling per dusra function call karna fir ese hi function ki calling par another function call karna use callback hell kahte hai
// pyramid of DOM 
// esme Horizontly Scolling hoti hai or coding mai scolling Verticali hoti hai



// Syncronous javascript  => line by line code execute
// it depend on prevease code.
// DOM se sara kam hota hai

// Asyncronous javascript   => DOM se kam karta hai
// multiple line code execute in one time.
// mutipal task run by single line
// run the line of code simultaneously


// BOM(browser Object Model)  => Isme automatic call ho jata , call karne ki jarurat nahi 
// direct invoke browser function 
// ip change DNS(Domaine Name Systum)

// www.com => ip address => DNS => 


// JSON (JavaScript Object Notation)
// keys sari ki sari "" mai rahegi  means keys string mai honi chahiye
//keys ke baad ,(comma) nahi laga sakte
// JSON ke undar keys ki value NULL nahi rahni chahiye
// JSON ke andar Function nahi create kar sakte


//API( Application Programming Interface)
//XHR  => first we create OBJECT 
// 2016 mai XHR (XML Http Request) => it is a function in javascript 


//API calling By XHR.
// Function ke sath
// 1.  create one Object
//  =>  const obj = new XMLHttpREQUEST()
//2.
// => obj.responseType = "JSON"
//3. obj.open("GET")

//request
// GET Req   = server se req lena
//POST Req   = 
//DELETE Req
//PUT
//PATCH

let url = "https://jsonplaceholder.typicode.com/posts"
function apiCalling(method,url) {
    const obj1 = new XMLHttpRequest();
    obj1.response = 'json';
    obj1.open(method,url);
    obj1.onload = ()=>{
    console.log(obj1.response);
     
    }
    obj1.send();
    // console.log(obj1);
    
}
apiCalling("GET", url )