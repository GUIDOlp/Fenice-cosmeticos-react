import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail= ({item}) => {
    const onAdd= (cantidad)=> {
        console.log(`compraste ${cantidad} unidades`)
          }  
    
    
    return(
        <>
        <div className="contenedorGeneral">
        <div className="card-descripcion">
        <h3 className="card-titulo">Descripcion del Producto</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, harum laudantium recusandae nulla mollitia magnam at adipisci excepturi libero, debitis eum architecto illo fugiat perspiciatis. Ipsa nesciunt corporis odit.</p>
        </div>
        <div className="card"> 
            <h4 className="detalle-titulo">{item.titulo}</h4>
            <img className="image-detalle" src= {item.pictureUrl} alt={item.titulo} />
            <p className="precio-detalle">${item.precio}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
        </div>
        </>
    )
}