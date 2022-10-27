import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import { ItemCart } from "../ItemCart/ItemCart";
import "./Cart.css";

export const Cart= () => {
    
    const {cart, precioTotal}= useCartContext();
    
    const order= {
        buyer: {
            name: "Guido",
            email: "eliggiguido@gmail.com",
            phone: 325433,
            adress: "asdd"
        },
        items: cart.map(product => ({id: product.id, titulo: product.titulo,
        precio: product.precio, quantify: product.quantify})),
        total: precioTotal(),
    }


    const handleClick= ()=> {
        const db= getFirestore();
        const ordersCollection= collection(db, "ordenes");
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if(cart.length=== 0) {
        return(
            <>
            <p className="contenido-cart">No hay elementos en el carrito</p>
            <div className="contenedor-cart">
            <Link className="comprar" to="/">Click aqui</Link>
            <p>si desea redirigirse al sitio de compras</p>
            </div>
            </>
        )
    }
    return(
        <>
             {
            cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
            }  
           <p className="total">Total: ${precioTotal()}</p>
           <button onClick={handleClick} className="boton-compra">Emitir Compra</button>     
      </>
    )
}