import styles from "../courseList/courseList.module.css";
import course from "../../image/courses.png";
export default function TitleOfCourseList() {
  return (
    <div className={styles.course_part_1}>
      <div className={styles.coursePart1Left}>
        <h1>Course</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus
          non venenatis dolor nisl tellus habitant aliquam. Dignissim tellus, eu
          eu sed malesuada pharetra aliquam eu.Dignissim tellus, Tellus
          elementum enim faucibus morbi enim fusce:
        </p>
      </div>
      <div className={styles.coursePart1Right}>
        <img src={course} alt="i11"></img>
      </div>
    </div>
  );
}