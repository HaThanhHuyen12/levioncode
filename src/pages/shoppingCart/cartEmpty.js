
import styles from "../shoppingCart/cartEmpty.module.css";
import sadFace from "../../image/sadface.png";
import { Link } from "react-router-dom";

function CartEmpty(){
    return (
        <div>
            <div className={styles.cart}>
                <h1>Shopping Cart</h1>
                <img src={sadFace} alt="img"></img>
                <p>Your cart is empty. Keep Going to find a course!</p>
                <Link to='/courseList'><button>Go to Courses</button></Link>
            </div>
        </div>
    );
}
export default CartEmpty;