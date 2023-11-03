import React, { useState } from "react";
import styles from "../courseList/courseList.module.css";

function FilterSkill({ skills, onSkillChange }) {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (skill) => {
    let updatedSkills = [...selectedSkills];
    if (updatedSkills.includes(skill)) {
      updatedSkills = updatedSkills.filter((s) => s !== skill);
    } else {
      updatedSkills.push(skill);
    }
    setSelectedSkills(updatedSkills);
    onSkillChange(updatedSkills);
  };

  return (
    <div className={styles.skill}>
      <h3>Skills</h3>
      <div className={styles.skillDetails}>
        {skills.map((skill) => (
          <div className={styles.levelBox} key={skill}>
            <input
              type="checkbox"
              checked={selectedSkills.includes(skill)}
              onChange={() => handleSkillChange(skill)}
            />
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterSkill;
