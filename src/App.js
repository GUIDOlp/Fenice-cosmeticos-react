import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ComponenteNavbar} from "./components/Navbar/Navbar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './components/Contacto/Contacto';
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <ComponenteNavbar/>
       <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categorias/:categoriasId' element={<ItemListContainer/>} />
      <Route path='/detalles/:detallesId' element={<ItemDetailContainer/>} />
      <Route path='/contacto' element={<Contacto/>} />
       </Routes>
       <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
