import styles from "../Podcast/Podcast.module.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React, { useState } from "react";
import Back from "../../components/Back";
import FilterCategoris from "../Blog/categoris";
import { BiSearch } from "react-icons/bi";
import podcast from "../../image/podcastimg.png";
import smiler from "../../image/smiler.png";
import DataJson from "../../fakeData/podcast.json";
import Sporty from "../../components/Sporty"
import PlayDot from "../../components/PlayDot"
function Podcast() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredPodcasts = DataJson.filter((podcast) => {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      const normalizedName = podcast.name.toLowerCase();
      return normalizedName.includes(normalizedSearchTerm);
    });
  
  return (
    <div className={styles.PodcastBody}>
      <Header />
      <div className={styles.firstPodcast}>
        <div className={styles.first_details}>
          <h1>True Stories</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus
            non venenatis dolor nisl tellus habitant aliquam. Dignissim tellus,
            eu eu sed malesuada pharetra aliquam eu.Dignissim tellus, Tellus
            elementum enim faucibus morbi enim fusce:
          </p>
        </div>
        <div className={styles.first_images}>
          <img src={podcast} alt="blog-images"></img>
        </div>
      </div>
      <div className={styles.backBlock}>
        <Back />
        <Link to="/blog">
          <p>Back</p>
        </Link>
      </div>
      <div className={styles.PodcastBodyDetail}>
        <div className={styles.categoryOfBlog}>
          <div className={styles.templateContainerBlog}>
            <div className={styles.searchInput_ContainerBlog}>
              <BiSearch className={styles.searchIconBlog} />
              <input
                id={styles.searchInputBlog}
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className={styles.postAndcategories}>
            <FilterCategoris />
          </div>
        </div>
        <div className={styles.PodcastDetail}>
          <div className={styles.PodcastBlock}>
            {filteredPodcasts.map((podcast) => (
              <div className={styles.listPodcast}>
                <img src={smiler} alt="podcast-images"></img>

                <div className={styles.listPodcastDetail}>
                <div className={styles.listPodcastIcon}>
                    <Sporty/>
                </div>
                  <h1>{podcast.name}</h1>
                  <p>{podcast.detail}</p>
                  <button>Following</button>
                  <div className={styles.listPodcastIcon}>
                    <PlayDot/>
                </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Podcast;
