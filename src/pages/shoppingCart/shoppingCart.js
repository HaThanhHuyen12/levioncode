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
import { Modal, Spin } from "antd";
import { Modal as ModalMaterial, Stack } from "@mui/material"
import QRCode from "../../image/Levion (2) 1.png";
import ModalCustom from "../../components/ModalCustom";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let total = 0;
  cart.forEach((e) => (total += e.price));
  const discount = 20;
  const [modal, contextHolder] = Modal.useModal();
  const [showModalLoading, setShowModalLoading] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showConfirmPayment, setShowConfirmPayment] = useState(false);
  const [selectedIdCourse, setSelectedIdCourse] = useState(null);
  console.log(cart)
  const handleRemove = async (id) => {
    // modal.confirm({
    //   open: true,
    //   content: (
    //     <p>Are you sure you want to remove this item?</p>
    //   ),
    //   title: "Confirmation",
    //   closable: true,
    //   onOk: async () => {
    //     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    //     await removeItemFromFirestore(id);
    //   },
    //   style: {
    //     top: 20
    //   },
    //   okCancel: false
    // })
    setSelectedIdCourse(id)
    setShowRemoveModal(true);
  };

  const handleCheckout = async () => {
    // modal.confirm({
    //   open: true,
    //   content: (
    //     <p>Are you sure you want to checkout?</p>
    //   ),
    //   title: "Confirmation",
    //   closable: true,
    //   onOk: () => setIsModalOpen(true),
    //   style: {
    //     top: 20
    //   },
    //   okCancel: false
    // })
    setShowCheckoutModal(true)
  };
  const handleConfirm = async () => {
    setIsModalOpen(false);
    setShowConfirmPayment(true)
    // modal.confirm({
    //   icon: <></>,
    //   open: true,
    //   content: (
    //     <p style={{
    //       textAlign: 'center'
    //     }}>Are you sure you want to confirm payment?</p>
    //   ),
    //   closable: false,
    //   onOk: () => {
    //     setShowModalLoading(true)
    //     setTimeout(handleConfirmPayment, 2000);
    //   },
    //   onCancel: () => setIsModalOpen(true),
    //   style: {
    //     top: 20
    //   },
    //   okCancel: true,
    // })
  };
  const currentUser = getAuth().currentUser;
  const handleConfirmPayment = async () => {
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

      try {
        await addToLearningJourney(currentUser.email, items);
        items.forEach(async (item) => {
          await removeItemFromFirestore(item.courseId)
        })
        setShowModalLoading(false);
        toast.success("Checkout successful !", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
        });
        setCart([])
        navigate("/profile");
      } catch (error) {
        console.log("handleAddToCart ~ error:", error);
      }
    }
  }
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
      {contextHolder}

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
      <ModalCustom open={showRemoveModal} content={
        (
          <>
            <p style={{ textAlign: 'center' }}>Are you sure you want to remove this item?</p>
          </>
        )
      } onCancel={() => setShowRemoveModal(false)} onOk={async () => {
        setShowRemoveModal(false)
        setCart((prevCart) => prevCart.filter((item) => item.id !== selectedIdCourse));
        await removeItemFromFirestore(selectedIdCourse);
      }} />
      <ModalCustom open={showCheckoutModal} content={
        (
          <>
            <p style={{ textAlign: 'center' }}>Are you sure you want to checkout?</p>
          </>
        )
      } onCancel={() => setShowCheckoutModal(false)} onOk={() => {
        setShowCheckoutModal(false)
        setIsModalOpen(true)
      }} />
      <ModalCustom open={showConfirmPayment} content={
        (
          <>
            <p style={{ textAlign: 'center' }}>Are you sure you want to confirm payment?</p>
          </>
        )
      } onCancel={() => setShowConfirmPayment(false)} onOk={() => {
        setShowConfirmPayment(false)
        setShowModalLoading(true)
        setTimeout(handleConfirmPayment, 2000);
      }} />
      <ModalMaterial
        open={showModalLoading}
        // onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={{ ...style, borderRadius: 2 }} direction={'column'} alignItems={'center'} justifyContent={'center'} gap={4}>
          <p style={{
            textAlign: 'center',
            fontSize: 20
          }}>Please wait for confirmation from levion education center</p>
          <Spin size="large" />
        </Stack>
      </ModalMaterial>
      <ModalMaterial
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
      </ModalMaterial>
    </div>
  );
}

export default ShoppingCart;
