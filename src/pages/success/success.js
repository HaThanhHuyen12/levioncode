import logo1 from "../../image/logo 1.png";
import background from "../../image/OBJECTS.png";
import logo2 from "../../image/image 48.png";
import "../success/success.css";

import React from "react";
import { Link } from "react-router-dom";

function success() {
  <div id="wrapper">
    <div className="layout_background"></div>
    <div className="background">
      <img src={background} alt="a" />
    </div>
    <div class="image">
      <img src={logo2} alt="a" />
    </div>

    <h1 class="heading">Your Password has changed Successful</h1>
    <h2 class="describe">Let’s Discover Vietnamese with us</h2>

    <div class="lable">
      <button class="submit">Let’s Start</button>
    </div>
  </div>;
}
export default success;
