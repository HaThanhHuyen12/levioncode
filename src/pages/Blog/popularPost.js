import React, { useState } from "react";
import styles from "../Blog/blog.module.css";
import JsonData from "../../fakeData/postData.json";
import imageblog from "../../image/imageblog.png";
import { BiSearch } from "react-icons/bi";
function FilterPost() {
  const coursesPerPage = 3;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * coursesPerPage;
  const [SearchBlog, setSearchBlog] = useState("");
  const filteredBlog = JsonData.filter((val) => {
    if (SearchBlog === "") {
      return true;
    } else if (
      val.title &&
      val.title.toLowerCase().includes(SearchBlog.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const displayBlog = filteredBlog.slice(
    pagesVisited,
    pagesVisited + coursesPerPage
  );
  return (
    <div className={styles.popularPost}>
      <div className={styles.templateContainerBlog}>
        <div className={styles.searchInput_ContainerBlog}>
          <BiSearch className={styles.searchIconBlog} />
          <input
            id={styles.searchInputBlog}
            type="text"
            placeholder="Search here..."
            value={SearchBlog}
            onChange={(event) => setSearchBlog(event.target.value)}
          />
        </div>
      </div>
      <h3>Popular Post</h3>
      <div className={styles.postDetail}>
        {displayBlog.map((post) => (
          <div key={post.id} className={styles.postBody}>
            <img src={imageblog} alt="blog-images"></img>
            <div className={styles.text}>
              <h3>{post.title}</h3>
              <p>{post.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterPost;
