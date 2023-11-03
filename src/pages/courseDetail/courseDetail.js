import Footer from "../Footer/Footer";
import HeaderProfile from "../Header/HeaderProfile";
import avt from "../../image/avt.png";
import courseDetail from "../../image/courseDetail.png";
import star from "../../image/star.png";
import tick from "../../image/tick.png";
import chat from "../../image/chat.png";
import write from "../../image/write.png";
import listen from "../../image/listen.png";
import play2 from "../../image/play2.png";
import doc from "../../image/doc.png";
import head from "../../image/head.png";
import starSmall from "../../image/starSmall.png";
import avt1 from "../../image/avt1.png";
import avt2 from "../../image/avt2.png";
import avt3 from "../../image/avt3.png";
import avt4 from "../../image/avt4.png";
import avt5 from "../../image/avt5.png";
import courseMan from "../../image/courses-man.png";
import pointer from "../../image/poiter.png";
import heart from "../../image/heart.png";
import object from "../../image/object.png";
import lectures from "../../image/lectures.png";
import world from "../../image/world.png";
import book from "../../image/book.png";
import play from "../../image/playdetail.png";
import time from "../../image/time.png";
import LayoutWithHeader from "../../components/layoutWithHeader";
import styles from "../courseDetail/courseDetail.module.css";

