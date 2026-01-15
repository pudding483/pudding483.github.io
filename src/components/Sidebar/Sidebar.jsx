import styles from './Sidebar.module.css'

function Sidebar(){
    return (
        <div className={styles.sidebar}>
            {/* 這裡可以放大頭貼/文章類別/標籤 */}
            <div className={styles.menuItem}>Test1</div>
            <div className={styles.menuItem}>Test2</div>
            <div className={styles.menuItem}>Test3</div>
        </div>
    );
}

export default Sidebar;