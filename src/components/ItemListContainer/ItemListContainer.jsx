import "./ItemListContainer.css";

export const ItemListContainer =({greeting})=> {
    return(
      <>
      <div className="contenedorProductos">
          {greeting}
      </div>
      </>
    )
}