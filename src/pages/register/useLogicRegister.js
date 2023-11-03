import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { API_URL, AUTHORIZATION_BEARIER } from "../../constants";
import toastNofication from "../../components/ToastNofication";

function useLogicRegister() {
  const [formData, setFormData] = useState({
    fullname: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    isChecked: false,
  });
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxbutton, setCheckbox] = useState(false);
  const [user, setUser] = useState("");
  const [ischeck, setisCheck] = useState(false);
  const [validMsg, setValidMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  console.log(">>>>>>", isChecked);

  const navigate = useNavigate();
  const validate = () => {
    const msg = {};
    if (isEmpty(fullname)) {
      msg.fullname = "Please enter the name";
    }
    if (email === "") {
      msg.email = "Please enter the email";
    } else if (!isEmail(email)) {
      msg.email = "Please enter the valid email";
    }
    if (password === "") {
      msg.password = "Please enter the password";
    } else if (password.length < 8) {
      msg.password = "Please enter the password more than 7 characters";
    }
    if (ischeck) {
      console.log(ischeck);
      setCheckbox(true);
    } else if (!ischeck) {
      console.log(ischeck);
      setCheckbox(false);
    }

    setValidMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  async function onsubmit() {
    const isValid = validate();
    if (!isValid) return;
    setLoading(false);
    try {
      const res = await axios.post(`${API_URL}/register`, {
        fullname: fullname,
        email: email,
        password: password,
      });
      console.log("res->", res);
      setUser(res.data.user);
      console.log(res.data.user);
      try {
        const response = await axios.patch(
          `${API_URL}/users/${res.data.user}/active`,
          {},
          {
            headers: {
              Authorization: `Bearer ${AUTHORIZATION_BEARIER}`,
            },
          }
        );
        if (response.data.status === 200) {
          toastNofication("success", "Success!", { closeButton: false });
          setLoading(false);
        }
        setLoading(true);
        await delay(2000);
        navigate("/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
      toastNofication("error", "Failure");
    }
  }
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const debounce = (fn, delay) => {
    delay = delay || 0;
    let timerID;
    console.log("timerID: " + timerID);
    return () => {
      console.log("a");
      if (timerID) {
        clearTimeout(timerID);
        timerID = null;
      }
      timerID = setTimeout(() => {
        fn();
      }, delay);
    };
  };
  return {
    setName,
    fullname,
    email,
    password,
    setPassword,
    setEmail,
    setIsChecked,
    checkboxbutton,
    isChecked,
    loading,
    setLoading,
    debounce,
    onsubmit,
    validMsg,
  };
}

export default useLogicRegister;