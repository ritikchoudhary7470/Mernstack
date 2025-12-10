console.log("pattern solve Quenstion");

/*  
   pattern 1
  *
  *  *  
  *  *  *
  *  *  *  *  
 
   */

function pattern1(n) {
  for (let row = 1; row <= n; row++) {
    //for every row , run the col
    let output = ""; // start with emty row
    for (let col = 1; col <= row; col++) {
      output += "* "; //append  start
    }
    console.log(output); // Print entire row at once
  }
}
//pattern1(4)

/*  
   pattern2 
  
  *  *  *  *  
  *  *  *  *  
  *  *  *  *  
  *  *  *  *  
 
   */

function pattern2(n) {
  for (let row = 1; row <= n; row++) {
    //for every row , run the col
    let output = ""; // start with emty row
    for (let col = 1; col <= n; col++) {
      output += "* "; //append  start
    }
    console.log(output); // Print entire row at once
  }
}
//pattern2(4)

/*  
   pattern3
  
  *  *  *  *  
  *  *  *    
  *  *    
  *    
 
   */

function pattern3(n) {
  for (let row = 1; row <= n; row++) {
    //for every row , run the col
    let output = ""; // start with emty row
    for (let col = 1; col <= n - row + 1; col++) {
      output += "* "; //append  start
    }
    console.log(output); // Print entire row at once
  }
}
//pattern3(4)

/*  
   pattern 4
  1
  1 2  
  1 2 3
  1 2 3 4 
   */

function pattern4(n) {
  for (let row = 1; row <= n; row++) {
    let output = "";
    for (let col = 1; col <= row; col++) {
      output += col + " ";
    }
    console.log(output);
  }
}
//pattern4(5)

/*  
   pattern5
  *
  *  *  
  *  *  *
  *  *  *  *
  *  *  *    
  *  *    
  *    
   */

function pattern5(n) {
  for (let row = 1; row <= 2 * n; row++) {
    //console.log(row)
    let output = "";

    if (row > n) {
      for (let col = 1; col <= row; col++) {
        output += "*";
      }
    }
    console.log(output);
  }
}
//pattern5(4)

