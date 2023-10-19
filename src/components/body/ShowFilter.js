import React from "react";
import styles from "@/styles/Home.module.css";

function ShowFilter() {
  return (
    <div className={`row justify-content-between mt-5 ${styles.sf_container}`}>
      <div className={`col-2 ${styles.update_d}`}>
        <p className={`${styles.filter_text}`}>All Updates</p>
      </div>
      <div className="col-3 position-relative p-3">
        <label className={`${styles.f_label}`}>Show</label>
        <select className={`${styles.f_select}`}>
          <option>Everything</option>
          <option>Today</option>
        </select>
      </div>
    </div>
  );
}

export default ShowFilter;
