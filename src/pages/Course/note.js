import Delete from "../../components/Delete";
import Edit from "../../components/Edit";
import style from "./course.module.css";
import React from "react";

export default function Note() {
  return (
    <div>
      <div className={style.noteDetail}>
        <div className={style.notePart1}>
          <h2>0:31 - 0:4</h2>
          <div className={style.editAndDelete}>
            <Edit />
            <Delete />
          </div>
        </div>
        <h2>Section 1: Xin chào, cảm ơn</h2>
        <p>10. Tên Lesson 10</p>
      </div>
      <div className={style.noteDetailPC}>
        <div className={style.notePart1}>
          <div className={style.notePart1Left}>
            <h2>0:31 - 0:4</h2>
            <h2 id={style.h22}>Section 1: Xin chào, cảm ơn</h2>
            <p>10. Tên Lesson 10</p>
          </div>
          <div className={style.editAndDelete}>
            <Edit />
            <Delete />
          </div>
        </div>
      </div>
      <div className={style.contentNote}>
        <div className={style.contentNoteDetail}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed vitae aenean id
            scelerisque fusce proin dignissim eu vulputate. In sit diam sed nec
            arcu commodo cursus faucibus. Placerat sed faucibus massa facilisis
            consectetur sit elit sagittis enim. Duis vestibulum elementum diam
            iaculis curabitur tortor diam parturient. Vitae pellentesque sit
            mattis quam tortor ultricies a. Semper pulvinar felis tempus magna
            lacinia in adipiscing. Habitant duis sapien quis tortor suspendisse.
            Feugiat aliquam dictum augue pellentesque suscipit maecenas sed
            massa. Cursus malesuada porttitor nec sit arcu netus tellus. Quis
            sit laoreet est tortor. Iaculis in sit mauris proin erat gravida
            viverra vitae. Augue sed cursus arcu a pellentesque. Senectus
            ridiculus velit nulla est volutpat purus egestas tellus accumsan.
          </p>
        </div>
      </div>
    </div>
  );
}