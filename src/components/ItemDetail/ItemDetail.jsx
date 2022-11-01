import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { datosFirebase } from "../../Utils/Firebase";

export const ItemDetail= ({data}) => {
   
const[descripcion, setDescripcion]= useState([]);

const {detallesId}= useParams();

const[addCart, setAddCart]= useState(false);
    
const{addItem}= useCartContext();

const onAdd= (quantify)=> {
    setAddCart(true);
    addItem(data, quantify)
    }        

useEffect (()=> {
 const description= async()=> {
 const ref= doc(datosFirebase, "productos", detallesId);
 const res= await getDoc(ref);
 console.log(res);
 const descriptionProduct= {...res.data(), id: res.id}
 setDescripcion(descriptionProduct);    
}
 description();
}, [detallesId])

console.log(descripcion)
    
    return(
        <>
        <div className="contenedorGeneral">
        <div className="card-descripcion">
        <h3 className="card-titulo">Descripcion del Producto</h3>
        <p>{data.descripcion}.</p>
        </div>
        <div className="card"> 
        <h4 className="detalle-titulo">{data.titulo}</h4>
        <img className="image-detalle" src= {data.pictureUrl} alt={data.titulo} />
        <p className="precio-detalle">${data.precio}</p>
        {  addCart
           ? <Link className="terminarCompra" to='/Cart'>Terminar Compra</Link>
            : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
        </div>
        </div>
        </>
    )
}