import "./ItemList.css";
import { Item } from "../Item/Item";
import React from "react";

export const ItemList= ({ prods= [] }) => {
    return(
       prods.map(arrayProductos => <Item key={arrayProductos.id} item={arrayProductos}/>)
    )
}