import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Data } from "./utils/Data";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [single, setSingle] = useState([]);
  // console.log(setSingle)

  // console.log(singleData)
  function singleCart(product) {
    setSingle([...single, product]);
  }

  return (
    <>
     <Navbar single={single}/>
        <Routes>
          <Route
            path="/"
            element={<Home
            products={Data}
            singleCart={singleCart} 
            single={single}
            setSingle={setSingle}

            />}
          ></Route>
          <Route path="/cart" element={<Cart products={single} />}></Route>
        </Routes>
      <Footer/>
    </>
  );
};

export default App;
