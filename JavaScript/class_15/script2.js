// DOM(Document Object Model)


console.log('first')
 setTimeout(()=>{
        console.log(' print after 1 sec')
    })
console.log('five')
let pro = new Promise((a,b)=>{
    a('like it')
    b('not intrested')
})
pro.then(e => console.log(e))
console.log('four')