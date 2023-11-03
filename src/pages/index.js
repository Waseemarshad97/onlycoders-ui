import VerticalNav from "@/components/nav/VerticalNav";
import Header from "../components/nav/Header";
import Main from "@/components/Main";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className={`${styles.bg_main}`}>
      <Header setLoginModal={setLoginModal} loginModal={loginModal} />
      <div className="d-flex">
        <VerticalNav />
        <Main loginModal={loginModal} setLoginModal={setLoginModal} />
      </div>
    </div>
  );
}
