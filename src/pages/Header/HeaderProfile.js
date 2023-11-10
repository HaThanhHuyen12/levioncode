import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiChevronDown, BiMinus, BiMenu, BiChevronRight } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../login/firebase";

import logo from "../../image/logo 1.png";
import cart1 from "../../image/Icon Cart.png";
import cow_header from "../../image/cow-header.png";
import heart from "../../image/heart1.png";
import noti from "../../image/notification.png";
import avtProfile from "../../image/avtcourse.png";
import { useEffect } from "react";
import "../Header/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

function HeaderProfile() {
  const navigate = useNavigate();
  const handleClick = async () => {
    await signOut(auth);
    localStorage.removeItem("data");
    window.location.reload(true);
  };

  const [href, setHref] = useState("");

  const location = useLocation();

  useEffect(() => {
    setHref(location.pathname);
  }, [])

  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenProfile, setMenuOpenProfile] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const toggleMenuProfile = () => {
    setMenuOpenProfile((prevMenuOpenProfile) => !prevMenuOpenProfile);
  };

  const data = JSON.parse(localStorage.getItem("data"));

  const renderHeaderRight = () => {
    if (data) {
      return (
        <div className="header_right">
          <div className="header_right_Icon">
            <Link to="/shoppingCart" className="shoppingCart">
              <ShoppingCartIcon />
            </Link>
            <Link to="#" id="noti" className="shoppingCart">
              <NotificationsIcon />
            </Link>
            <Link to="#" id="Heart" className="shoppingCart">
              <FavoriteIcon />
            </Link>
          </div>
          <div className="Profile">
            <ul>
              <li className="menuImg">
                {menuOpenProfile ? (
                  <img
                    className=""
                    src={avtProfile}
                    alt="avtProfile"
                    onClick={toggleMenuProfile}
                  />
                ) : (
                  <img
                    className=""
                    src={avtProfile}
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
      );
    } else {
      return (
        <div className="header_right1">
          <Link to="/shoppingCart" className="shoppingCart">
            <ShoppingCartIcon />
          </Link>
          <Link to="/" id="SignIn">
            <button id="btn_left">Sign in</button>
          </Link>
          <Link to="/register" id="SignUp">
            <button id="btn_right">Sign up</button>
          </Link>
        </div>
      );
    }
  };

  return (
    <header>
      <Link to="/homePage" className="imgheader">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="cow_header">
        <Link to="/homePage">
          <img src={cow_header} alt="cow_header" />
        </Link>
      </div>
      <div className="navContents">
        <nav ref={navRef}>
          <div className="cow_header_nav">
            <Link to="/homePage">
              <img src={cow_header} alt="cow_header" />
            </Link>
          </div>
          <div className="responsive-header">
            <div className="text-header">
              <Link to="/test" className={href.includes('test') ? 'active' : ''}>Level Test</Link>
              <Link to="/courseList" className={href.includes('courseList') ? 'active' : ''}>Courses</Link>
              <div className="Learning">
                <ul>
                  <li className="menuIcon">
                    <Link to="/learningResources" className={href.includes('learningResources') ? 'active titleLearning' : 'titleLearning'}>
                      Learning Resources
                    </Link>
                    <div className="LearningIcon">
                      {menuOpen ? (
                        <BiChevronDown onClick={toggleMenu} />
                      ) : (
                        <BiChevronRight onClick={toggleMenu} />
                      )}
                    </div>
                    <ul
                      className={
                        menuOpen ? "menuLearning show" : "menuLearning"
                      }
                    >
                      <li>
                        <Link to="/podcast">Podcast</Link>
                      </li>
                      <li>
                        <Link to="#">Digital Flashcards</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/socialNetwork">Social Network</Link>
                      </li>
                      <li>
                        <Link to="#">Our Community</Link>
                      </li>
                      <li>
                        <Link to="#">eBooks</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Link to="/aboutUs" className={href.includes('aboutUs') ? 'active' : ''}>About us</Link>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <BiMinus />
              </button>
            </div>
            <div className="btnHeader">{renderHeaderRight()}</div>
          </div>
        </nav>
      </div>
      <div className="btnCart">
        <Link to="/shoppingCart" className="shoppingCart">
          <ShoppingCartIcon />
        </Link>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <BiMenu />
      </button>
    </header>
  );
}

export default HeaderProfile;
