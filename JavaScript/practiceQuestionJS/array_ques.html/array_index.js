console.log("Array Qestion Practice");

// 1. Find the Maximum and Minimum Elements in an Array
/*
let arr = [1,2,3,4,5,6,7,8,89]
let max = Math.max(...arr)
let min = Math.min(...arr)
console.log(max)
console.log(min)

let maxi = arr[0]
let mini = arr[0]
for (let num = 0; num < arr.length; num++) {
if (arr[num] < mini) mini = arr[num]
if (arr[num] > maxi) maxi = arr[num]
}
console.log('maximun' , maxi)
console.log('minimun' , mini)
*/

//2. Reverse an Array
/*
let arr = [1,2,3,4,5,6,7,8,9];
let resultArr = [];
for (let i = arr.length -1 ; i >= 0 ; i--) {
   resultArr += arr[i]
}
console.log(resultArr)   

 let result = arr.reverse()
    console.log(result)
 */

// 3. Find the Second Largest Element in an Array
/*
let arr = [1,2,3,4,5,6,7,8,9];
let secondLarg = Math.max(...arr)
let filtered = arr.filter(num=>num != secondLarg);
let result = filtered.length ? Math.max(...filtered) : null
console.log(result)

function secondLargest(arr) {
    let secondLarg = Math.max(...arr)
let filtered = arr.filter(num=>num != secondLarg);
return filtered.length ? Math.max(...filtered) : null
}
console.log(secondLargest([5,8,9,6,10]))


let arr = [3, 2, 1, 5, 6, 4];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);

*/

//4. Check if Array is Sorted   // means array accending or decending order mai hai ya nahi

/*
function isSorted(arr) {
   let assen = true;
   let decen = true;

   for (let i = 0; i < arr.length - 1 ; i++) {
    if (arr[i] > arr[i +1 ]) assen = false;
    if (arr[i] < arr[i +1 ]) decen = false;
   }
   return assen || decen
}
console.log(isSorted([1,5,2,3,4,8,7,6]))      
console.log(isSorted([5,4,3,2,1]))
console.log(isSorted([1,2,3,4,5]))
*/

//5. Move All Zeros to the End
/*
let arr =[ 1,3,0,5,0,9,0,7,2,0,5]
let index = 0;
for (let i = 0; i < arr.length; i++) {
   if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++
   }
}
while (index < arr.length) {
   arr[index] = 0;
   index++
}
console.log(arr)
*/

//6. Find the Duplicate Elements in an Array

/*
let arr = [1, 2, 3, 4, 1, 2, 4, 3, 6, 1, 2, 3, 7, 8, 9, 11, 2, 5, 8, 9, 42, 35];
let dupli = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !dupli.includes(arr[i])) {
      dupli.push(arr[i]);
    }
  }
}
console.log(dupli);
*/

//7. Array Rotation    // means array ko roate karana
// let arr = [1,2,3,4,5,6,7]
// let k = 2                // k bta raha hai ki kitni baar rotate karna hai yadi 2 hai to suru ke two element last mai chale jayege
// for (let i = 0; i < k; i++) {
//    let rotate = arr.shift()
//    arr.push(rotate)
// }
// console.log(arr)

//8. Find the Intersection of Two Arrays        // intersection means common
/*
let arr1 = [1,2,3,4,5,1]
let arr2 = [3,4,5,6,7,1]
let common = []
for (let i = 0; i < arr1.length; i++) {
 for (let j = 0; j < arr2.length; j++) {
   if(arr1[i] === arr2[j] && !common.includes(arr1[i]) ){          //!common.includes(arr1[i]) ye is liye laga hai array mai koy element repeat hai to woh newArray or Output mai repet na ho 
      common.push(arr1[i])
   } 
}   
}
console.log(common)
*/

//9. Find the Missing Number in an Array
// function missingArray(arr) {
//    let n = arr.length + 1;
//    let arrSum = n * (n+1) / 2;                       //it is a formula of array
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//      sum += arr[i]
//    }
//    return arrSum - sum
// }
// console.log(missingArray([1,2,3,5]))

