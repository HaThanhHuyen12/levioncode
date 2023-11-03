import styles from "../Blog/blog.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderProfile from "../Header/HeaderProfile";
import blog from "../../image/blogdetail.png";
import { BiSearch } from "react-icons/bi";
import FilterPost from "./popularPost";
import FilterCategoris from "./categoris";
import JsonData from "../../fakeData/blog.json";
import imageblogDetail from "../../image/courses-man.png";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import Calender from "../../components/Calender";
import Eye from "../../components/Eye";
import imageblog from "../../image/imageblog.png";
import Data from "../../fakeData/postData.json";
import LayoutWithHeader from "../../components/layoutWithHeader";
function Blog() {
  const coursesPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * coursesPerPage;
  const [SearchBlog, setSearchBlog] = useState("");
  const filteredBlog = JsonData.filter((val) => {
    if (SearchBlog === "") {
      return true;
    } else if (val.name.toLowerCase().includes(SearchBlog.toLowerCase())) {
      return true;
    }
    return false;
  });
  const pageCount = Math.ceil(filteredBlog.length / coursesPerPage);

  const displayBlog = filteredBlog.slice(
    pagesVisited,
    pagesVisited + coursesPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={styles.blog}>
      <LayoutWithHeader>
      <div className={styles.blogBody}>
        <div className={styles.firstBlog}>
          <div className={styles.first_details}>
            <h1>Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              risus non venenatis dolor nisl tellus habitant aliquam. Dignissim
              tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim tellus,
              Tellus elementum enim faucibus morbi enim fusce:
            </p>
          </div>
          <div className={styles.first_images}>
            <img src={blog} alt="blog-images"></img>
          </div>
        </div>
        <div className={styles.blogDetail}>
          <div className={styles.categoryOfBlog}>
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
            <div className={styles.postAndcategories}>
              <div className={styles.popularPost}>
                <h3>Popular Post</h3>
                <div className={styles.postDetail}>
                  {Data.map((post) => (
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
              {/* <FilterPost /> */}
              <FilterCategoris />
            </div>
          </div>
          <div className={styles.listBlog}>
            {displayBlog.map((list) => (
              <div className={styles.listBlogDetail} key={list.id}>
                <img
                  className={styles.listBlog_img}
                  src={imageblogDetail}
                  alt="courseMan"
                />
                <div className={styles.headerBlockDetail}>
                  <div className={styles.headerBlock}>
                    <div className={styles.firstBlock}>
                      <Calender />
                      <p>August 10, 2022</p>
                    </div>
                    <div className={styles.secondBlock}>
                      <Eye />
                      <p>504 views</p>
                    </div>
                  </div>
                  <div className={styles.listDetailBlog}>
                    <h3 className={styles.titleBlog}>
                      <p>{list.name}</p>
                      <h4>{list.detail}</h4>
                    </h3>
                  </div>
                  <Link to={`/blogDetail/${list.id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />

      </div>
      </LayoutWithHeader>
    </div>
  );
}
export default Blog;
