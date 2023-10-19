import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

function Members() {
  //members data is stored in this array and later we can fetch it from api
  const members = [
    {
      name: "sandra",
      userId: "sandra@97",
      verfified: true,
      level: 2,
      displayImg: "",
    },
    {
      name: "Rosie Sakuara",
      userId: "rosie@87",
      verfified: false,
      level: 4,
      displayImg: "",
    },
    {
      name: "sandra",
      userId: "sandra@97",
      verfified: false,
      level: 1,
      displayImg: "",
    },
    {
      name: "Domian greyson",
      userId: "domy@97",
      verfified: false,
      level: 1,
      displayImg: "",
    },
    {
      name: "Bearded Wonder",
      userId: "brdwander@97",
      verfified: false,
      level: 2,
      displayImg: "",
    },
  ];
  return (
    <div className={`mt-5 ${styles.member_container}`}>
      <p className={`${styles.member_text}`}>Newest Members</p>
      <div>
        {/* iterating through all the members */}
        {members.map((item, index) => {
          return (
            <div key={index} className="d-flex mt-2 mb-2">
              <div>
                <Image
                  src="/profile.svg"
                  alt="profile Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div>
                <div className={`d-flex ${styles.mem_w_height}`}>
                  <p className={`${styles.mem_f_primary}`}>{item.name}</p>
                  {item.verfified && <MdVerified className="text-info m-1" />}
                </div>
                <p className={`${styles.mem_f_secondary}`}>{item.userId}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Members;
