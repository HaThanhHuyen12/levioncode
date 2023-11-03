import "./Empty.css";
import sadFace from "../../image/sadface.png";
import { Link } from "react-router-dom";

function Empty() {
  return (
    <div className="Content">
      <div className="empty">
        <img src={sadFace} alt="img" />
        <p>Empty. Keep Going to find a course!</p>
        <Link to="/coursesList">
          <button>Go to Courses</button>
        </Link>
      </div>
    </div>
  );
}
export default Empty;
