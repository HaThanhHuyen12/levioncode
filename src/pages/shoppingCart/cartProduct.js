import styles from "../shoppingCart/shoppingCart.module.css";
import coursesMan from "../../image/courses-man.png";
export function CartProduct({ prop }) {
  return (
    <div className={styles.courses}>
      <div className={styles.course}>
        <img src={coursesMan} alt="imgCourse"></img>
        <div className={styles.courseDetail}>
          <h6>{prop.name}</h6>
          <button>All Levels</button>
          <button>Speaking Skill</button>
        </div>
        <div className={styles.fee}>
          <h6>${prop.price}</h6>
          <p>$84.99</p>
        </div>
        <p>Remove</p>
      </div>
    </div>
  );
}