// import Download from "../../components/Download";
import Play from "../../components/Play";
import style from "./course.module.css";
import React from "react";

export default function Lesson({
  detail,
  status,
  active = false,
  disable = false,
}) {
  return (
    <div
      className={
        disable === true ? style.lesson1 : active === true ? style.lesson : ""
      }
    >
      <div
        className={active === true ? style.lessonDetail1 : style.lessonDetail}
      >
        {status}
        <div className={style.lessonTitle}>
          <p>{detail}</p>
          <div className={style.playAndDownload}>
            <div className={style.lessonPlay}>
              <Play />
              <p>7 min</p>
            </div>
            <div className={style.lessonDownload}>
              {/* <Download /> */}
              <p>Download</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}