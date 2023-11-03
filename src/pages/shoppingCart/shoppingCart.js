import React, { useState, useEffect } from "react";
import styles from "../../pages/shoppingCart/shoppingCart.module.css";
import coursesMan from "../../image/courses-man.png";
import CartEmpty from "./cartEmpty";
import { useNavigate } from "react-router-dom";
import {
  getItemShoppingCartFromFirestore,
  removeItemFromFirestore,
  addToLearningJourney,
} from "../login/firebase";
import { getAuth } from "firebase/auth";
import LayoutWithHeader from "../../components/layoutWithHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QRCode from "../../image/Levion (2) 1.png";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let total = 0;
  cart.forEach((e) => (total += e.price));
  const discount = 20;

  const handleRemove = async (id) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmRemove) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      await removeItemFromFirestore(id);
    }
  };

  const handleCheckout = async () => {
    const confirmCheckout = window.confirm(
      "Are you sure you want to checkout?"
    );
    if (confirmCheckout) {
      setIsModalOpen(true); // Open the modal
    }
  };
  const handleConfirm = async  () => {
    const confirmPayment = window.confirm(
      "Are you sure you want to confirm payment?"
    );
    if (confirmPayment) {
      const currentUser = getAuth().currentUser;
      if (currentUser) {
        const items = cart.map((item) => ({
          courseId: item.id,
          courseName: item.name,
          price: item.price,
          skill: item.skill,
          level: item.level,
          email: currentUser.email,
          img: "",
        }));

        setCart([]); // Xóa các mục khỏi giỏ hàng sau khi đã thêm vào "My Learning Journey"
        try {
          await addToLearningJourney(currentUser.email, items);
          console.log("Item added to shopping cart on Firebase.");
          toast.success("Checkout successful !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
          });
          navigate("/profile");
        } catch (error) {
          console.log("handleAddToCart ~ error:", error);
        }
      }
    }
  };
  const currentUser = getAuth().currentUser;

  useEffect(() => {
    if (currentUser) {
      getItemShoppingCartFromFirestore(currentUser.email)
        .then((courseList) => {
          setCart(courseList);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error getting shopping cart items:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      localStorage.removeItem("cart");
    }
  }, [currentUser]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className={styles.ShoppingCart}>
      <LayoutWithHeader>
        {loading ? (
          <p>Loading...</p>
        ) : cart.length === 0 ? (
          <CartEmpty />
        ) : (
          <div className={styles.cart}>
            <div className={styles.title}>
              <h3>Shopping Cart</h3>
            </div>
            <div className={styles.cart_details}>
              <div className={styles.yourCart}>
                <h5>Your Cart</h5>
                {cart.map((course) => (
                  <div key={course.id} className={styles.courses}>
                    <div className={styles.course}>
                      <img src={coursesMan} alt="imgCourse" />
                      <div className={styles.courseDetail}>
                        <div className={styles.courseDetail_left}>
                          <h6>{course.name}</h6>
                          <div className={styles.courseDetail_buttons}>
                            <button className={styles.levelBTn}>
                              {course.level}
                            </button>
                            <button className={styles.skillBtn}>
                              {course.skill} Skills
                            </button>
                          </div>
                        </div>
                        <div className={styles.courseDetail_right}>
                          <div className={styles.fee}>
                            <div className={styles.feeDiscount}>
                              <h6>${course.price}.00</h6>
                              <p>$84.99</p>
                            </div>
                          </div>
                          <div className={styles.remove}>
                            <p onClick={() => handleRemove(course.id)}>
                              Remove
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.coupon}>
                <div className={styles.couponDiscount}>
                  <h5>Coupon Discount</h5>
                  <div className={styles.couponCode}>
                    <label>Coupon Code</label>
                    <div className={styles.couponApply}>
                      <input type="search" placeholder="Example" />
                      <button>Apply</button>
                    </div>
                  </div>
                </div>
                <div className={styles.couponDetail}>
                  <div className={styles.price}>
                    <p>Original Price</p>
                    <h6>${total}</h6>
                  </div>
                  <div className={styles.discountDiv}>
                    <div className={styles.discount}>
                      <p>Discount</p>
                      <h6>-${discount}</h6>
                    </div>
                  </div>
                  <div className={styles.total}>
                    <p>Total</p>
                    <h6>${total - discount}</h6>
                  </div>
                  <div className={styles.checkout}>
                    <button onClick={handleCheckout}>Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </LayoutWithHeader>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className={styles.qrcodeImg}>
              <img src={QRCode} alt="QRCode" />
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.couponDetailQR}>
              <div className={styles.priceQR}>
                <p>Original Price</p>
                <h6>${total}</h6>
              </div>
              <div className={styles.discountDivQR}>
                <div className={styles.discountQR}>
                  <p>Discount</p>
                  <h6>-${discount}</h6>
                </div>
              </div>
              <div className={styles.totalQR}>
                <p>Total</p>
                <h6>${total - discount}</h6>
              </div>
            </div>
          </Typography>
          <div className={styles.buttonConfirm}>
            <button className={styles.confirm} onClick={handleConfirm}>Confirm Payment</button>
            <button className={styles.cancel}>Cancel</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ShoppingCart;
