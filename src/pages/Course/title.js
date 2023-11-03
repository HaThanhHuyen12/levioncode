import { Menu } from "../../components/Menu";
import style from "./course.module.css";
import logo from "../../image/logo 1.png";
import process from "../../image/process.png";
import avt from "../../image/avtcourse.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../login/firebase";
export const TitleMobile = () => {
  return (
    <div className={style.title}>
      <div className={style.titleLeft}>
        <Menu />
      </div>
      <div className={style.titleMiddle}></div>
      <div className={style.titleRight}>
        <h2>Course 1: Master Your Pronunciation</h2>
      </div>
    </div>
  );
};
export const TitlePC = () => {
  const [menuOpenProfile, setMenuOpenProfile] = useState(false);
  const toggleMenuProfile = () => {
    setMenuOpenProfile(!menuOpenProfile);
  };
  const handleClick = async () => {
    // console.log("remove");

    // await signOut(auth);
    // sessionStorage.removeItem("data");
    // window.location.reload(true);
  };
  return (
    <div className={style.titlePC}>
      <div className={style.titlePCLeft}>
        <div>
          <Link to="/homePage">
            {" "}
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className={style.titleMiddle}></div>
        <div className={style.titlePCDetail}>
          <h2>Course 1: Master Your Pronunciation</h2>
        </div>
      </div>
      <div className={style.titlePCRight}>
        <div className={style.titlePCRightDetail}>
          <div className={style.courseProcess}>
            <img src={process} alt="process"></img>
            <div className={style.chartProcess}>
              <p>Course Progress</p>
            </div>
          </div>
          <div className="Profile">
            <ul>
              <li className="menuImg">
                {menuOpenProfile ? (
                  <img
                    className=""
                    src={avt}
                    alt="avtProfile"
                    onClick={toggleMenuProfile}
                  />
                ) : (
                  <img
                    className=""
                    src={avt}
                    alt="avtProfile"
                    onClick={toggleMenuProfile}
                  />
                )}

                <ul
                  className={
                    menuOpenProfile ? "menuProfile showProfile" : "menuProfile"
                  }
                >
                  <button onClick={handleClick}>
                    <li>Log out</li>
                  </button>
                  <Link to="/profile" className="btnProfile">
                    <button>
                      <li>Profile</li>
                    </button>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
