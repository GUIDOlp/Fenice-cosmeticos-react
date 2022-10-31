import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ComponenteNavbar} from "./components/Navbar/Navbar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './components/Contacto/Contacto';
import {Footer} from "./components/Footer/Footer";
import { CartProvider } from './Context/CartContext';
import { Cart } from './components/Cart/Cart';


function App() {
return (
  <BrowserRouter>
   <div className="App">
    <CartProvider>
    <ComponenteNavbar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
    <Route path='/detalles/:detallesId' element={<ItemDetailContainer/>} />
    <Route path='/contacto' element={<Contacto/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>
    </CartProvider>
    <Footer/>
  </div>
  </BrowserRouter>
  );
}

export default App;
