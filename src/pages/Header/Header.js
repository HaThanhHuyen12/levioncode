import logo from "../../image/logo 1.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import cart1 from "../../image/Icon Cart.png";
import cow_header from "../../image/cow-header.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/homePage" class="imgheader">
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
      <div className="cow_header">
        <Link to="/homePage">
          <img src={cow_header} alt="cow_header"></img>
        </Link>
      </div>
      <div className="navContents">
        <nav ref={navRef}>
          <div className="cow_header_nav">
            <Link to="/homePage">
              <img src={cow_header} alt="cow_header"></img>
            </Link>
          </div>
          <Link to="/test">Level Test</Link>
          <Link to="/courseList">Courses</Link>
          <div className="Learning">
            <ul>
              <li className="menuIcon">
                <Link to="/learningResources" className="titleLearning">
                  Learning Resources
                </Link>
                <div className="LearningIcon">
                  <BiChevronDown />
                </div>
                <ul className="menuLearning">
                  <li>
                    <Link to="/podcast">Podscast</Link>
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
          <Link to="/aboutUs">About us</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <div className="header_right1">
            <Link to="/shoppingCart">
              <img className="addToCart" src={cart1} alt="cart"></img>
            </Link>
            <Link to="/" id="SignIn">
              <button id="btn_left">Sign in</button>
            </Link>
            <Link to="/register" id="SignUp">
              <button id="btn_right">Sign up</button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="btnCart">
      <Link to="/shoppingCart">
        <img className="addToCart1" src={cart1} alt="cart"></img>
      </Link>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
