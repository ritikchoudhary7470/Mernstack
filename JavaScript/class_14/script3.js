console.log('hello error handling')

// Try , Catch and Throw
// try => ye keyword hai /-> ek block hota jiske andar error genrate kiya jata hai
// Catch => try ke andar ki eeror ko catch karta hai 
// throw =
//finally => esa code jisko chalana hi hai vo code finally ke andar aay isme error bhi aa jati hai 

//Catch method  => ye promise ke sath use hota hai or ye ek function run karta hai  .catch(()=>{}). Catch method mai parameter mai function bna sakte hai or us function mai varible store kr sakte hai
// Catch Function => catchfunction  try or eeror handling/exception handling  kai sath use hota hai or is ke parameter mai varible store kar sakte hai lekin function nahi bana sakte

function addTwoNumber(x,y) {
    try {
        if (typeof(x) == 'number' && typeof(y) == 'number') {
            return x + y;
        }
    }catch(err){
        console.log('we got error',err)
    }
}
addTwoNumber(1,2)