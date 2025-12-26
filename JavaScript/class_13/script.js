// console.log('hrygcg');

// CallBack Hell  => ek function ki calling per dusra function call karna fir ese hi function ki calling par another function call karna use callback hell kahte hai
// pyramid of DOM 
// esme Horizontly Scolling hoti hai or coding mai scolling Verticali best hai

// let url = "https://jsonplaceholder.typicode.com/posts"
// function apiCalling(method,url) {
//     const obj1 = new XMLHttpRequest();
//     obj1.response = 'json';
//     obj1.open(method,url);
//     obj1.onload = ()=>{
//     console.log(obj1.response);

//     }
//     obj1.send();
//     // console.log(obj1);

// }
// apiCalling("GET", url )

function multuApi(method, url, printDataApi) {
  const obj1 = new XMLHttpRequest();
  obj1.open(method, url);
  obj1.responseType = "json";
  obj1.send();
  obj1.onload = () => {
    // console.log(obj1.response);
    printDataApi(obj1.response);
  };

  // console.log(obj1);
}
multuApi("GET", `https://jsonplaceholder.typicode.com/posts`, (data) => {
  console.log(" one", data);

  multuApi(
    "GET",
    `https://jsonplaceholder.typicode.com/posts/${data[5].id}`,
    (data) => {
      console.log("two ", data);

      multuApi(
        "GET",
        `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
        (data) => {
          console.log(" three ", data);

          multuApi(
            "GET",
            `https://jsonplaceholder.typicode.com/posts/${data[0].postId}`,
            (data) => {
              console.log(" four ", data);
              multuApi(
                "GET",
                `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                (data) => {
                  console.log(" five ", data);
                  multuApi(
                    "GET",
                    `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                    (data) => {
                      console.log(" six ", data);
                      multuApi(
                        "GET",
                        `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                        (data) => {
                          console.log(" seven ", data);
                          multuApi(
                            "GET",
                            `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                            (data) => {
                              console.log(" eight ", data);
                              multuApi(
                                "GET",
                                `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                                (data) => {
                                  console.log(" nime ", data);
                                  multuApi(
                                    "GET",
                                    `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                                    (data) => {
                                      console.log(" ten ", data);
                                      multuApi(
                                        "GET",
                                        `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                                        (data) => {
                                          console.log(" eleven ", data);
                                          multuApi(
                                            "GET",
                                            `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                                            (data) => {
                                              console.log(" twelwe ", data);
                                              multuApi(
                                                "GET",
                                                `https://jsonplaceholder.typicode.com/posts/${data.id}`,
                                                (data) => {
                                                  console.log(" thirteen ", data);
                                                }
                                              );
                                            }
                                          );
                                        }
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});
