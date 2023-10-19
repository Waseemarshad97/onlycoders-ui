import VerticalNav from "@/components/nav/VerticalNav";
import Header from "../components/nav/Header";
import Main from "@/components/Main";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={`${styles.bg_main}`}>
      <Header />
      <div className="d-flex">
        <VerticalNav />
        <Main />
      </div>
    </div>
  );
}
