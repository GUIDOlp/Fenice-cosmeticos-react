import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc  } from "firebase/firestore";
import { datosFirebase } from "../../Utils/Firebase";

export const ItemDetailContainer= () => {
    const[data, setData]= useState([]);
    
    const { detallesId } = useParams();

    // obtener un documento de la coleccion de productos
    useEffect(()=>{
        const getProducto= async()=> {
        const queryRef= doc(datosFirebase, "productos", detallesId);
        const response= await getDoc(queryRef);
        console.log(response)
        const newDoc= {...response.data(), id: response.id}
        setData(newDoc);
        }
        getProducto();
      },[detallesId])

     
    return(
        <>
        <ItemDetail data={data}/>
        </>
    )
}