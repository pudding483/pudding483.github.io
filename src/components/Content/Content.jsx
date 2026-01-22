import { Outlet } from 'react-router-dom';

import styles from './Content.module.css';

function Content() {
    return (
        <div className={styles.container}>
            <Outlet />
            {/* 會顯示 router match 到的 component */}
        </div>
    );
}

export default Content;
