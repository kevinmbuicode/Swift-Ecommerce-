import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products'

//Routes
import { Routes, Route } from 'react-router-dom';
import Product from './components/ProductView';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
