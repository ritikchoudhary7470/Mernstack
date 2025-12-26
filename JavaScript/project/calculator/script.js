// console.log(typeof(typeof(typeof(Boolean))))
// console.log(typeof(typeof(Boolean)))
// console.log(typeof(Boolean))

let obj = {
    101 : 'raju' ,
    'ra-ju' : 1232,
    'naam hai ' : 'gyani',
    kya_naam : 'fursat',
    namee : 'ritik'
}
console.log(obj["ra-ju"])
console.log(obj[101])
console.log(obj["naam hai "])
console.log(obj.kya_naam)
console.log(obj.namee)

let arr = [
  {
    name: "ritik",
    21: 'age',
    23: 'kok'
  },
];
console.log(arr[0]['21']);
console.log(arr[0][23]);
