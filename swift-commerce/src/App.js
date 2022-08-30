import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products'

//Routes
import { Routes, Route } from 'react-router-dom';
import Product from './components/ProductView';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
