import styles from "../LevelTest/Test.module.css";
import { Link } from "react-router-dom";
import test from "../../image/test.png";
import LayoutWithHeader from "../../components/layoutWithHeader";

function Test() {
  return (
    <div>
      <LayoutWithHeader>
        <div className={styles.test}>
          <div className={styles.testBody}>
            <div className={styles.testContent}>
              <img src={test} alt="img"></img>
              <h1 className={styles.testTitle}>
                Welcome to your free Vietnamese level test
              </h1>
              <p className={styles.testContent}>
                How well do you know Vietnamese? We suggest you complete the
                following test to self-assess your level in Vietnamese, to pick
                the right Vietnamese course for you, or just to pass the time.
              </p>
              <Link to="/course">
                <button className={styles.testButton}>Start the Test</button>
              </Link>
            </div>
          </div>
        </div>
      </LayoutWithHeader>
    </div>
  );
}
export default Test;
