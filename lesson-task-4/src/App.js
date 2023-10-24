import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/addproduct' element={<AddProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
