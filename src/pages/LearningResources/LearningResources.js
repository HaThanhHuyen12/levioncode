import styles from "../LearningResources/LearningResources.module.css";
import Learning from "../../image/learning.png";
import Podcast from "../../image/podcast.png";
import digitalFlashcards from "../../image/digital flashcards.png";
import Blog from "../../image/blog.png";
import socialNetwork from "../../image/social.png"
import ourCommunity from "../../image/community.png"
import eBooks from "../../image/eBook.png"
import LayoutWithHeader from "../../components/layoutWithHeader";
export default function LearningResources() {
  return (
    <div className={styles.learningResources}>
      <LayoutWithHeader>
      <div className={styles.contents}>
        <div className={styles.first}>
          <div className={styles.first_details}>
            <h1>Learning Resources</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              risus non venenatis dolor nisl tellus habitant aliquam. Dignissim
              tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim tellus,
              Tellus elementum enim faucibus morbi enim fusce:
            </p>
          </div>
          <div className={styles.first_images}>
            <img src={Learning} alt="learningResources-images"></img>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.second_first}>
            <a href="/podcast">
              <div className={styles.block}>
                <img src={Podcast} alt="learningResources-images"></img>
                <p>Podcast</p>
              </div>
            </a>
            <a href="/homePage">
              <div className={styles.block}>
                <img
                  src={digitalFlashcards}
                  alt="learningResources-images"
                ></img>
                <p>Digital Flashcards</p>
              </div>
            </a>
            <a href="/blog">
              <div className={styles.block}>
                <img src={Blog} alt="learningResources-images"></img>
                <p>Blog</p>
              </div>
            </a>
          </div>
          <div className={styles.second_second}>
            <a href="/socialNetwork">
            <div className={styles.block}>
              <img src={socialNetwork} alt="learningResources-images"></img>
              <p>Social Network</p>
            </div>
            </a>
            <a href="/homePage">
            <div className={styles.block}>
              <img src={ourCommunity} alt="learningResources-images"></img>
              <p>Our Community</p>
            </div>
            </a>
            <a href="/homePage">
            <div className={styles.block}>
              <img src={eBooks} alt="learningResources-images"></img>
              <p>eBooks </p>
            </div>
            </a>
          </div>
        </div>
      </div>
      </LayoutWithHeader>
    </div>
  );
}
