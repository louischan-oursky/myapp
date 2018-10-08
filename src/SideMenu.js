import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./SideMenu.module.scss";

export default function SideMenu() {
  return (
    <nav className={styles.container}>
      <Link to="/">/</Link>
      <Link to="/componentstate">Component State</Link>
      <Link to="/renderprops">Render Props</Link>
      <Link to="/staleproblem">Stale Problem</Link>
      <Link to="/context">Context</Link>
    </nav>
  );
}
