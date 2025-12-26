// Promises => it is a object in javascript
// which give you assurance/gurantee 
//A Promise is an object that represents a value that will be available now, later, or never.
//three stage 
// 1. Peanding  => default / The async operation is still running
// 2. Resolve => fulfilled / Operation completed successfully → produces a value
// 3. Reject  => error  / Operation failed → produces an error
// syntax =>   const pro = new promise((resolve,reject)=>{})

//resolve ki value cahhiye to .then method ka use hoga
//reject ki value chahiye to .catch() method ka use hoga


// 1 => pendding promise banane ka tarika
//  const pro = new Promise((ab)=>{
//  })
//  console.log(pro);
 



// 2. =>  promise fullfilled hai 
// const pro = new Promise((resolve,reject)=>{
//   reject('promise nahi aa rha hai vo reject ho gaya')    //ye line resolve ke niche hai to error aayga
//   resolve('promise aa rha hai')                           //ye line reject ke niche hai to fullfiled aayga
// });
// pro.then((res)=>{
//   console.log(res);
// }).catch((err)=>{
// console.log(err);
// })
// console.log(pro);


// let p = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Kaam ho gaya!");
//   } else {
//     reject("Kaam fail ho gaya!");
//   }
// });
// p.then(result => {
//   console.log(result); // "Kaam ho gaya!"
// });p.catch(error => {
//   console.log(error); // "Kaam fail ho gaya!"
// });


// Promise is closed


// fecth => chaining ki problem aati fecth se 

// We are doing API Calling by Fetch
// const apiCalling = fetch('hhttps://fakestoreapi.com/products')
// // console.log(apiCalling);
// apiCalling.then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log('the error is coming',err);
// });


// we are converting the data into json
// const apiCalling = fetch('https://fakestoreapi.com/products')
// // console.log(apiCalling);
// apiCalling.then((res)=>{
//   // console.log(res)
//   res.json().then((res)=>{           //res mai data hai vo 
//   console.log(res)
// })
// }).catch((err)=>{
//   console.log('the error is coming',err);
// });



// Async and Await
// Async =>  kisi function ko asyncronous banane ke liye async ka use kiya jata hai
// Await => Await use kar rahe hai to Async function hona chahiye 
// Await ek keyword hota hai.
// Async Await mai chaining ki ploblem aati hai

// Async and Await 

async function fetchAPI(url) {
  const res1 = await fetch(url)
  const data1 = await res1.json();
  console.log(' one', data1) 

  const res2 = await fetch(`${url}/category/${data1[0].category}`);
  const data2 = await res2.json();
  console.log(' two', data2)

  const res3 = await fetch(`${url}/${data2[0].id}`)
  const data3 = await res3.json();
  console.log(' thrre', data3)

  const res4 = await fetch(`${url}/${data3.category}`)
  const data4 = await res4.json()
  console.log(' four', data4)

}
fetchAPI(`https://fakestoreapi.com/products`)