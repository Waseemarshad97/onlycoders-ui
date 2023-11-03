import React from "react";
import Banner from "./body/Banner";
import Members from "./body/Members";
import Groups from "./body/Groups";
import Post from "./body/Post";

import styles from "@/styles/Home.module.css";
import ShowFilter from "./body/ShowFilter";
import LoginModal from "./body/LoginModal";

function Main({ loginModal, setLoginModal }) {
  return (
    <div className={`row ${styles.main_container}`}>
      {/* grid system */}
      <LoginModal onShow={loginModal} onClose={setLoginModal} />

      <Banner />
      <div className="row">
        <div className="col-md-3">
          <Members />
        </div>
        <div className="col-md-6">
          <ShowFilter />
          <Post />
        </div>
        <div className="col-md-3">
          <Groups />
        </div>
      </div>
    </div>
  );
}

export default Main;
