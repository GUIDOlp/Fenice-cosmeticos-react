import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return (
        <>
        <div className='contenedorCarrito'>
        <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
        <span>3</span>
        </div>
        </>
    )
}