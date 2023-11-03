import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LevionContextProvider } from "./context/LevionContext";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import CourseDetail from "./pages/courseDetail/courseDetail";
import ShoppingCart from "./pages/shoppingCart/shoppingCart";
import CartEmpty from "./pages/shoppingCart/cartEmpty";
import CartFail from "./pages/shoppingCart/cartFail";
import CartSuccessful from "./pages/shoppingCart/cartSuccessful";
import SimpleSlider from "./components/SimpleSlider";
import SimpleSlider1 from "./components/SimpleSlider1";
import Test from "./pages/LevelTest/Test";
import LearningResources from "./pages/LearningResources/LearningResources";
import SocialNetwork from "./pages/LearningResources/SocialNetwork";
import Profile from "./pages/Profile/Profile";
import Course from "./pages/Course/course";
import CourseList from "./pages/courseList/courseList";
import Blog from "./pages/Blog/blog";
import BlogDetail from "./pages/Blog/blogDetail";
import Podcast from "./pages/Podcast/Podcast";
import ForgotPassword from "./pages/forgot_password/forgot_password";
import { Empty } from "antd";


function App() {
  return (
    <div className="App">
      <LevionContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/cartEmpty" element={<CartEmpty />} />
          <Route path="/cartFail" element={<CartFail />} />
          <Route path="/cartSuccessful" element={<CartSuccessful />} />
          <Route path="/simpleSlider" element={<SimpleSlider />} />
          <Route path="/simpleSlider1" element={<SimpleSlider1 />} />
          <Route path="/test" element={<Test />} />
          <Route path="/learningResources" element={<LearningResources />} />
          <Route path="/socialNetwork" element={<SocialNetwork />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<Course />} />
          <Route path="/courseList" element={<CourseList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetail/:id" element={<BlogDetail />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/empty" element={<Empty />} />
        </Routes>
      </LevionContextProvider>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
