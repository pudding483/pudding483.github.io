import { Link } from "react-router-dom";
// 在網頁上會被渲染成標準的 HTML <a> 標籤，對於訪問過的標籤字體會有別的顏色

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.headerSurface}>
        {/* {left section} */}
        <div className={styles.leftSection}>
          <h1 className={styles.logo}>483's Blog</h1>
        </div>

        {/* {center section} */}
        <nav className={styles.centerSection}>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* {right section} */}
        <div className={styles.rightSection}>
          <span className={styles.actionItem}>Music</span>
          <span className={styles.actionItem}>Dark/Light</span>
        </div>
      </header>
    </div>
  );
}

export default Header;
