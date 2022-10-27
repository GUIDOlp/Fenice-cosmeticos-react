import { useCartContext } from "../../Context/CartContext";
import "./ItemCart.css";

export const ItemCart= ({producto}) => {
    
 const{removerItem} = useCartContext();  
    
    return(
        <>
        <div className="itemCart">
         <img src= {producto.pictureUrl} alt={producto.titulo} />
        <div className="cart-descripcion">
        <p>Titulo: {producto.titulo}</p>
        <p>Cantidad: {producto.quantify}</p>
        <p>Precio: $ {producto.precio}</p>
        <p>Subtotal: ${producto.quantify * producto.precio}</p>
        <button onClick={()=> removerItem(producto.id)}>Eliminar</button>
        </div>
        </div>
        </>
    )
}