import { DropUp } from "../../components/Dropup";
import style from "./course.module.css";
import React, { useState } from "react";
import Lesson from "../../fakeData/lesson.json";
import { GreenTick } from "../../components/GreenTick";
import Wait from "../../components/Wait";
import Pause from "../../components/Pause";
import { IconDropdown } from "../../components/Dropdown";

export default function SectionOne({ section, handleCollaspe, sections }) {
  const [isActive, setIsActive] = useState(false);
  console.log("change aaaa", isActive);
  return (
    <div key={section.id}>
      <div
        className={style.sectionLesson}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={style.fullSection}>
          <div className={style.sectionTitle}>
            <h6>
              Section {section.id}: {section.name}
            </h6>
            {isActive ? <IconDropdown /> : <DropUp />}
          </div>
          <div>
            <p>0/7 | 22min</p>
          </div>
        </div>
      </div>
      {section.lessons.map(
        (lesson) =>
          isActive && (
            <Lesson
              key={lesson.id}
              detail={`${lesson.id}. ${lesson.name}`}
              status={
                lesson.state === "done" ? (
                  <GreenTick />
                ) : lesson.state === "processing" ? (
                  <Wait />
                ) : (
                  <Pause />
                )
              }
              active={lesson.state === "processing"}
              disable={lesson.state === "pending"}
            />
          )
      )}
    </div>
  );
}