export default function CourseDetail() {
  return (
    <div>
      <LayoutWithHeader >
      <div className={styles.courseDetails}>
        <div className={styles.details}>
          <div className={styles.details_title}>
            <div className={styles.detail_img}>
              <div className={styles.background}>
                <img src={courseDetail} alt="courseDetail"></img>
              </div>
              <p>Course Category</p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Last update December 1, 2022</p>
              <div className={styles.avt_name}>
                <img src={avt} alt="avt"></img>
                <p>Kathryn Murphy</p>
              </div>
              <div className={styles.vote_enrolled}>
                <div className={styles.vote}>
                  <p>4.5 / 5</p>
                  <div className={styles.star}>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                  </div>
                  <p>(100)</p>
                </div>
                <div className={styles.enrolled}>
                  <p>100 alreadey enrolled</p>
                </div>
              </div>
            </div>

            <div className={styles.aboutThisCourse}>
              <h4>About this Course</h4>
              <p>
                In this course, I take you from the fundamentals and concepts of
                data modeling all the way through a number of best practices and
                techniques that you’ll need to build data models in your
                organization. You’ll find many examples that clearly demonstrate
                the key concepts and techniques covered throughout the course.
                <br />
                By the end of the course, you’ll be all set to not only put
                these principles to work, but also to make the key data modeling
                and design decisions required by the “art” of data modeling that
                transcend the nuts-and-bolts techniques and design patterns.
                <br />
                Organisations, or groups of organisations, may establish the
                need for master data management when they hold more than one
                copy of data about a business entity. Holding more than one copy
                of this master data inherently means that there is an
                inefficiency in maintaining a “single version of the truth”
                across all copies. Unless people, processes and technology are
                in place to ensure that the data values are kept aligned across
                all copies, it is almost inevitable that different versions of
                information about a business entity will be held.
              </p>
            </div>

            <div className={styles.learningAndSkills}>
              <div className={styles.learning}>
                <h5>What you'll learn</h5>
                <div className={styles.learning_detail}>
                  <div className={styles.learning_details}>
                    <img src={tick} alt="tick"></img>
                    <p>
                      Ready to begin working on real-world data modeling
                      projects,
                    </p>
                  </div>
                  <div className={styles.learning_details}>
                    <img src={tick} alt="tick"></img>
                    <p>Expanded responsibilities as part of an existing role</p>
                  </div>
                  <div className={styles.learning_details}>
                    <img src={tick} alt="tick"></img>
                    <p>Find a new position involving data modeling</p>
                  </div>
                </div>
              </div>
              <div className={styles.skillsIncluded}>
                <h5>Skills included</h5>
                <div className={styles.learning_detail}>
                  <div className={styles.learning_details}>
                    <img src={chat} alt="tick"></img>
                    <p>Speaking Skills</p>
                  </div>
                  <div className={styles.learning_details}>
                    <img src={listen} alt="tick"></img>
                    <p>Listening Skills</p>
                  </div>
                  <div className={styles.learning_details}>
                    <img src={write} alt="tick"></img>
                    <p>Writing Skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.videoTimetables}>
              <div className={styles.videoTimetables1}>
                <div className={styles.video}>
                  <h6>Introduction and Plugins</h6>
                </div>
                <div className={styles.timelines}>
                  <div className={styles.videoDetails_preview}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <button>Preview</button>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.video}>
                  <h6>Pronunciation</h6>
                </div>
                <div className={styles.timelines}>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={doc} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.video}>
                  <h6>Grammar</h6>
                </div>
                <div className={styles.timelines}>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={doc} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.video}>
                  <h6>Vocabulary</h6>
                </div>
                <div className={styles.timelines}>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className={styles.videoDetails}>
                    <div className={styles.videoDetails_title}>
                      <img src={doc} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className={styles.preview}>
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.instructor}>
              <h5>Instructor</h5>
              <div className={styles.headOfLevionTraining}>
                <img src={head} alt="head"></img>
                <div className={styles.titleOfInstructor}>
                  <h6>Vo Hanh Quyen</h6>
                  <p>Head of Levion Traning</p>
                </div>
              </div>
              <p>
                Jose Marcial Portilla has a BS and MS in Mechanical Engineering
                from Santa Clara University and years of experience as a
                professional instructor and trainer for Data Science, Machine
                Learning and Python Programming. He has publications and patents
                in various fields such as microfluidics, materials science, and
                data science. Over the course of his career he has developed a
                skill set in analyzing data and he hopes to use his experience
                in teaching and data science to help other people learn the
                power of programming, the ability to analyze data, and the
                skills needed to present the data in clear and beautiful
                visualizations. Currently he works as the Head of Data Science
                for Pierian Training and provides in-person data science and
                python programming training courses to employees working at top
                companies, including General Electric, Cigna, The New York
                Times, Credit Suisse, McKinsey and many more.{" "}
              </p>
            </div>

            <div className={styles.studentFeedback}>
              <h5>Student Feedback</h5>
              <div className={styles.listOfStudentInfo}>
                <div className={styles.studentInfo}>
                  <img className={styles.avt} src={avt5} alt="avt5"></img>
                  <div className={styles.studentInfoDetail}>
                    <h6>Nguyễn Đỗ Sơn Tùng</h6>
                    <p>1 week ago</p>
                    <div>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                    </div>
                  </div>
                </div>
                <div className={styles.feedbackOfStudent}>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className={styles.listOfStudentInfo}>
                <div className={styles.studentInfo}>
                  <img className={styles.avt} src={avt1} alt="avt1"></img>
                  <div className={styles.studentInfoDetail}>
                    <h6>Nguyễn Đỗ Sơn Tùng</h6>
                    <p>1 week ago</p>
                    <div>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                    </div>
                  </div>
                </div>
                <div className={styles.feedbackOfStudent}>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className={styles.listOfStudentInfo}>
                <div className={styles.studentInfo}>
                  <img className={styles.avt} src={avt2} alt="avt2"></img>
                  <div className={styles.studentInfoDetail}>
                    <h6>Nguyễn Đỗ Sơn Tùng</h6>
                    <p>1 week ago</p>
                    <div>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                    </div>
                  </div>
                </div>
                <div className={styles.feedbackOfStudent}>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className={styles.listOfStudentInfo}>
                <div className={styles.studentInfo}>
                  <img className={styles.avt} src={avt3} alt="avt3"></img>
                  <div className={styles.studentInfoDetail}>
                    <h6>Nguyễn Đỗ Sơn Tùng</h6>
                    <p>1 week ago</p>
                    <div>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                    </div>
                  </div>
                </div>
                <div className={styles.feedbackOfStudent}>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className={styles.listOfStudentInfo}>
                <div className={styles.studentInfo}>
                  <img className={styles.avt} src={avt4} alt="avt4"></img>
                  <div className={styles.studentInfoDetail}>
                    <h6>Nguyễn Đỗ Sơn Tùng</h6>
                    <p>1 week ago</p>
                    <div>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                      <img src={starSmall} alt="star"></img>
                    </div>
                  </div>
                </div>
                <div className={styles.feedbackOfStudent}>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.part2}>
            <img
              className={styles.courseMan}
              src={courseMan}
              alt="courseMan"
            ></img>
            <div className={styles.categories}>
              <div className={styles.category_detail}>
                <div className={styles.category_details}>
                  <img src={pointer} alt=""></img>
                  <p>Level</p>
                </div>
                <h2>Beginer</h2>
              </div>
              <div className={styles.category_detail}>
                <div className={styles.category_details}>
                  <img src={time} alt=""></img>
                  <p>Duration</p>
                </div>
                <h2>4 hour</h2>
              </div>
              <div className={styles.category_detail}>
                <div className={styles.category_details}>
                  <img src={lectures} alt=""></img>
                  <p>Lectures</p>
                </div>
                <h2>Vo Hanh Quyen</h2>
              </div>
              <div className={styles.category_detail}>
                <div className={styles.category_details}>
                  <img src={object} alt=""></img>
                  <p>Subject</p>
                </div>
                <h2>Pronunciation</h2>
              </div>
              <div className={styles.category_detail}>
                <div className={styles.category_details}>
                  <img src={world} alt=""></img>
                  <p>Language</p>
                </div>
                <h2>Beginner</h2>
              </div>
              <div className={styles.materialIncludes}>
                <h5>Material includes</h5>
                <div className={styles.materialIncludesDetails}>
                  <img src={play} alt="play"></img>
                  <p>Video</p>
                </div>
                <div className={styles.materialIncludesDetails}>
                  <img src={book} alt="book"></img>
                  <p>Book</p>
                </div>
              </div>
              <div className={styles.addToCart}>
                <button>Add To Cart</button>
              </div>
              <div className={styles.buyNow}>
                <button>Buy Now</button>
                <img src={heart} alt="heart"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      </LayoutWithHeader>
    </div>
  );
}
