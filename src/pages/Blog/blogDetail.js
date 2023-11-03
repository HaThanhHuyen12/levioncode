import styles from "../Blog/blogDetail.module.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderProfile from "../Header/HeaderProfile";
import FilterPost from "./popularPost";
import FilterCategoris from "./categoris";
import JsonData from "../../fakeData/blog.json";
import imageblogDetail from "../../image/courses-man.png";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import Calender from "../../components/Calender";
import Eye from "../../components/Eye";
import Facebook from "../../components/Facebook";
import Youtube from "../../components/Youtube";
import Instagram from "../../components/Instagram";
import Tiktok from "../../components/Tiktok";
import Back from "../../components/Back";
import avtprofile from "../../image/avtblog.png";
import blockDetailBody_img1 from "../../image/blogDetail1.png";
import blockDetailBody_img2 from "../../image/blogDetail2.png";
import LayoutWithHeader from "../../components/layoutWithHeader";

function BlogDetail() {
  const coursesPerPage = 3;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * coursesPerPage;
  const [SearchBlog, setSearchBlog] = useState("");
  const filteredBlog = JsonData.filter((val) => {
    if (SearchBlog === "") {
      return true;
    } else if (val.title && val.title.toLowerCase().includes(SearchBlog.toLowerCase())) {
      return true;
    }
    return false;
  });
  

  const displayBlog = filteredBlog.slice(
    pagesVisited,
    pagesVisited + coursesPerPage
  );
  const { id } = useParams();
  const list = JsonData.find((data) => data.id == id);
  return (
    <div className={styles.blogBody}>
      <LayoutWithHeader>
      <div className={styles.backBlock}>
        <Back />
        <Link to="/blog">
          <p>Back</p>
        </Link>
      </div>
      <div className={styles.blogDetail}>
        <div className={styles.categoryOfBlog}>
          <div className={styles.postAndcategories}>
            <FilterPost />
            <FilterCategoris />
          </div>
        </div>
        <div className={styles.blockDetail}>
          <h1 className={styles.blockDetailName}>{list.name}</h1>
          <div className={styles.blockDetailHeader}>
            <div className={styles.profileBlog}>
              <img
                className={styles.profileBlog_img}
                src={avtprofile}
                alt="courseMan"
              />
              <p>Owen Christ</p>
            </div>
            <div className={styles.BlockHeader}>
              <div className={styles.firstBlockHeader}>
                <Calender />
                <p>August 10, 2022</p>
              </div>
              <div className={styles.secondBlockHeader}>
                <Eye />
                <p>504 views</p>
              </div>
            </div>
          </div>
          <div className={styles.blockDetailBody}>
            <img
              className={styles.blockDetailBody_img1}
              src={blockDetailBody_img1}
              alt="blockDetail"
            />
            <div className={styles.textBlogBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quis
                egestas convallis lorem mauris. Morbi proin in faucibus orci
                aliquet turpis mi quam commodo. Volutpat velit nisl ultricies
                vitae amet integer mauris.
              </p>
              <p className={styles.text1}>
                Aliquam id felis nibh ut risus duis euismod eu. In id eu commodo
                bibendum bibendum et. Urna imperdiet eget phasellus quam et
                nulla nibh sed sed. Dictum potenti vestibulum maecenas quis
                sollicitudin. Interdum pharetra magna libero eu. Lacinia
                dignissim cras ornare egestas. Nulla vehicula vel fringilla
                semper egestas sodales fames venenatis aenean. Purus phasellus
                mauris eu adipiscing mattis id tempor. Enim dolor bibendum ut
                commodo accumsan, aliquam.
              </p>
              <h1 className={styles.text2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt turpis tellus nunc venenatis, bibendum. Pulvinar
                gravida ornare convallis nunc est mauris tellus. Facilisis id
                imperdiet amet molestie vulputate sed quis. Sodales diam in
                scelerisque tincidunt dui proin a enim ac. Blandit dis sed
                consequat id tincidunt egestas dignissim.{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt turpis tellus nunc venenatis, bibendum. Pulvinar
                gravida ornare convallis nunc est mauris tellus. Facilisis id
                imperdiet amet molestie vulputate sed quis. Sodales diam in
                scelerisque tincidunt dui proin a enim ac. Blandit dis sed
                consequat id tincidunt egestas dignissim. Hendrerit maecenas
                integer diam tincidunt eu semper ipsum. Pharetra tincidunt
                iaculis ac faucibus nec massa. Id scelerisque quam diam
                adipiscing feugiat. Sed tincidunt a, arcu, curabitur pretium
                pellentesque vitae, tristique. Risus sagittis, id amet ut amet
                dignissim tortor. Consectetur eu sed faucibus eget pellentesque
                tortor, quis maecenas ultrices. Netus id in nunc non nibh sapien
                volutpat dis. Pretium lectus elementum donec mattis vestibulum
                consectetur.
              </p>
              <h1  className={styles.text3}>Lorem ipsum dolor sit amet</h1>
              <p>
                Dui tempor, congue neque, augue lectus cursus integer leo.
                Tristique pellentesque non massa netus. Cursus facilisis
                ullamcorper dictum tempor ut commodo enim, rhoncus. Blandit
                morbi scelerisque bibendum est nibh. Elementum faucibus netus
                praesent fringilla nunc, donec mi a. Auctor neque justo, aenean
                sit felis, elementum mauris massa. Risus eu porttitor nisi sit.
                Elementum elementum habitasse vulputate sed vestibulum. Arcu
                pharetra nisl in elit. Quisque molestie mollis eleifend nisi.
                Pulvinar adipiscing integer erat etiam in mauris curabitur
                tellus ultricies. Sollicitudin commodo mattis netus eu id arcu
                urna, eget. Turpis sed consectetur faucibus a. Nam turpis
                ultricies tortor consequat nibh gravida at sit dignissim.
              </p>
            </div>
            <img
              className={styles.blockDetailBody_img2}
              src={blockDetailBody_img2}
              alt="blockDetail"
            />
            <div className={styles.textBlogBody}>
              <p>
                Scelerisque vestibulum malesuada donec feugiat. Habitant lacinia
                enim, in cursus tempor arcu, lobortis nulla. Non porttitor in ut
                vestibulum sed viverra gravida risus fusce. Orci, amet, sit
                tincidunt ullamcorper. Urna, aliquam feugiat tincidunt lectus
                tristique netus molestie. Venenatis interdum diam tortor id
                odio. Vitae at mauris condimentum arcu, tellus. Et, nunc, odio
                non vel orci molestie mus sit. Magnis pellentesque quam pulvinar
                ut non sed. At cras tempus fermentum faucibus mattis maecenas
                ultrices. Viverra fermentum, mauris porttitor ipsum sollicitudin
                tristique nunc nec. 
              </p>
              <p className={styles.text4}>Varius lorem nunc augue porta enim. Lectus
                ultricies duis viverra ac. Et vel eget nisi scelerisque purus
                dolor. Purus facilisis egestas nisl, sit sollicitudin vestibulum
                sed arcu posuere. Varius malesuada condimentum ornare risus
                etiam velit bibendum. Ac viverra faucibus aliquam, ac volutpat
                odio. Mattis nulla aliquet duis quis id pulvinar tortor odio.
                Auctor vitae habitant scelerisque quis sit risus. Sit imperdiet
                aliquet tristique non sit sodales purus. Sodales sed felis at
                nisl. At tellus euismod platea commodo sodales et et, nec
                tincidunt. Pretium sit mi at porttitor iaculis. Odio diam
                adipiscing at sed est et a fermentum lectus. Eget adipiscing
                amet nisl varius arcu morbi lorem pretium.</p>
            </div>
            <div className={styles.socials}>
              <h4>Share</h4>
              <div className={styles.community}>
                <Facebook />
                <div className={styles.iconBlog}>
                  <Instagram />
                </div>
                <Tiktok />
                <div className={styles.iconBlog}>
                  <Youtube />
                </div>
              </div>
            </div>
            <div className={styles.hashtag}>
              <h4>Hashtag</h4>
              <div className={styles.hashtagButton}>
                <button>Education</button>
                <button className={styles.buttonEdu}>Education</button>
                <button>Education</button>
                <button className={styles.buttonEdu}>Education</button>
              </div>
            </div>
            <div className={styles.related}>
              <h2>Related Post</h2>
              <div className={styles.relatedList}>
                <div className={styles.relatedListBlock}>
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
            </div>
          </div>
        </div>
      </div>
      </LayoutWithHeader>
    </div>
  );
}
export default BlogDetail;
