console.log('Impport And Export / Event Loop')

// Import And Export in JS  => 

//Export => ek file mai Named or Default use kar sakte hai par Defalt Export ek hi baar use hoga par Named export baar baar use ho skta hai par varible ka name diffrent rahna chahiye
// two type => Named export ans Default Export
//Named export -> varibale ke sath use hoga or function ke sath use hoga or ye multiple time use hota hai
//Default Export -> ek function mai ek hi baar export hogi multiple time export nahi hoga

//Import 
// named export hoga tab varible/function {is ke andar}  use hoge
// syntax ->  import {varible name/function name} from "./file.js" 

// default expport single varible/function  ke liye 
// syntac -> import varible/function from  "./file.js"

// yadi file ke bahar aana hai to =>  ../ iska use hoga
// yadi file ke andar jana hai to =>  ./  iska use hoga



//**Event Loop => responsible for excuting  asyncronous programming
//part => 1. -> CallStack -> 2. -> Macro Queue/ Task Queue -> 3. -> micro Queue  -> 4. WEB API  -> 5.  Event Loop
// Syncronous > Asyncronous // means Syncronous priority is high than Asyncronous
// Syncronous > promises > SetTimeOUT,SetIntervel

// ASyncronous Open
//1.  API Call (Fecth)
//2.  SetTimeout => 
//3.  SetInterval =>
    
    setTimeout(()=>{
        console.log(' print after 1 sec')
    },1000)

    let clearTheData = setInterval(()=>{
        console.log('har sec mai print')
    },2000);
    setTimeout(() => {
        clearInterval(clearTheData)
        console.log('khatam')
    }, 10000);g