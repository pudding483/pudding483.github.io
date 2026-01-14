import styles from './BodyWrapper.module.css';
import Sidebar from '../../components/Sidebar.jsx';
import Content from '../../components/Content.jsx';

function BodyWrapper() {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <Content />
        </div>
    );
}

export default BodyWrapper;