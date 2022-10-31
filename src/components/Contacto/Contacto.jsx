import "./Contacto.css";
import swal from "sweetalert2";
import { datosFirebase } from "../../Utils/Firebase";
import { collection, addDoc} from "firebase/firestore";
import { useState } from "react";

export const Contacto= ()=> {
// creamos una variable para almacenar los datos en firebase
const initialForm= {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: ""
}

const[usuario, setUsuario]= useState(initialForm);
// creamos una funcion para capturar los inputs del formulario
const capturar= (e)=> {
    const{name, value}= e.target;
    setUsuario({...usuario,[name]: value})
}
// creamos alerta cuando el usuario hace click en enviar
const enviarForm= (event)=> {
    event.preventDefault();
    console.log(usuario)
    // guardamos los datos registrados por el usuario en nuestra base de datos de firebase
    try {
        addDoc(collection(datosFirebase, "usuarios"),{
        ...usuario
        })
    } catch (error) {
}
    setUsuario({...initialForm});
// creamos variables para controlar el estado de los inputs del formulario
    const name= usuario.nombre;
    const surname= usuario.apellido;
    const mail= usuario.email;
    const message= usuario.mensaje;
    
// y aqui hacemos las validaciones
const login= (name, surname, mail, message) => {
     if(name.length < 4 || surname.length < 4 || !mail.includes(("@")) 
     || message.length < 15)
      swal.fire ({
       title: "Error al completar los datos del formulario",
       icon: "error",
       width: 450,
       timer: 1500,
       toast: true,
        })
};
//  si todo esta bien, devolvemos un alerta al usuario
swal.fire ({
        title: "Gracias por contactarnos.",
        icon: "success",
        width: 450,
        timer: 1500,
        toast: true,
})

login(name, surname, mail, message);
    
};

return(
        <>
        <div className="contenedorContacto">
        <p>Seguinos en <a href="https://www.instagram.com/fenice.coc/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuux4Xt2lkj904uFVJ3Y2MN4wpJ0C0nGchRXs4fqc&s" alt="imagen-instagram"/></a> </p>
        <h3><u>Contacto</u></h3>       
       <div className="d-flex justify-content-center">
       <div className="tarjeta-contacto col-sm-6 p-3">
       <form onSubmit={enviarForm} action="">
        <div className="mb-2">
        <label className="contacto" htmlFor="Nombre">Nombre</label>
        <br/>
        <input className="form-control" type="text" name="nombre" id="nombre" placeholder="nombre" 
        onChange={capturar} 
        value={usuario.nombre}
        required/>
        </div>
        <div className="mb-2"> 
        <label className="contacto" htmlFor="Nombre">Apellido</label>
        <br/>
        <input className="form-control" type="text" name="apellido" id="apellido" placeholder="apellido" 
        onChange={capturar} 
        value={usuario.apellido}
        required/>
        </div>
        <div className="mb-2"> 
        <label className="contacto" htmlFor="Nombre">Email</label>
        <br/>
        <input className="form-control" type="text" name="email" id="email" placeholder="email" 
        onChange={capturar} 
        value={usuario.email}
        required/>
        </div>
        <div className="mb-2">
        <label className="contacto">Mensaje</label>
        <br/>
        <textarea className="form-control" name="mensaje" id="mensaje" cols="30" rows="10"
        onChange={capturar} 
        value={usuario.mensaje}
        required></textarea>
        </div>
        <input className="botonEnviar-contacto" type="submit" value="Enviar formulario"></input>
       </form>
       </div>
       </div>
        </div>
        </>
    )
}