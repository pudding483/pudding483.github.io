import { Link } from "react-router-dom";

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
