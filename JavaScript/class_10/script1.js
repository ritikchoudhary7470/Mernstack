//let arr = [3,4,56,54,20,25]  //original array
//arr.push() = last index ->insert or add
//arr.pop()  = last index -> deleteb,
//arr.unshift() = 1st index -> insert or add
//arr.shift() = 1st index -> delete
//arr.splice() = three method -> 1st is index / 2nd is = no. of deleting element / 3rd is update the index.
//arr.slice() = it is not changed the array

// arr.splice(4,0,25); // add a no in array
//arr.splice(2,2,1000,200,300)   // delete the second index(2) and delete only one because we give(1) and add 1000 place of dleteing index(2)
// console.log(arr);s

//slice() = it does not change the original array and it is find the elemnt in array.
// let cahngeSlice = [1,2,3,5,6,454,54];
// let result = dlete.slice(1,5)   // it is find the subpart of array means ( dlete.slice(1,5) -> is find the index of 1 to 4(5-1) means the output is = [2,3,4,5]
// console.log(result);

//arr.map() => array ke har elemnt par work(kaam) karti hai hai ek sath
// yadi array ko modify karana hai to return karna padega arr.map(()=>{return value})
// it does not modify the original arr.
 // esme keywords(break or continue)  ham use kar sakte hai 


//    let arr = [1,2,3,4,5,6,7,8,9,10];
//    let result = arr.map((i)=>{
//     return i*3            // yadi array ko modify kar rahe hai to return karna jaruri hai.
//    })
//    console.log(result);

//arr.filter() =>  array mai se yadi koy element chahiye to hamm filter ka use karte hai par hme condition deni padegi   0
 // esme keywords(break or continue)  ham use kar sakte hai 
//     let arr = [1,2,3,4,5,6,7,8,9,10];
//     let result = arr.filter((i)=>{
//         return i%3 ===0
//     })
//    console.log(result);

//arr.find() => yadi hame 1st matching single element chahiye to find() methid use hoti hai.
// it is does not change original array
//     let arr = [1,2,3,4,5,6,7,8,9,10];
//     let result = arr.find((i)=>{
//         return i%5 ===0
//     });
//    console.log(result);

//arr.some()  => some method boolean(true/false) mai output deti hai
//  The some() method in JavaScript checks whether at least one element in an array satisfies a given condition.
//      let arr = [1,2,3,4,5,6,7,8,9,10];
//     let result = arr.some((i)=>{
//         return i%9 ===0
//     });
//    console.log(result);

//arr.indexof() => indexof batata hai ki array mai jo elemnt hai vo kis index par hai or yadi array mai vo elemt nahi hai to output mai -1 aayga

//       let arr = [100,250,256,46,658,458];
//     let result = arr.indexOf(46)
//    console.log(result);


//arr.every() => sari condition true hona chahiye yadi ek bhi false hue to output false aayga
//  let arr = [3,4,5,6,7,8,9,10]
//   let result = arr.every((ele)=>{ele % 1 === 0})
//   console.log(result);
  

// arr.flat() => nested array turn into single array
// let arr = [1,2,3,[4,5,[45,78,[56,[75,555],524,752,475],85],562],320];
// let merge = arr.flat(2)
// console.log(merge);


//arr.join()
//  let arr = [3,4,5,6,7,8,9,10]
//   let result = arr.join('-')
//   console.log(result);



//arr.reduce()  => sare array ke element ko add akr dega
//  let arr = [3,4,5,6,7,8,9,10]
//   let result = arr.reduce((sum, ele)=>{return sum + ele},0)   // here the 0 is the value of sum.->means sum mai hum arr ko add karege.
//   console.log(result);


                        
  //   primitive  => esme value compare hoti hai
//   let x =5;
//    var y =5;
//    clg(true)


//non primitive => isme array ki property compare hoti hai.
//  let arr1 = []       
//  let arr2 = []                              
//  clg(false)


// Default Parameter => function ke parameter mai hum Default Parameter last mai likhte hai function name(x,y,z=30->z is default parameter) 

// function sumOfThreeNo(x,y,z=0) {
//     return x+y+z;
// }
// console.log(sumOfThreeNo(10,20));


//function expression => kisi bhi variable mai function ko store karete hai use Fn. Expression bolte hai
    // esme hosting support nahi hoti hai
let ans = function(x,y) {
    return x+y;
}
// name(1,2)
console.log(ans(10,20));


// ternery  =>  ternary ek expression hai esi ko variable mai store kar sakte hai 
//   ? => n
// let age = 18;
// let isAdult = age>=18 ? 'adult' : 'nibba hai' ;  // ? => iske baad wala if condition jesa hai.=> ? 'adult' : ye ek tarah se else hai
// console.log(isAdult);



//Spread and rest  Operator => denoted by three dotes(...spread). 

// rest => REST parameter ke last mai likha jayega
// function rest1(x,y, ...z) {     //hamare pass bahut sare argument hai or parameter two hi hai to ...z mai sare argument REST ho jaayge
//     console.log(rest1)
// }
// rest1(1,2,3,4,5,9,6)      // parameter two hai or argument Bahut Sare toh REST(...z => parameter mai dena hoga) mai Chale Jayge

//Spread => kisi ek variable ki value dusre variable mai copy karna ho to use karte hai
// let arr = [1,2,3,4,5]
// let arr1 = [...arr]        // yah par aar ki value arr1 mai copy kari hai.
// console.log(arr1);

// let arr = [1,2,3,4,5]  
// let arr1 = [5,6,7,8,9]
// let bothArr = [...arr,...arr1]     // yha  par dono array ko merge kiya hai.
// console.log(bothArr);



//Distructuring =>  two type Array and Object
// extract the value from the array and object.
//    let ans = [1,2,3,4,5]  
//    const [a,b,c,d,e] = ans;
//    console.log(a,b,c);

//    const info  = {
//     id : 1,
//     namm : 'ritik',
//     age : 20
//    }
//    const {gorav} = info;
//    const {id,namm} = info    //yaha par id or namm key hai => or key hamesha object mai wahi hogi otherwise undefined aayga
//    console.log(id,namm);
   

// Break and Continue 
 
// Continue => loops ko skip karna ho to CONTINUE 
// Break => loops ko Break karna ho to BREAKE


// ForIN and ForOf 

//forOF  => array/string ke sath use hoga. -> item ,value access karga
  let arr = [1,2,3,4,5]
for (let element of arr) {
    // console.log(element); 
}

//forIn => object ke sath use hoga 



// template Interpulation => html ke pre tag jesa work karta hai 
  // ye sirf BECKTICS ke sath work karta hai 
  //syntax => ` &{user} `  user => variable ka name

  let name0 = 'Ram'
  let name1 = 'shyam'
  // let add = `${name0} ${name1}`  // esme space aayga
  // let add = name0 + name1    //esme space nahi aayga
  console.log(add)

  //String is immuteble 
