import React, { useEffect, useState } from "react";
import "../Profile/Profile.css";
import editImg from "../../image/edit.png";
import account from "../../image/account.png";
import call from "../../image/call.png";
import birthday from "../../image/birthday.png";
import emailImg from "../../image/email.png";
import ImageUpload from "./ImageUpload";
import LayoutWithHeader from "../../components/layoutWithHeader";
import coursesMan from "../../image/courses-man.png";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../login/firebase";
import Empty from "./Empty";
import { getItemsFromLearningJourney } from "../login/firebase";
import { useCallback } from "react";
import { BiEditAlt, BiCheck } from "react-icons/bi";

export default function Profile() {
  const currentUser = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data")).user
    : null;
  const [state, setState] = useState(1);
  const [learningJourneyItems, setLearningJourneyItems] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    if (edit) {
      updateUserDetails();
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (edit) {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const saveUserDetails = (userData) => {
    localStorage.setItem("userDetails", JSON.stringify(userData));
  };

  const updateUserDetails = useCallback(async () => {
    try {
      if (!currentUser || !edit) {
        return;
      }

      const userDocRef = doc(db, "users", currentUser.email);
      await updateDoc(userDocRef, userDetails);
      console.log("User details updated successfully");

      saveUserDetails(userDetails);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  }, [currentUser, edit, userDetails]);

  useEffect(() => {
    const fetchLearningJourneyItems = async () => {
      try {
        if (currentUser) {
          const learningItems = await getItemsFromLearningJourney(
            currentUser?.email
          );
          if (learningItems) {
            setLearningJourneyItems(learningItems);
            localStorage.setItem(
              "learningJourneyItems",
              JSON.stringify(learningItems)
            );
          } else {
            setLearningJourneyItems([]);
          }
        } else {
          const storedItems = localStorage.getItem("learningJourneyItems");
          if (storedItems) {
            setLearningJourneyItems(JSON.parse(storedItems));
          }
        }
      } catch (error) {
        console.error("Error getting learning journey items:", error);
      }
    };

    const fetchUserDetails = async () => {
      try {
        if (currentUser && currentUser?.email) {
          const userDocRef = doc(db, "users", currentUser?.email);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUserDetails(userData);
            saveUserDetails(userData);
          }
        }
      } catch (error) {
        console.error("Error getting user details:", error);
      }
    };

    fetchLearningJourneyItems();
    fetchUserDetails();
  }, []);

  return (
    <div className="profile">
      <LayoutWithHeader>
        <div className="contents">
          <div className="profilePerson">
            <div className="information">
              <ImageUpload uid={currentUser?.email} />

              <div className="frameInfo">
                <div className="userInfo">
                  <p>User Information</p>
                  <div className="editUser">
                    {edit ? (
                      <div onClick={handleEdit} className="Check">
                        <div className="iconCheck">
                          {" "}
                          <BiCheck />
                        </div>
                        <p className="doneText">Done</p>
                      </div>
                    ) : (
                      <div onClick={handleEdit} className="Edit">
                        <div className="iconEdit">
                          <BiEditAlt />
                        </div>
                        <p className="editText">Edit</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={account} alt="account" />
                  <div className="UserInfoDetails">
                    <p>Họ và tên</p>
                    <div className={edit ? "edit" : "edit2"}>
                      <input
                        id="name"
                        type="text"
                        name="displayName"
                        value={userDetails?.displayName || ""}
                        onChange={handleChange}
                        disabled={!edit}
                      />
                    </div>
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={call} alt="call" />
                  <div className="UserInfoDetails">
                    <p>Số điện thoại</p>
                    <div className={edit ? "edit" : "edit2"}>
                      <input
                        id="phoneNumber"
                        type="number"
                        name="phoneNumber"
                        value={userDetails?.phoneNumber || ""}
                        onChange={handleChange}
                        disabled={!edit}
                      />
                    </div>
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={birthday} alt="birthday" />
                  <div className="UserInfoDetails">
                    <p>Ngày sinh</p>
                    <div className={edit ? "edit" : "edit2"}>
                      <input
                        id="dateOfBirth"
                        type="date"
                        name="dateOfBirth"
                        value={userDetails?.dateOfBirth || ""}
                        onChange={handleChange}
                        disabled={!edit}
                      />
                    </div>
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={emailImg} alt="email" />
                  <div className="UserInfoDetails">
                    <p>Email</p>
                    <div className="edit2">
                      <input
                        type="email"
                        name="email"
                        value={currentUser?.email || ""}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="tabs">
              <div
                onClick={() => setState(1)}
                className={`tab ${state === 1 ? "active-tab" : ""}`}
              >
                <p>My Learning Journey</p>
              </div>
              <div
                onClick={() => setState(2)}
                className={`tab ${state === 2 ? "active-tab" : ""}`}
              >
                <p>Password</p>
              </div>
              <div
                onClick={() => setState(3)}
                className={`tab ${state === 3 ? "active-tab" : ""}`}
              >
                <p>Billing & Purchases</p>
              </div>
              <div
                onClick={() => setState(4)}
                className={`tab ${state === 4 ? "active-tab" : ""}`}
              >
                <p>Wishlist</p>
              </div>
            </div>
            <div className="contentTabs">
              <div className={`content ${state === 1 ? "content-active" : ""}`}>
                <div className="Content-Learning">
                  <div className="LearningJourney">
                    {learningJourneyItems.length === 0 ? (
                      <Empty />
                    ) : (
                      <div className="LearningJourneyLeft">
                        {learningJourneyItems.map((item) => (
                          <div className="itemLearning" key={item.id}>
                            <img src={coursesMan} alt="coursesMan" />
                            <div className="infoCourse">
                              <h6>{item.courseName}</h6>
                              <div className="skills">
                                <div className="levels">
                                  <p>{item.level}</p>
                                </div>
                                <div className="speaking">
                                  <p>{item.skill}</p>
                                </div>
                              </div>
                              <a href="/coursesList">
                                <button>Go to course</button>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={`content ${state === 2 ? "content-active" : ""}`}>
                <div className="password">
                  <div className="changePassword">
                    <div className="changePasswordDetail">
                      <label>Current Password</label>
                      <br />
                      <input type="password" placeholder="Example" />
                    </div>
                    <div className="changePasswordDetail">
                      <label>New Password</label>
                      <br />
                      <input type="password" placeholder="Example" />
                    </div>
                    <div className="changePasswordDetail">
                      <label>Re-type Password</label>
                      <br />
                      <input type="password" placeholder="Example" />
                    </div>
                    <div className="saveChanges">
                      <button>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`content ${state === 3 ? "content-active" : ""}`}>
                <div className="Billing">
                  <Empty />
                </div>
              </div>
              <div className={`content ${state === 4 ? "content-active" : ""}`}>
                <div className="WishList">
                  <Empty />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithHeader>
    </div>
  );
}
