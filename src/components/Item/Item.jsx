import "./Item.css";
import { Link } from "react-router-dom";

export const Item= ({info})=> {
   
    return(
        <>
        <div className="contenedor-cards">
         <div className="card">
        <Link className="link" to={`/detalles/${info.id}`}>
        <h4 className="image-titulo">{info.titulo}</h4>
        <img className="image" src= {info.pictureUrl} alt={info.titulo} />
        <p className="image-precio">${info.precio}</p>
        <button className="verDetalles">Ver detalles</button>
        </Link>
        </div>
        </div>
        </>
    )
}