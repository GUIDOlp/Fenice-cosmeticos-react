import "./Item.css";
import { Link } from "react-router-dom";

export const Item= ({item})=> {
    return(
        <>
        <div className="contenedor-cards">
         <div className="card">
        <Link className="link" to={`/detalles/${item.id}`}>
        <h4 className="image-titulo">{item.titulo}</h4>
        <img className="image" src= {item.pictureUrl} alt={item.titulo} />
        <p className="image-precio">${item.precio}</p>
        <button className="verDetalles">Ver detalles</button>
        </Link>
        </div>
        </div>
        </>
    )
}