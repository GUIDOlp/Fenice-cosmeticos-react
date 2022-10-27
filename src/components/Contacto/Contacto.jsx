import "./Contacto.css";
import swal from "sweetalert2";


export const Contacto= ()=> {

    const enviarForm= (event)=> {
    event.preventDefault();
    console.log("formulario enviado")
    swal.fire ({
       title: "Gracias por contactarnos.",
        icon: "success",
        width: 450,
        timer: 1500,
        toast: true,
    })
    }
    
    return(
        <>
        <div className="contenedorContacto">
        <p>Seguinos en <a href="https://www.instagram.com/fenice.coc/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuux4Xt2lkj904uFVJ3Y2MN4wpJ0C0nGchRXs4fqc&s"/> </a> </p>
        <h3><u>Contacto</u></h3>       
       <div className="d-flex justify-content-center">
       <div className="tarjeta-contacto col-sm-6 p-3">
       <form onSubmit={enviarForm} action="">
        <div className="mb-2">
        <label className="contacto" htmlFor="Nombre">Nombre</label>
        <br/>
        <input className="form-control" type="text" name="nombre" id="nombre" placeholder="nombre"/>
        </div>
        <div className="mb-2"> 
        <label className="contacto" htmlFor="Nombre">Apellido</label>
        <br/>
        <input className="form-control" type="text" name="apellido" id="apellido" placeholder="apellido"/>
        </div>
        <div className="mb-2"> 
        <label className="contacto" htmlFor="Nombre">Email</label>
        <br/>
        <input className="form-control" type="text" name="email" id="email" placeholder="email"/>
        </div>
        <div className="mb-2">
        <label className="contacto">Mensaje</label>
        <br/>
        <textarea className="form-control" name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
        </div>
        <input className="botonEnviar-contacto" type="submit" value="Enviar formulario"></input>
       </form>
       </div>
       </div>
        </div>
        </>
    )
}