import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react";
import { arrayProductos } from "../../baseDeDatos/baseDeDatos";
import { useParams } from "react-router-dom";



export const ItemDetailContainer= () => {
    const[item, setItem]= useState([]);
    
    const {detallesId} = useParams();

    useEffect(()=>{
        const detallesProductos= new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(arrayProductos)
          }, 1000);
    }); detallesProductos.then(response => setItem(response.find(arrayProductos => arrayProductos.id=== parseInt(detallesId))));
      },[])

     
    return(
        <>
        <ItemDetail item={item}/>
        </>
    )
}