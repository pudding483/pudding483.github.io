import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} 483. All Right Reserved</p>
        </footer>
    );
}

export default Footer