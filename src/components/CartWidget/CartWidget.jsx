import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./CartWidget.css";

export const CartWidget = () => {
    return (
        <>
        <div className='contenedorCarrito'>
        <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
        <span>0</span>
        </div>
        </>
    )
}