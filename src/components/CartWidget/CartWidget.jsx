import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext';
import "./CartWidget.css";


export const CartWidget = () => {    
    
    const{productosTotales}= useCartContext();

    return (
        <>
        <div className='contenedorCarrito'>
        <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
        <span className='number-carrito'>{productosTotales() || ''}</span>
        </div>
        </>
    )
}