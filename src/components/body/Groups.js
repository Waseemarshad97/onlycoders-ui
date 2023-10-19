import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { GiWorld } from "react-icons/gi";

function Groups() {
  //groups data are stored in this array later fetch it from api

  const groups = [
    {
      name: "Street Artist",
      members: 2,
      displayImg: "",
    },
    {
      name: "Street Racer",
      members: 4,
      displayImg: "",
    },
    {
      name: "Show Daddy",
      members: 1,
      displayImg: "",
    },
    {
      name: "Smart Roc",
      members: 1,
      displayImg: "",
    },
    {
      name: "Peaky boys",
      members: 2,
      displayImg: "",
    },
  ];
  return (
    <div className={`mt-5 ${styles.member_container}`}>
      <p className={`${styles.member_text}`}>Popular groups</p>
      <div>
        {/* mapping throught group items*/}
        {groups.map((item, index) => {
          return (
            <div key={index} className="row mt-2 mb-2">
              <div className="col-3">
                <Image
                  src="/profile.svg"
                  alt="profile Logo"
                  className={styles.vercelLogo}
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="col-7">
                <div className={`d-flex ${styles.mem_w_height}`}>
                  <p className={`${styles.mem_f_primary}`}>{item.name}</p>
                </div>
                <p className={`${styles.mem_f_secondary}`}>
                  Members:{item.members}
                </p>
              </div>
              <div className="col-2">
                <GiWorld className="text-secondary mt-2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Groups;
