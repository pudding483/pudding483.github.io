import styles from './Sidebar.module.css'

function Sidebar(){
    return (
        <div className={styles.sidebar}>
            <div className={styles.menuItem}>儀表板</div>
            <div className={styles.menuItem}>使用者管理</div>
            <div className={styles.menuItem}>系統設定</div>
        </div>
    );
}

export default Sidebar;