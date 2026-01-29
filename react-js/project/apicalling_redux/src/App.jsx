import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards.jsx';
import CardDetails from './components/CardDetails.jsx';

const App = () => {
  return (
    <div>
    <Header/> 

      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/cart' element={<CardDetails/>} />
      </Routes>
    </div>
  )
}

export default App
