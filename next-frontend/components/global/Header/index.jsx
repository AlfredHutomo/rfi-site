import styles from './header.module.scss';

const Header = () => {
    const links = [];
    return (
        <>
            <div className={styles.banner}>
                <p className={styles.text}>Celebrating 10 years in the game!</p>
            </div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>logo</div>
                    <nav className={styles.navigation}>
                        <div className={styles.links}>Links</div>
                    </nav>
                    <div className={styles.buttons}></div>
                </div>
            </header>
        </>
    );
};

export default Header;
