import styles from './Sidebar.module.css'

function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            {/* 這裡可以放大頭貼/文章類別/標籤 */}
            <ProfileSection />
            <div className={styles.menuItem}>Test2</div>
            <div className={styles.menuItem}>Test3</div>
        </aside>
    );
}

function ProfileSection(){
    return (
        <div className={styles.profileSection}>
            <div className={styles.avatarWrapper}>

            </div>
            <h3 className={styles.name}>沈柏安</h3>
            <p className={styles.bio}>資安工程師 | 象棋愛好者</p>
        </div>
    )
}

export default Sidebar;