import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  serverTimestamp,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../login/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo1 from "../../image/logo 1.png";
import facebook from "../../image/fb.png";
import google from "../../image/google.png";
import styles from "./Register.module.css";

function Register() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [validMsg, setValidMsg] = useState({
    fullname: "",
    email: "",
    password: "",
    term_policy: "",
  });
  const [isToastShown, setIsToastShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim() === "") {
      setValidMsg((prevState) => ({
        ...prevState,
        email: "Please enter your email.",
      }));
    } else if (!emailRegex.test(email)) {
      setValidMsg((prevState) => ({
        ...prevState,
        email: "Please enter a valid email.",
      }));
    } else {
      setValidMsg((prevState) => ({
        ...prevState,
        email: "",
      }));
    }
  };

  const validatePassword = (password) => {
    if (!password || password.trim() === "") {
      setValidMsg((prevState) => ({
        ...prevState,
        password: "Please enter your password.",
      }));
    } else if (password.length < 8) {
      setValidMsg((prevState) => ({
        ...prevState,
        password: "Password must be at least 8 characters long.",
      }));
    } else {
      setValidMsg((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
  };

  const validateName = (name) => {
    if (!name || name.trim() === "") {
      setValidMsg((prevState) => ({
        ...prevState,
        fullname: "Please enter your full name.",
      }));
    } else {
      setValidMsg((prevState) => ({
        ...prevState,
        fullname: "",
      }));
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    validateName(name);
    validateEmail(email);
    validatePassword(password);

    if (validMsg.fullname || validMsg.email || validMsg.password) {
      setIsLoading(false); // Stop loading
      return;
    }

    // Continue creating the user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Save user data in Firestore
        const userRef = doc(db, "users", user.email);
        const userData = {
          image: "",
          displayName: name,
          email: email,
          phoneNumber: "",
          dateOfBirth: "",
          createdAt: serverTimestamp(),
        };

        setDoc(userRef, userData);
        console.log("success", userData);
        // Listen for changes to the user document
        const unsubscribe = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            console.log("User Data:", userData);
            setName(userData.displayName);
          }
        });

        // Unsubscribe from the listener when no longer needed
        return unsubscribe();
      })
      .then(() => {
        if (!isToastShown) {
          setIsToastShown(true);
          toast.success("Account successfully created!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("Email is already in use!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          console.log("Error:", errorCode, errorMessage);
        }
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };
  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.layout_background}>
          <div className={styles.background}></div>
        </div>
        <div id={styles.register}>
          <div className={styles.logo1}>
            <a href="/homePage">
              <img src={logo1} alt="a" />
            </a>
          </div>
          <div className={styles.heading}>
            <h1>Create an account</h1>
          </div>
          <div className={styles.name}>
            <label htmlFor="name">Full name</label>
            <strong>*</strong>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
            />
            <span className={styles.validMsg}>{validMsg.fullname}</span>
            <br />
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <strong>*</strong>
            <br />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            <span className={styles.validMsg}>{validMsg.email}</span>
            <br />
          </div>
          <div className={styles.psw}>
            <label htmlFor="password">Password</label>
            <strong>*</strong>
            <br />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            <span className={styles.validMsg}>{validMsg.password}</span>
            <br />
          </div>
          <div className={styles.input_checkbox}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className={styles.term_policy}>
              I accept Levion's <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>.
            </div>
            <span className={styles.validMsg}>{validMsg.term_policy}</span>
          </div>
          <div className={styles.btn_wrapper}>
            <button
              onClick={onsubmit}
              className={`submit ${!isChecked ? "disabled_btn" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <span className={styles.loadingText}>Create Account</span>
                  <div className={styles.loadingIcon}></div>{" "}
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
          <div className={styles.change_to_signIn}>
            <span>Already have an account? </span>
            <Link to="/">Sign In</Link>
          </div>
          <hr />
          <div className={styles.continue}>
            <Link href="">
              <button className={styles.continue_facebook}>
                <img src={facebook} alt="a" />
                Continue with Facebook
              </button>
            </Link>
            <br />
            <Link href="">
              <button className={styles.continue_google}>
                <img src={google} alt="a" />
                Continue with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
