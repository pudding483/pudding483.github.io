import styles from './Content.module.css';

function Content(){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>主要內容</h2>
            <p>測試內容...</p>
        </div>
    );
}

export default Content;