import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

function Banner() {
  return (
    <div className={`${styles.bg_banner} d-flex`}>
      <div className={`${styles.bg_img_container}`}>
        <Image
          width={330}
          height={225}
          src={
            "https://d15npnd6r77o8y.cloudfront.net/uploads/facebookads-img-bring-creation-1544590904.svg"
          }
          alt="banner"
        />
      </div>
      <div className={`mb-auto m-4 ${styles.banner_text}`}>
        <p>Newsfeed</p>
        <p>Check what your friends have been up to </p>
      </div>
    </div>
  );
}

export default Banner;
