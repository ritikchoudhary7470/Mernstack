/*

     1. Write a program to check whether a number is Even or Odd.
       

     for(let i = 1 ; i <=30 ; i++){
       if(i % 2===0){
         console.log(`the number is even = ${i}`)
       } else{
         console.log(`the number is odd = ${i}`)
       }
     } 
       */

/*
     2. Given an integer, check if it is divisible by 5 and 11.
   

      for(let j = 1 ; j<=100 ; j++){
       if(j % 5 ===0 && j % 11 ===0){
            console.log(`the number is divisible 5 and 11 is = ${j}`)
       }
      }
       */

/*

     3. Check whether a number is positive, negative, or zero.


     let num = -20
     if(num > 0 ){
          console.log(`the number is positive `)
      
     }else if(num < 0 ){
          console.log(`the number is negative `)
   
     }else{
          console.log(`the number is zero `)
   
     }
          */

/*
    4. Check if a number is divisible by 2, 3, and 5 at the same time.


for(let k = 1 ; k<=100 ; k++){
if(k % 2 ===0 && k % 3 ===0 && k % 5 === 0){
     console.log(`the number is divisible 2,3 and 5 is = ${k}`)
}
}
*/
/*


       let ans = ''
      for(let i = 1; i <=5 ; i++){
        for(let j=1; j <=2; j++){
           ans += '*'
   
        }
        console.log(ans)
      }
        */
/*
         let sum = ''
        for(let row = 1; row<=5; row++){
               sum += row
               console.log(sum)
        }
     */

/*
     5. Reverse a number without using built-in functions

     let number = [1,2,3,4,5]
     let str = []
     for (let i = number.length - 1; i >= 0; i--) {
          str += number[i]
     }
     console.log(str)
*/
/*
     6. Check whether a given number is a palindrome.
     let text = 'madam'
          let reverse = ''
          for (let i = text.length - 1; i >= 0; i--) {
               reverse += text
               console.log(reverse[i])
          }
     */

// 7. Check whether the sum of the first and last digit of a number is equal.

/* function sum(){
       let num1 = [1,2,3,4,5]
       console.log(num1)
      }
      sum()
      */

//8 .Count how many digits in a number

/*
      let str = 'hello world'
      let sum = 0 ;
      for(let i = 0; i<str.length; i++){
        sum = i+1
        
    }
    console.log(sum)
*/

//9. Check whether the reverse of a number is divisible by 3

/*
        for(let i = 1; i <=30 ; i++){
            let divisible = ''
            if (i % 3 == 0) {
                divisible = i
          console.log(divisible)

            } else {
          console.log(' not a divisible') 
            }
           
        }
            */

// 10 . Find the sum of digits of a number.
/*
          let sum = 0
          for(let i = 1; i <=5; i++){
            sum += i
          }
          console.log(sum)
     */

//11. Find the product of digits of a number
/*  
     let product = 0
      for(let i = 1; i <=5; i++){
         product += i
         console.log(product * i)
       }
  */
//12. Find the largest digit in a number
/*
    let lasgestNo = 15
      for(let i = 1; i <=5; i++){
        lasgestNo += i
        console.log(lasgestNo > i)
      }
     */

//13. Find the smallest digit in a number
/*   
     let num = 20
     if(num < 0 ){
          console.log(`the number is samllest `)
     }else{
          console.log(`the number is largest `)
     }
*/
//15 .Check if digits of the number are strictly increasing
/*
     function stricklyIncrease(){
          for(let i = 1; i <20 ; i++){
               console.log(i); 
          }
     }
     stricklyIncrease();
*/
//16. Find the factorial of a number

/*
     function factorialNo(n){
          let fact = 1;
          for(let i = 1; i<=5; i++){
             fact *= i
          }
         console.log(fact)
     }
     factorialNo(5)
*/

//18. Sum of factorial of digits of a number

/*
     
     function factorialNo(a,b){
          let fact = a + b;
               for(let i = 1; i<=5; i++){
                  fact += i
                  fact *= i
               }
              console.log(fact)
     }
     factorialNo(4,15)
     
*/

//20. Check whether a number is prime.
/*
       let num = 20;
       if(num >= 0 ){
            console.log(`the number is prime `)
       }else{
            console.log(`the number is not a prime number `)
       }
    */

//21. Print all prime numbers in a given range
/*
    function isPrime(num){
       if(num <= 1 ) return false ;
        
    for(let i = 2; i<=num; i++){
  
             if( num % i === 0 && i % i == 0){
                  return false        
                 }else{
                      return true
                 }
            }
     }  
     
     let ans = isPrime(10)
       if(ans){
            console.log(`Prime`)
       }else{
            console.log(`Not Prime`)
  
       }
  */
//22 .Count digits in a number that are prime digits (2,3,5,7)
/*
function countPrimeDigits(num) {
  let count = 0;
  const primeDigits = [2, 3, 5, 7];

  for (let digit of num.toString()) {
    if (primeDigits.includes(Number(digit))) {
      count++;
    }
  }
  return count;
}
console.log(countPrimeDigits(23547)); // 4
console.log(countPrimeDigits(102468)); // 1
*/
//29.Find HCF of two numbers.
/*
     function findHCF(a, b) {
          while (b != 0) {
               let c = b
               b = a % b
               a = c
          }
          return a
     }
     console.log(findHCF(25, 60))

   */

//30. Find LCM of two numbers
/*
     function findLCM(a, b) {
          let max = Math.max(a,b);
          while(true){
               if(max % a === 0 && max % b ===0){
                    return max
               }
               max++
          }
     }
     console.log(findLCM(10, 16))
*/
//31. Check if two numbers are Co-prime.
/*
function areCoprime(a, b) {
    let min = Math.min(a, b);

    for (let i = 2; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(areCoprime(5, 6) ? "Co-Prime Numbers" : "Not Co-Prime Numbers");

*/

    // 36. Print sum of first n odd numbers.
console.log("number");
