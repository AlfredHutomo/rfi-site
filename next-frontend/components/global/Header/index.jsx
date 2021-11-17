import Image from 'next/dist/client/image';
import styles from './header.module.scss';
import LogoText from '../../../public/Logo_With_Text.svg';

import Button from '../Button';

const Header = () => {
    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];

    const logo_placeholder = {
        width: '54px',
        height: '54px',
        backgroundColor: 'grey',
    };

    return (
        <>
            <div className={styles.banner}>
                <p className={styles.text}>Celebrating 10 years in the game!</p>
            </div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Image src={LogoText} height={54} width={202} />
                    </div>
                    <nav className={styles.navigation}>
                        {links.map((link, i) => (
                            <div key={i} className={styles.links}>
                                <h6 className={styles.h6}>{link}</h6>
                            </div>
                        ))}
                    </nav>
                    <div className={styles.buttons}>
                        <Button>Member portal</Button>
                        <Button>Register</Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
