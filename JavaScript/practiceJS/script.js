let btn = document.getElementById('btn')
console.log('pratice');



//call().
// function introduce(age, city) {
//   console.log(`I'm ${this.name} age ${age}, from ${city}`);
// }

// const person = { name: "Alice" };

// introduce.call(person, 25, "Paris");
// I'm Alice, age 25, from Paris


// function Animal(name) {
//   this.name = name;
  
// }
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
//     }






/////////////////////////////////////


// let username = 'cheku'
// let totalBill = ''

// let firstProduct = 5
// let totalPrice =   50
// let discountFirst = ''
// let result = ''
// if(firstProduct > 4){
//   discountFirst += totalPrice * 5/100
//   result = totalPrice - discountFirst
//   console.log(result)
// }

// let fivthProduct = 5
// let totalPriceFive =   50
// let discountFive = ''
// let fiveResult = ''
// if(fivthProduct == 5){
//   discountFive += totalPriceFive *10/100
//     fiveResult = totalPriceFive - discountFive
//     console.log(fiveResult)
// }else{
// console.log(totalPriceFive)
// }

// let item10 = 10
// let tenthProduct = 10
// let totalPriceTen =   100
// let discountTen = ''
// let tenResult = ''
// if(item10 == 10){
//        if(tenthProduct >=10){
//   discountTen += totalPriceTen *15/100
//     tenResult = totalPriceTen - discountTen
//     console.log(tenResult)
// document.writeln(tenResult)

// }else{
// console.log(totalPriceTen)
// document.writeln(totalPriceTen)
// }
// }else{
//   console.log('not a item ten')
// }


let item1Quentity = prompt("Enter quantity:");
item1Quentity = Number(item1Quentity);
let item1 = 1
let item1Price = 10 
let item1TotalPrice = item1Price * item1Quentity
let carryBag  = true


if (carryBag == false) {
  
if(item1 === 1){
  if (item1Quentity < 4) {
    console.log(item1TotalPrice + 10)
    document.writeln(item1TotalPrice + 10)
  }else{
    if (item1 = 5) {
    item1TotalPrice = item1TotalPrice - (item1TotalPrice * 0.05); // 10% discount
    console.log(item1TotalPrice + 10)
    document.writeln(item1TotalPrice + 10)
    } else {
      if (item1Quentity > 5) {
   item1TotalPrice = item1TotalPrice - (item1TotalPrice * 0.10); // 10% discount
    console.log(item1TotalPrice + 10)
    document.writeln(item1TotalPrice + 10)
  }
    }
  }
}
} else {
  
if(item1 === 1){
  if (item1Quentity < 4) {
    item1TotalPrice += item1Price * item1Quentity
    console.log(item1TotalPrice)
    document.writeln(item1TotalPrice)
  }else{
    if (item1Quentity == 5) {
      item1TotalPrice = item1TotalPrice - (item1TotalPrice * 0.05); // 5% discount
    console.log(item1TotalPrice + 10)
    document.writeln(item1TotalPrice + 10)
    } else {
      if (item1Quentity > 5) {
    item1TotalPrice = item1TotalPrice - (item1TotalPrice * 0.10); // 10% discount
    console.log(item1TotalPrice)
    console.log(item1TotalPrice * 0.10)
    document.writeln(item1TotalPrice + 10)
  }
    }
  }
}
}





