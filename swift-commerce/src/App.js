import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products'

//Routes
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App;
