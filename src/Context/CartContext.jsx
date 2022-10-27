import React, {useState, useContext} from "react"
const CartContext= React.createContext([]);

export const useCartContext= () => useContext(CartContext);

export const CartProvider= ({children})=> {
    const [cart, setCart]= useState([]);
    
    const addItem= (data, quantify) => {
        let newCart;
        let product= cart.find(product => product.id=== data.id);
        if(product) {
            product.quantify+= quantify
            newCart= [...cart];
        } else {
            product= {...data, quantify: quantify};
            newCart= [...cart, product];
        }
        setCart(newCart)
    }
 console.log("carrito", cart)

   
 
 const precioTotal= ()=> {
        return cart.reduce((prev, act) => prev + act.quantify * act.precio, 0 );
    }

    const productosTotales= ()=> cart.reduce((acumulador, prodAct) => acumulador + prodAct.quantify, 0 );
    

    const clearCart= ()=> setCart([]);

    const isinCart= (id) => cart.find(producto => producto.id=== id)
   ? true : false;

   const removerItem= (id) => setCart(cart.filter(producto => producto.id !==id));
    
    return(
        <>
        <CartContext.Provider value= {{
        clearCart, 
        isinCart, 
        removerItem, 
        addItem, 
        precioTotal, 
        productosTotales,
        cart
        }}>
        {children}
        </CartContext.Provider>
        </>
    )
}