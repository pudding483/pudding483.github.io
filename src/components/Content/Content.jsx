import { Outlet } from 'react-router-dom';

import styles from './Content.module.css';

function Content() {
    return (
        <div className={styles.container}>
            {/* <h2 className={styles.title}>主要內容</h2> */}
            {/* <p>測試內容...</p> */}

            <Outlet />
            {/* 會顯示 router match 到的 component */}
        </div>
    );
}

export default Content;
