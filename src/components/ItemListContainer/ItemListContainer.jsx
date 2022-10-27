import "./ItemListContainer.css";
import React,{ useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { datosFirebase } from "../../Utils/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ClipLoader from "react-spinners/ClipLoader";

export const ItemListContainer =()=> {
  
  const [data, setData]= useState([]);

  const[loading, setLoading]= useState(true);

  const { categoriaId } = useParams();
  console.log(useParams())

// obtener documentos aplicando filtros en la base de datos
useEffect (()=> {
const queryRef= categoriaId ? query(collection(datosFirebase, "productos"), where("categoria", "==", categoriaId)) : collection(datosFirebase, "productos");
getDocs(queryRef).then((res) => {
  const results= res.docs;
  const docs= results.map(doc => {
    return{
      ...doc.data(),
      id:doc.id
    }
  })
  setData(docs);
  setLoading(true);
  setTimeout(() => {
    setLoading(false)
  }, 1000);
});

},[categoriaId])

return(
      <>
      <div className="contenedorProductos">
        {
          loading?
          <ClipLoader className="load" color={"#D0021B"} loading={loading} size={70}/>
          :
          <ItemList data={data}/>
        }
      </div>
      </>
    )
}

  