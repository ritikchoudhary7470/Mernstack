console.log('string Question')

//1. Reverse a String. 

// let str = 'i am ritik'
// let result = ''
// for (let i = str.length-1; i >= 0; i--) {
//    result += str[i]
// }
// console.log(result)

//  let ans = str.split('').reverse().join('')             
//  console.log(ans)


//2. Check if a String is a Palindrome

// function palindrom(str) {
//     let result = ''
//    for(let i = str.length - 1  ; i >= 0 ; i--){
//        result += str[i]
//     }
//     if (str === result) {
//         console.log(result , '= is a palindrome')
//     }else{
//         console.log('not a palindrome')
//     }
// }
// palindrom('madam')


//3. Find the Length of a String

// function strLength(str) {
//     let result = str.length
//     console.log(result)
// }
// strLength('hello its a length')

// let str =  'hello its a length'
// let result = str.length
// console.log(result)


//4. Count Vowels in a String

// let str = 'i am vowels'
// let vowels = 'aeiouAEIOU'
// let count = 0
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {                     //Here, you’re checking if the entire string (str) is inside vowels, which will always be false. You need to check each character using str[i].
//     count++
//   }
// }
// console.log(count)

// function countVowels(str) {
//     let vowels = 'aeiouAEIOU'
//     let count = 0
//     for (const element of vowels) {
//         if (vowels.includes(element)) {
//             count++
//         }
//     }
//     console.log(count)
// }
// countVowels('this is a vowels count in str')



// 5. Remove Duplicate Characters from a String
   
// let str = 'this is duplicate and its a duplicate'
// let result = ''

// for (let i = 0; i < str.length; i++) {
//    if (!result.includes(str[i])) {
//     result += str[i]
//    } 
// }
// console.log(result)


// let str = "programming";
// let seen = {};
// let result = "";

// for (let char of str) {
//     if (!seen[char]) {
//         seen[char] = true;
//         result += char;
//     }
// }
// console.log(result);


//6. Check if Two Strings are Anagrams
let str1 = 'listen'
let str2 = 'silent'

// for (let i = 0; i < str1.length; i++) {
//    if(str2.includes(str1[i]) && str1.length === str2.length){
//        console.log('its a Anagram')
//    }else{
//     console.log('Not Anagram')
//    }  
// }

// if (str1.length != str2.length) {
//     console.log('not Anagrams')
// }else{

//     let firstStr = str1.split('').sort().join('')
//     let secondStr = str2.split('').sort().join('')

//     if (firstStr === secondStr) {
//         console.log('it is a Anagram')
//     }else{
//         console.log('not Anagram')
//     }
// }



//7. Find the First Non-Repeating Character in a String

// let str = 'swiss'
// let result = {}

// for (const element of str) {
//    result[element] = (result[element] || 0) + 1            //frequency check kari ki str mai kon kitni baar aa rha hai
// }
// // console.log(result)

// for (const element of str) {
//     if (result[element] === 1) {                          // condition di result mai yadi koy element 1 baar hai usko uthao
//         console.log(element)
//         break                                             // breake lagaya taki loop ek hi baar chale kyoki bAHUT SARE element 1 baar ho sakte hai
//     }
// }



//8. Check if a String Contains Only Digits

// let str = '12345'
// let digit = true

// if (str.length === 0) {
//     console.log(false)
// }else{ 
//     for (let i = 0; i < str.length; i++) {
//         if ( str[i] < '0' || str[i] > '9') {
//             digit = false;
//             break
//         }
//     }
//     console.log(digit)
// }
