import React from 'react'
import Navbar from './components/Navbar'
import {Switch,Route,Link} from 'react-router-dom';
import SignUp from './components/SignUp'

// function Login() {
//   return <h1>login</h1>;
// }

const App = () => {
  return (
    <div>
      <Navbar/>
       <Switch>
       <Route path='/signup' Component={SignUp}/>
       </Switch>
    </div>
  )
}

export default App
