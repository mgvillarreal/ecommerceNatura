import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import ItemDetailPage from './pages/ItemDetailPage/ItemDetailPage';
import FAQPage from './pages/FAQPage/FAQPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage/CartPage';

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar value={value}/>
            
            <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route exact path="/shop" element={<ShopPage/>}/>
              <Route exact path="/item/:id" element={<ItemDetailPage/>}/>
              <Route exact path="/faq" element={<FAQPage/>}/>
              <Route exact path="/contact" element={<ContactPage/>}/>
              <Route exact path="/cart" element={<CartPage/>}/>
              <Route exact path="/*" element={<ErrorPage/>}/>
            </Routes>

            <Footer></Footer>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
