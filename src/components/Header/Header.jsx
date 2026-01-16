import styles from './Header.module.css';

function Header(){
    return (
        <header className={styles.header}>

            {/* {left section} */}
            <div className={styles.leftSection}>
                <h1 className={styles.logo}>483's Blog</h1>
            </div>
            
            {/* {center section} */}
            <nav className={styles.centerSection}>
                <ul className={styles.navList}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Archive</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            
            {/* {right section} */}
            <div className={styles.rightSection}>
                <span className={styles.actionItem}>Music</span>
                <span className={styles.actionItem}>Dark/Light</span>
            </div>
        </header>
    );
}

export default Header;