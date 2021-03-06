import * as React from "react";
import SideMenu from "./SideMenu";
import styles from "./MainLayout.module.scss";

export default function MainLayout(props) {
  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
