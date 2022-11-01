import React, { useEffect ,useState} from "react";
import "./ItemCount.css"



export const ItemCount= ({initial, stock, onAdd})=> {
const [contador, setContador]= useState(parseInt(initial));
const restar= ()=> {
    setContador(contador-1);
}
const sumar= ()=> {
    setContador(contador+1);
}

useEffect (()=>{
 setContador(parseInt(initial))
 console.log("useEffect called");
},[initial])
    return(
        <>
      <div className="contador">
        <div className="contenedorBotones">
          <button disabled={contador <=1} onClick={restar}>-</button>
          <span>{contador}</span>
          <button disabled={contador >= stock} onClick={sumar}>+</button>
          </div>
          <div>
          <button disabled={stock <=0} onClick={()=> onAdd(contador)} className="agregarCarrito">Agregar al carrito</button>
          </div>
          </div>
        </>
    )
}
