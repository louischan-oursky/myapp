import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./SideMenu.module.scss";

export default function SideMenu() {
  return (
    <nav className={styles.container}>
      <Link to="/">/</Link>
    </nav>
  );
}
