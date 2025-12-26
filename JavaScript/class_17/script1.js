//DOM

//Event => Event ek object hota hai jo window deta hai
// event is a kind of action which perform by user
// event are trigor in element and tags.
// event  => click  ,  hover , scroll  , load , submit ,
//eventHandler => kisi bhi event ko perform karane ke liye

// syntax => 1. get elements  2. add the event

// btn.addEventListener('click', (e)=>{
//      console.log('clicked')
// })

// four step
// 1. get the elemnt from the html code
// 2. create element (document.createElement(''))
// 3. give the content to the created element (innerText, textContent)
// 4. append the created element (in stor variable) . that we can see on UI (appen() And appendChild())

//1.  create the elemnt in js
let btn = document.createElement("button"); //kisi bhi element ko create kar rahe hai to usko variable mai store karna padega
btn.textContent = "Add"; // jo variable banaya usko web page pe dikhane ke liye textContent ka use kiya or button ka name diya jo create kiya tha
let bo = document.getElementsByTagName("div"); // button banaya usko kha par dikhana hai waha ka path diya hai  ('body)-> yha body ka path diya hai
bo[0].appendChild(btn); // body ke andar dikhaya or indexing dena jaruri hai [0]

// btn.addEventListener('click' , ()=>{
//      console.log('clickeddddd')
//      let text = document.createElement('textarea')
//      text.textContent = ' chal nikal'
//      let displayOnPage = document.getElementsByTagName('p')
//      displayOnPage[0].appendChild(text)
//      console.log(text)
// });

let changeTheme = document.getElementsByTagName("body")[0];

btn.addEventListener("click", () => {
       if ( changeTheme[0] == 'white') {
            changeTheme[0].style.backgroundColor = "black";
       }else{
            changeTheme[0].style.backgroundColor = "white";
       }
  
});

//append()  => multiple chizo ka use karna hai to apeend
//appendChild()  => ek time par ek hi chiz ka use karna hai to apeendChild

// 2. display on webPage
// 1. get the button (we have -> btn)
// 2. attach the listner
