import React, { useState, useEffect, useRef } from "react";
import { saveImageToFirestore, storage } from "../login/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import "./Profile.css";

function ImageUpload(props) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const filePickerRef = useRef();

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("uploadedImageUrl");
    if (storedImageUrl) {
      setPreviewUrl(storedImageUrl);
    }
  }, []);

  const pickedHandler = async (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setPreviewUrl(URL.createObjectURL(pickedFile));
      try {
        const storageRef = ref(storage, `/files/${pickedFile?.name}`);
        const uploadTask = uploadBytes(storageRef, pickedFile);
        await getDownloadURL((await uploadTask).ref).then(async (url) => {
          localStorage.setItem("uploadedImageUrl", url);

          await saveImageToFirestore(props.uid, { image: url });
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpload = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="uploadImg">
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="preview" />}
          <input
            id={props.id}
            ref={filePickerRef}
            style={{ display: "none" }}
            type="file"y
            accept=".jpg, .png, .jpeg"
            onChange={pickedHandler}
          />
          <button onClick={handleUpload} className="image-upload-button">
            {previewUrl ? "Change Image" : "Upload Image"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
