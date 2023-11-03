import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  where,
  query,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdy5Ww-xraZQjjPMgbSbOE_yZ8WNfFqbg",
  authDomain: "levionweb-f3729.firebaseapp.com",
  projectId: "levionweb-f3729",
  storageBucket: "levionweb-f3729.appspot.com",
  messagingSenderId: "515728230698",
  appId: "1:515728230698:web:950670523dd57293817653",
  measurementId: "G-C1L9S7S0GP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const colRef = collection(db, "courseList");
const colRef1 = collection(db, "shoppingCart");
const auth = getAuth(app);

const addItemToFirestore = async (item) => {
  try {
    const docRef = await addDoc(colRef1, { ...item });
    console.log("Added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error: ", error);
  }
};

const removeItemFromFirestore = async (id) => {
  try {
    await deleteDoc(doc(colRef1, id));
    console.log("Item removed from Firestore.");
  } catch (error) {
    console.error("Error removing item: ", error);
  }
};

const getItemCourseListFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(colRef);
    const courseList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(courseList);
    return courseList;
  } catch (error) {
    console.error("Error getting course list: ", error);
    return [];
  }
};

const getItemShoppingCartFromFirestore = async (email) => {
  try {
    const shoppingCartQuery = query(
      collection(db, "shoppingCart"),
      where("userEmail", "==", email)
    );
    const querySnapshot = await getDocs(shoppingCartQuery);
    const shoppingCart = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log(shoppingCart);
    return shoppingCart;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
};

const addToLearningJourney = async (userEmail, course) => {
  const docRef = doc(db, "myLearningJourney", userEmail);
  await setDoc(docRef, { items: course }, { merge: true });
};

const getItemsFromLearningJourney = async (userEmail) => {
  try {
    const docRef = doc(db, "myLearningJourney", userEmail);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const learningJourneyItems = docSnapshot.data().items;
      console.log(learningJourneyItems);
      return learningJourneyItems;
    } else {
      console.log("Learning journey not found for user:", userEmail);
      return [];
    }
  } catch (error) {
    console.error("Error getting learning journey items:", error);
    return [];
  }
};

const saveImageToFirestore = async (userUid, imageFile) => { 
  try {
    const storageRef = ref(storage, `users/${userUid}/profile-image`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
      },
      (error) => {
        console.error("Error uploading image:", error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("Image download URL:", downloadURL);

          const userRef = doc(db, "users", userUid);
          await updateDoc(userRef, { image: downloadURL });
          console.log("Image updated successfully");

          // Save the image download URL to local storage
          localStorage.setItem("profileImageUrl", downloadURL);
        } catch (error) {
          console.error("Error updating image in Firestore:", error);
        }
      }
    );
  } catch (error) {
    console.error("Error saving image to Firestore:", error);
  }
};

export {
  auth,
  db,
  storage,
  firebaseConfig,
  getItemCourseListFromFirestore,
  getItemShoppingCartFromFirestore,
  addItemToFirestore,
  removeItemFromFirestore,
  addToLearningJourney,
  getItemsFromLearningJourney,
  saveImageToFirestore,
};


