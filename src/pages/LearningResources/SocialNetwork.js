import Footer from "../Footer/Footer";
import HeaderProfile from "../Header/HeaderProfile";
import styles from "../LearningResources/SocialNetwork.module.css";
import socialNetwork from "../../image/socialNetwork.png";
import Facebook from "../../image/facebook (2) 1.png";
import Instagram from "../../image/instagram (1) 1.png";
import Youtube from "../../image/youtube 1.png";
import Tiktok from "../../image/tik-tok 1.png";
export default function SocialNetwork() {
  return (
    <div className={styles.socialNetwork}>
      <HeaderProfile />
      <div className={styles.contents}>
        <div className={styles.first}>
          <div className={styles.first_details}>
            <h1>Social Network</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              risus non venenatis dolor nisl tellus habitant aliquam. Dignissim
              tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim tellus,
              Tellus elementum enim faucibus morbi enim fusce:
            </p>
          </div>
          <div className={styles.first_images}>
            <img src={socialNetwork} alt="learningResources-images"></img>
          </div>
        </div>
        <div className={styles.second}>
          <h1>Let’s Join Our Social Network</h1>
          <div className={styles.second_first}>
            <a href="/homePage">
              <div className={styles.block}>
                <img src={Facebook} alt="learningResources-images"></img>
                <p>Facebook</p>
              </div>
            </a>
            <a href="/homePage">
              <div className={styles.block}>
                <img src={Instagram} alt="learningResources-images"></img>
                <p>Instagram</p>
              </div>
            </a>
            <a href="/homePage">
              <div className={styles.block}>
                <img src={Youtube} alt="learningResources-images"></img>
                <p>Youtube</p>
              </div>
            </a>
            <a href="/homePage">
              <div className={styles.block}>
                <img src={Tiktok} alt="learningResources-images"></img>
                <p>Tiktok</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
