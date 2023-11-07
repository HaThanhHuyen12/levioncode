import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/LevionContext";
import logo1 from "../../image/logo 1.png";
import styles from "./Login.module.css";
import facebook from "../../image/fb.png";
import google from "../../image/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

function Login() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  const [isToastShown, setIsToastShown] = useState(false);
  const [validMsg, setValidMsg] = useState({});
  const [errorCode, setErrorCode] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setValidMsg((prevValidMsg) => ({
        ...prevValidMsg,
        email: "Please enter a valid email.",
      }));
    } else {
      setValidMsg((prevValidMsg) => ({ ...prevValidMsg, email: "" }));
    }
  };

  const validatePassword = (password) => {
    if (!password || password.length < 8) {
      setValidMsg((prevValidMsg) => ({
        ...prevValidMsg,
        password: "Please enter a valid password (minimum 8 characters).",
      }));
    } else {
      setValidMsg((prevValidMsg) => ({ ...prevValidMsg, password: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading
    setErrorCode(""); // Reset error code

    if (!email || !password) {
      setValidMsg({
        email: "Please enter your email.",
        password: "Please enter your password.",
      });
      return;
    }

    validateEmail(email);
    validatePassword(password);

    if (validMsg.email || validMsg.password) {
      setIsLoading(false); // Stop loading if there are validation errors
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("data", JSON.stringify(userCredential));
        const user = userCredential.user;
        console.log("login success with user", user);

        if (!isToastShown) {
          setIsToastShown(true);
          toast.success("Login successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
          });
        }

        navigate("/homePage");
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorCode(errorCode);
        console.log("Error:", errorCode, error.message);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  const handleGoogleSignIn = async (values) => {
    try {
      setIsLoading(true);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("data", result);
      localStorage.setItem("data", JSON.stringify(user));
      navigate("/homePage");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "Account does not exist!";
      case "auth/wrong-password":
        return "Incorrect password!";
      default:
        return "An error occurred. Please try again.";
    }
  };

  useEffect(() => {
    if (errorCode) {
      toast.error(getErrorMessage(errorCode), {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    }
  }, [errorCode]);

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.layout_background}>
          <div className={styles.background}></div>
        </div>

        <div id={styles.login}>
          <div className={styles.logo1}>
            <a href="/homePage">
              <img src={logo1} alt="a" />
            </a>
          </div>

          <div className={styles.heading}>
            <h1 onClick={() => setLogin(true)}>Sign in to your account</h1>
          </div>

          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className={styles.login_input}
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
            />
            <span className={styles.validMsg}>{validMsg.email}</span>
            <br />
          </div>
          <div className={styles.psw}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              className={styles.login_input}
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => validatePassword(password)}
            />
            <span className={styles.validMsg}>{validMsg.password}</span>
            <br />
          </div>

          <div className={styles.btn_wrapper}>
            <button
              className={styles.submit}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <span className={styles.loadingText}>Sign In</span>
                  <div className={styles.loadingIcon}></div>{" "}
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          <div className={styles.forgot_psw}>
            <a href="../forgot_password">Forgot Password</a>
          </div>
          <div className={styles.change_to_signUp}>
            <span>Don't have an account? </span>
            <Link to="../register">Sign Up</Link>
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
              <button
                className={styles.continue_google}
                onClick={handleGoogleSignIn}
              >
                <img src={google} alt="a" />
                Continue with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
