import Image from 'next/dist/client/image';
import styles from './header.module.scss';
import LogoText from '../../../public/Logo_With_Text.svg';

import { MdMenu } from 'react-icons/md';

import Button from '../Button';
import { useState } from 'react';

const Header = () => {
    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];
    const [mobileMenu, setMobileMenu] = useState(false);

    const logo_placeholder = {
        width: '54px',
        height: '54px',
        backgroundColor: 'grey',
    };

    const toggleMobileMenu = () => {
        setMobileMenu((state) => !state);
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
                        {mobileMenu ? (
                            <></>
                        ) : (
                            <MdMenu onClick={toggleMobileMenu} />
                        )}
                    </div>
                    <nav className={styles.navigation}>
                        {links.map((link, i) => (
                            <div key={i} className={styles.links}>
                                <h6 className={styles.h6}>{link}</h6>
                            </div>
                        ))}
                    </nav>
                    <div className={styles.buttons}>
                        <Button variant={'3'}>Member portal</Button>
                        <Button variant={'1'}>Register</Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
