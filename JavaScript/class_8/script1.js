//console.log('finenh')
/*
function pal(str){
    let check = ''
    for(let i = str.length -1 ; i >=0; i--){
        check += str[i]
    }
    if (check === str) {
           console.log(check +' its a paldrome')
    }else{
        console.log('not a paldrome');
        
    }
}
pal('madam')
*/
// function checkprime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
//console.log(checkprime(10))

// function prime(num){
//     if(num <=1 ) return false;

//     for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         return false
//     } else{
//         return true
//     }
//     }
// }
// console.log(prime(88));

function factorial(num) {
  let s = 1;
  for (let i = 1; i <= num; i++) {
    s *= i;
  }
  console.log(s);
}
factorial(5);

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

//printTable(7);

// let obj = {a : 1 , b : 2};
// let keys = Object.keys(obj);
// console.log(keys);

// const user = { name: "A" };
// Object.freeze(user);
// user.name = "B";
// console.log(user.name);

// console.log(typeof function(){});
// let obj = { a: 1, b: 2 };
// let keys = Object.keys(obj);
// console.log(keys);

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// "use strict";
// x = 100;
// console.log(x);
// function test() {
//   return "JS"
// }
// console.log(test());

// let arr = [1, [2, 3], 4];
// console.log(arr[1][0]);

// let nums = [1, [2, [3, 4]]];
// console.log(nums[1][1][0]);

// let arr = [[1, 2], [3, 4]];
// arr[0].push(5);
// console.log(arr);

// console.log(typeof(NaN));   //number
// console.log(typeof NaN);    //number

// let a = 1;
// let b = a++ + ++a + a;
// console.log(b); //7

// let x = 3;
// let y = x++ + x++ + ++x;
// console.log(x, y);   //6,13

// let arr = [10, 20, 30, 40];
// let result = arr.indexOf(20) + arr.indexOf(50);
// console.log(result);  // 0
// console.log(1 + "2" + 3 - "1");   // 122

// let obj = {
//   a: {
//     b: {
//       c: 10,
//     },
//   },
// };
// obj.a.b.c = obj.a.b.c + 5;
// console.log(obj.a.b.c);



let obj = {
  a: {
    100: {
      "c-18": 10
    }
  }
};
obj.a.b.c = obj.a.b[c-18] + 5;
console.log(obj.a.b[c-18]);


// Hover over a message to pin it
// keep


for (let i = 2; i <= 20; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
