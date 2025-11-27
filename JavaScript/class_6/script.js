console.log('hello');

function add(){
  return 'claback'
}
// add();

function sum(demo){
    let demoresult = demo()
    console.log(`hello high order function ${demoresult}` )
}
sum(add)


// console.log(function(){ 
//     return console.log(` hey its a IIFI Function `)
// }())

// console.log(function(){
//     'hyyy IIFI '
// });

// console.log((function(){
//    return console.log('hyy it is iifi function inside a function')
// })())


