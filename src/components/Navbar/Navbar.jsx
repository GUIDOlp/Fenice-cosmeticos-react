import logo from "../../img/logo-min.png"
import "./NavBar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";


export const ComponenteNavbar = ()=> {
    

  return(
       <>
       <nav>
      <img src={logo} className="logo" alt="logo"/>
      <ul className="menu">
        <li><NavLink className= "nav-link" to= '/' >INICIO</NavLink></li>
        <NavDropdown title="CATALOGO" id="navbarScrollingDropdown">
         <NavDropdown.Item>
          <NavLink className= "nav-link" to= 'categoria/productosfaciales'> PRODUCTOS FACIALES</NavLink> </NavDropdown.Item>
          <NavDropdown.Item>
         <NavLink className= "nav-link" to= 'categoria/productosparaelcabello'>PRODUCTOS PARA EL CABELLO</NavLink> 
         </NavDropdown.Item>        
         </NavDropdown>
        <li> <NavLink className="nav-link" to= '/contacto'> CONTACTO</NavLink></li>
      </ul>
      <div>
        <li>
          <NavLink className= "nav-link" to= 'cart'>
          <CartWidget /> 
          </NavLink>
        </li>
    
      </div>
      </nav>
      </>
    );
  }
 

