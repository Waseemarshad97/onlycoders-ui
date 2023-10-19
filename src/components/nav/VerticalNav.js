import React from "react";
import styles from "@/styles/Home.module.css";

import { AiOutlineUser, AiOutlineUserSwitch } from "react-icons/ai";
import { CiMedal } from "react-icons/ci";
import { BsStar, BsFillBasket3Fill } from "react-icons/bs";
import { GiVerticalBanner } from "react-icons/gi";
import { PiDiamondsFourFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { TbMessageExclamation } from "react-icons/tb";
import { FaMoneyBill } from "react-icons/fa";

function VerticalNav() {
  return (
    <div>
      <div className={`flex-colum vh-100 bg-white ${styles.v_prop}`}>
        <AiOutlineUser className={`d-block m-2 ${styles.v_nav_icon}`} />
        <AiOutlineUserSwitch className={`d-block m-2 ${styles.v_nav_icon}`} />
        <CiMedal className={`d-block m-2 ${styles.v_nav_icon}`} />
        <BsStar className={`d-block m-2 ${styles.v_nav_icon}`} />
        <GiVerticalBanner className={`d-block m-2 ${styles.v_nav_icon}`} />
        <PiDiamondsFourFill className={`d-block m-2 ${styles.v_nav_icon}`} />
        <BiSolidReport className={`d-block m-2 ${styles.v_nav_icon}`} />
        <TbMessageExclamation className={`d-block m-2 ${styles.v_nav_icon}`} />
        <BsFillBasket3Fill className={`d-block m-2 ${styles.v_nav_icon}`} />
        <FaMoneyBill className={`d-block m-2 ${styles.v_nav_icon}`} />
      </div>
      ;
    </div>
  );
}

export default VerticalNav;
