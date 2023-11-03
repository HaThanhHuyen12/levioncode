import React from "react";
import style from "./course.module.css";
import avt1 from "../../image/avt1.png";
import Comment from "../../components/Comment";
export default function PostQuestion({ title, detail }) {
  return (
    <div className={style.questionPost}>
      <div>
        <img src={avt1} alt=""></img>
      </div>
      <div className={style.questionDetail}>
        <h2>{title}</h2>
        <p>{detail}</p>
        <div className={style.comment}>
          <Comment />
          <p>168 Comments</p>
        </div>
      </div>
    </div>
  );
}