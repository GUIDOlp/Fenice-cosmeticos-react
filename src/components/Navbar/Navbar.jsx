import logo from "../../img/logo-min.png"
import "./NavBar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from "../CartWidget/CartWidget";


export const ComponenteNavbar = ()=> {
    return(
       <>
       <nav>
      <img src={logo} className="logo" alt="logo"/>
      <ul className="menu">
        <li><a href="#">INICIO</a></li>
        <NavDropdown title="CATALOGO" id="navbarScrollingDropdown">
           <NavDropdown.Item href="#">PRODUCTOS FACIALES</NavDropdown.Item>
           <NavDropdown.Item href="#"> PRODUCTOS PARA EL CABELLO
           </NavDropdown.Item>        
         </NavDropdown>
        <li><a href="#">CONTACTO</a></li>
      </ul>
      <div>
      <CartWidget/> 
      </div>
      </nav>
      </>
    );
  }
 
















//   <Navbar bg="dark" expand="lg">
//   <Container fluid>
//     <Navbar.Brand href="#">
     
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav className=" nav me-auto my-2 my-lg-0"
//        style={{ maxHeight: '100px' }} navbarScroll>
//         <Nav.Link href="#" className="menuEnlaces">Inicio</Nav.Link>
//         <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
//           <NavDropdown.Item href="#">Productos Faciales</NavDropdown.Item>
//           <NavDropdown.Item href="#"> Productos para el Cabello
//           </NavDropdown.Item>        
//         </NavDropdown>
//         <Nav.Link href="#" className="menuEnlaces"> Contacto</Nav.Link>
//        </Nav>
//       <div>
      
//       </div>
//     </Navbar.Collapse> 
//   </Container>
  
// </Navbar>
// <CartWidget className="carrito"/> 