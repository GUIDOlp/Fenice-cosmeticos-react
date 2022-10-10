import "./ItemListContainer.css";
import React,{ useEffect, useState } from "react";
import { arrayProductos } from "../../baseDeDatos/baseDeDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer =()=> {
  
  const [prods, setProds]= useState([]);

  const {categoriasId} = useParams();

  useEffect(()=>{
    const obtenerProductos= new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(arrayProductos)
      }, 1000);
    }); 

    if (categoriasId) {
      obtenerProductos.then(response => setProds(response.filter(arrayProductos => 
        arrayProductos.categoria=== categoriasId)));  
    } else {
      obtenerProductos.then(response => setProds(response))
    }
  },[categoriasId])
  
  return(
      <>
      <div className="contenedorProductos">
          <ItemList prods={prods}/>
      </div>
      </>
    )
}