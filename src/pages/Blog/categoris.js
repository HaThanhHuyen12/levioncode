import React, { useState } from "react";
import styles from "../Blog/blog.module.css";
import JsonData from "../../fakeData/categoris.json";
import Forward from "../../components/Forward";
function FilterCategoris() {
  return (
    <div className={styles.categoris}>
      <h3>Categoris</h3>
      <div className={styles.categorisDetail}>
        {JsonData.map((categoris) => (
          <div key={categoris.id} className={styles.categorisBody}>
            <Forward />
            <p>{categoris.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCategoris;
