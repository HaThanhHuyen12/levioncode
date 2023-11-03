import styles from "../shoppingCart/cartFail.module.css";
import cryFace from "../../image/cry.png";
import { Link } from "react-router-dom";
import LayoutWithHeader from "../../components/layoutWithHeader";
function cartFail(){
    return (
        <div>
            <LayoutWithHeader >
            <div className={styles.cart}>
                <h1>Shopping Cart</h1>
                <img src={cryFace} alt="img"></img>
                <h2>Something Went Wrong</h2>
                <p>Let’s Try Again</p>
                <Link to='/coursesList'><button>Back to Check Out</button></Link>
            </div>
            </LayoutWithHeader>
        </div>
    );
}
export default cartFail;