//10. Find the Frequency of Elements in an Array    // frequency means multiple no. in array
// let arr = [1,1,2,2,44,3,4,5,44,4];
// let freqStore = {}                     //  object{} Iske liye hume ek container chahiye jisme key or value ko store kare
// for (let i = 0; i< arr .length; i++) {
//     if (freqStore[arr[i]]) {
//       freqStore[arr[i]]++
//     }else{
//       freqStore[arr[i]] = 1;
//     }
// }
// console.log(freqStore)

// 11. Find the Largest Sum of Subarray (Kadane's Algorithm)

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let currentSum = arr[0];
// let maxSum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//    //  console.log(currentSum)
//     maxSum = Math.max(maxSum, currentSum);
// }

// console.log(maxSum);

//12. Find the Pair with the Given Sum

// let arr = [2, 5, 7, 11, 15, 17, 19, 20];
// let sum = 20;

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === sum) {
//       console.log("pair of given sum is = ", arr[i], arr[j]);
//       found = true;
//       break;
//     }
//   }
//     if (found) break;
// }
//   if (!found) {
//     console.log("no pair found");
//   }



//13. Find the Kth Largest Element in an Array

// let arr = [3, 2, 1, 5, 6, 4];
// let k = 2;                              //k batata hai kaunsa largest element chahiye

// arr.sort((a, b) => b - a);

// console.log(arr[k - 1]);



//14. Find the Union of Two Arrays

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let union = [];
// // arr1 ke elements
// for (let i = 0; i < arr1.length; i++) {
//     let found = false;
//     for (let j = 0; j < union.length; j++) {      // j loop mai yadi arr[i] or union[j] barabar nahi hai to loop break hokar arr1 ami push ho jaygi
//         if (arr1[i] === union[j]) {
//             found = true;
//             break;
//         }
//    }
//     if (!found) {
//         union.push(arr1[i]);
//     }
// }
// // arr2 ke elements
// for (let i = 0; i < arr2.length; i++) {
//     let found = false;
//     for (let j = 0; j < union.length; j++) {
//         if (arr2[i] === union[j]) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         union.push(arr2[i]);
//     }
// }
// console.log(union);



// 15. Sort an Array of 0s, 1s, and 2s    








//18. Find the Pair with the Given Difference

// let arr = [5, 20, 3, 2, 50, 80];
// let k = 78;

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (Math.abs(arr[i] - arr[j]) === k) {
//             console.log("Pair found:", arr[i], arr[j]);
//             found = true;
//             break;
//         }
//     }
//     if (found) break;
// }

// if (!found) {
//     console.log("No pair found");
// }




//19. Move All Negative Numbers to the Left

// let arr = [1,2,3,-5,-1,-2,-7,8,56]
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] < 0) {
//       arr[index] = arr[i]
//       index++
//    }
// }
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] >= 0 && index < arr.length) {
//       arr[index] = arr[i]
//       index++
//    }
// }
// console.log(arr)

// let arr = [1,2,3,-5,-1,-2,-7,8,56];
// let negative = [];
// let positive = [];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] < 0) {
//       negative.push(arr[i])
//    }else{
//       positive.push(arr[i])
//    }
// }

// let result = [...negative,...positive]
// console.log(result)


// 20. Find the Maximum Product of Two Integers
let arr = [1, 10, -5, 1, -100., 200];
let maxProduct = -Infinity

for (let i = 0; i < arr.length; i++) {
 for (let j = i +1 ; j < arr.length; j++) {
    let product = arr[i] * arr[j]
    if(product > maxProduct){
      maxProduct = product
    }
 }
}
console.log(maxProduct)



















// let maxProduct = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let product = arr[i] * arr[j];
//         if (product > maxProduct) {
//             maxProduct = product;
//         }
//     }
// }

// console.log(maxProduct);

