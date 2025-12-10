// console.log('this keyword');

// .this keyword  => by default window object.
// this keyword means current invoking object

// 1.
// let obj = {
//     id : 1,
//     username : 'yahu',

//     printData : function() {
//         console.log(this.id , this.username)
//     }
// }
// obj.printData()   //object ke andar function hai to yha par this keyword object ko point karega 

// 2.
//  data = () => {
//     console.log(this);   // yha par this keyword window ko point karta hai.
// }
// data()  

//3 constructor function.
// function getValue() {
//     console.log(this);
// }
//  getValue();
// getValue.call()

//new keyword => 


// Shallow Copy and Deep Copy.

//Shallow Copy. => shallow means original 
  
//1.
// let obj1 = {
//     batteryid : 101,
//     batteryname : 'exide',
//     companyInfo : {
//         bname : 'exide pvt itc',
//         ravenue : 10000
//     }
//     // isGoodQuality = true 
// }
// const obj2 = obj1;
//  obj2.batteryid = 105;
//  console.log(obj2);
 

 //2.  object.assign()
//  let obj1 = {
//     batteryid : 101,
//     batteryname : 'exide',
//     companyInfo : {
//         bname : 'exide pvt itc',
//         ravenue : 10000
//     }
//     // isGoodQuality = true 
// }
//  const obj2 = Object.assign(obj1)
//  obj2.batteryid = 115;
//  console.log(obj2);


// 3. spread operator in shallow copy.
//  let obj1 = {
//     batteryid : 101,
//     batteryname : 'exide',
//     companyInfo : {
//         bname : 'exide pvt itc',
//         ravenue : 10000
//     },
//     isGoodQuality : true 
// }
// const obj2 = {...obj1}
// obj1.batteryid = 1004
// obj2.batteryid = 1005
// obj2.batteryname = 'fire' 
// obj2.companyInfo.bname = 'MNO'
// console.log(obj1);
// console.log(obj2);


// Deep Copy. => Each object is diffrent.

// 1. =>  JSON.parse(JSON.stringify())
// const obj1 = {
//     id : 1,
//     name1 : 'rahul',
//     info : {
//         cname : 'RCB',
//         revenue : 10255
//     },
//     adress : 'C21'
// }
//  const obj2 = JSON.parse(JSON.stringify(obj1))
//    obj2.name1 = 'raju'
//    obj2.info.cname = 'CSK'
//    console.log(obj1);
//    console.log(obj2);

// 2. Structured Clone.
//  const original = { name: "Aman", date: new Date() };

//  const copy = structuredClone(original);
//  console.log(copy);
 

// 3. Lodash DeepClone 
 const original = { name: "Aman", date: new Date() };
   import _ from "lodash";
const copy = _.cloneDeep(original);
console.log(copy);
