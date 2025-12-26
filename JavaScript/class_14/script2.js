console.log("hdfghdhjfs");

let url = "https://fakestoreapi.com/products";
function callBackHell(method, url, next) {
  const ob1 = new XMLHttpRequest();     // purane time par kuch tha nahi jab XMLHttpka use hota 
  ob1.responseType = "json";     // hame data api se json ke form mai chahiye
  ob1.open(method, url);         // object ke ander ki method ko open karne ke liye or url ko open karne ke liye 
  ob1.send();                 // clent se data server pe bhejne ke liye hai
  ob1.onload = () => {
    // console.log(obj1.response);
    next(ob1.response);
  };
}
callBackHell("GET", "https://fakestoreapi.com/products", (data) => {
  console.log("one", data);

  callBackHell("GET", `${url}/category/${data[0].category}`, (data) => {
    console.log("two", data);

    callBackHell("GET", `${url}/${data[0].id}`, (data) => {
      console.log("three", data);

      callBackHell("GET", `${url}/category/${data.category}`, (data) => {
        console.log("four", data);

        callBackHell("GET", `${url}/${data[1].id}`, (data) => {
          console.log("five", data);

          callBackHell("GET", `${url}/category/${data.category}`, (data) => {
            console.log("six", data);
            
            callBackHell("GET", `${url}/${data[2].id}`, (data) => {
              console.log("seven", data);

              callBackHell(
                "GET",`${url}/category/${data.category}`,(data) => {
                  console.log("eight", data);

                   callBackHell("GET", `${url}/${data[0]}`, (data) => {
              console.log("nine", data);
                  });
                });
            });
          });
        });
      });
    });
  });
});
