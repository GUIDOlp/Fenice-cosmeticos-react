import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { useCartContext } from "../../Context/CartContext"
import { ItemCart } from "../ItemCart/ItemCart";
import "./Cart.css";
import { UseForm } from "../UseForm/UseForm";

export const Cart= () => {
const {cart, precioTotal}= useCartContext();
    
// utilizamos las variables de useForm para utilizar en el formulario
const initialForm= {
    name: "",
    surname: "",
    email: "",
    telefono: "",
};
const validateForm= (form)=> {
const error= {};
//  declaramos expresiones regulares para la validacion del formulario
const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
const regexTelefono= /^[+]*[(]?[0-9-\s]+$/gm;

//  validamos que los campos de los inputs no esten vacios
  if(!form.name.trim()) {
  error.name= "El campo Nombre es requerido";
  } else if(!regexName.test(form.name.trim())) {
  error.name= "El campo Nombre solo acepta letras y espacios en blanco";
  }

  if(!form.surname.trim()) {
  error.surname= "El campo Apellido es requerido";
  } else if(!regexName.test(form.surname.trim())) {
  error.surname= "El campo Apellido solo acepta letras y espacios en blanco";
  }

  if(!form.email.trim()) {
  error.email= "El campo Email es requerido";
  } else if(!regexEmail.test(form.email.trim())) {
  error.email= "El campo Email es incorrecto";
  }

  if(!form.telefono.trim()) {
  error.telefono= "El campo Telefono es requerido";
  }else if(!regexTelefono.test(form.telefono.trim())) {
  error.telefono= "El campo Telefono es incorrecto";
  }

return error;
};

// estilos a los a handleBlur
const styles= {
  fontWeight: "bold",
  color: "red",
};

const{
  form, 
  error, 
  handleChange, 
  handleBlur,
}= UseForm(initialForm, validateForm);
    
// aqui generamos una coleccion nueva para las ordenes
const order= {
  buyer: {
    name: "Guido",
    email: "eliggiguido@gmail.com",
    phone: 325433,
    adress: "asdd"
},
// y lo devolvemos en un nuevo array
items: cart.map(product => ({id: product.id, titulo: product.titulo,
precio: product.precio, quantify: product.quantify})),
total: precioTotal(),
}

// generamos un detalle con las ordenes de compras y lo agregamos a firestore
const handleClick= (e)=> {
   const db= getFirestore();
   const ordersCollection= collection(db, "ordenes");
   addDoc(ordersCollection, order)
  .then(({id}) => console.log(id))
   e.preventDefault();
//  hacemos mas validaciones para el campo de los inputs
const login= ()=> {
    if(form.name.length < 4 || form.surname.length < 4 || !form.email.includes(("@"))
    || form.telefono.length < 5)
    swal.fire ({
     title: "Error al completar los datos de la compra",
     icon: "error",
     width: 450,
     timer: 1500,
     toast: true,
    }); 
}
swal.fire ({
    title: "Gracias por su compra!!.",
    text: "Su numero de ID ya fue registrado. En instantes recibira un email con el detalle del producto",
    icon: "success",
    width: 450,
    timer: 3000,
    toast: true,
})
login();
};
// hacemos validaciones en el caso que no haya elementos en el carrito
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
};

return(
        <>
        <form className="contenedor-compra">
             {
            cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
            }  
        <div className="contacto-compra">
        <div className="mb-2">
        <label className="contacto" htmlFor="Nombre">Nombre</label>
        <br/>
        <input className="form-control" type="text" name="name" placeholder="nombre"
        onBlur={handleBlur} 
        onChange={handleChange} 
        value={form.name} 
        required/>
        {error.name && <p style={styles}>{error.name}</p>}
        </div>
        <div className="mb-2"> 
        <label className="contacto" htmlFor="Apellido">Apellido</label>
        <br/>
        <input className="form-control" type="text" name="surname" placeholder="apellido"
        onBlur={handleBlur} 
        onChange={handleChange} 
        value={form.surname} 
        required/>
        {error.surname && <p style={styles}>{error.surname}</p>}
        </div>
        <div className="mb-2"> 
        <label className="contacto" htmlFor="Email">Email</label>
        <br/>
        <input className="form-control" type="text" name="email" placeholder="email"
        onBlur={handleBlur} 
        onChange={handleChange} 
        value={form.email} 
        required/>
        {error.email && <p style={styles}>{error.email}</p>}
        </div>
        <div className="mb-2">
        <label className="contacto">Telefono</label>
        <br/>
        <input className="form-control" type="text" name="telefono" placeholder="telefono"
        onBlur={handleBlur} 
        onChange={handleChange} 
        value={form.telefono} 
        required/>
        {error.telefono && <p style={styles}>{error.telefono}</p>}
        </div>
        <p className="medios-pago">Medios de pago:</p>
        <span className="mediosDepago">
        <div className="pago-efectivo">
        <label className="mediosDepago" htmlFor="">Efectivo  
        <input id ="pago" type="radio" name= "pago" value="efectivo"/></label>
        </div>
        <div className="pago-debito">
        <label className="mediosDepago" htmlFor="">Tarjeta de debito 
        <input id ="pago" type="radio" name="pago" value="tarjeta de debito"/></label>
        </div>
        </span>
        <div className="pago-credito">
        <label className="credito" htmlFor="">Tarjeta de credito  
        <input id ="pago" type="radio" name="pago" value="tarjeta de credito"/></label>
        </div>
        <p className="total">Total: ${precioTotal()}</p>
           <button onClick={handleClick} className="boton-compra">Emitir Compra</button>     
       </div> 
       </form>
      </>
    )
}