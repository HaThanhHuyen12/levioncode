import React, { useState } from "react";
import styles from "../courseList/courseList.module.css";

function FilterLevel({ levels, onLevelChange }) {
  const [selectedLevels, setSelectedLevels] = useState([]);

  const handleLevelChange = (level) => {
    let updatedLevels = [...selectedLevels];
    if (updatedLevels.includes(level)) {
      updatedLevels = updatedLevels.filter((l) => l !== level);
    } else {
      updatedLevels.push(level);
    }
    setSelectedLevels(updatedLevels);
    onLevelChange(updatedLevels);
  };

  return (
    <div className={styles.levelAll}>
      <h3>Levels</h3>
      <div className={styles.levelDetails}>
        {levels.map((level) => (
          <div className={styles.levelBox} key={level}>
            <input
              type="checkbox"
              checked={selectedLevels.includes(level)}
              onChange={() => handleLevelChange(level)}
            />
            <p>{level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterLevel;
