
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/cart' element={<Cart/>}  exact/>
      </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
