import Image from 'next/dist/client/image';
import styles from './footer.module.scss';
import LogoText from '../../../public/Logo_With_Text.svg';
import Link from 'next/link';

import Button from '../Button';
import Subscription from './Subscription';

const Footer = () => {
    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];

    const logo_placeholder = {
        width: '54px',
        height: '54px',
        backgroundColor: 'grey',
    };

    return (
        <footer className={styles.footer}>
            <Subscription />

            <div className={styles['footer--end']}>
                <div className={styles['footer--end--inner']}>
                    <Link href='#'>Terms and Conditions</Link>
                    <small>
                        Copyright © 2021 Real Futbol Institute Ltd. All rights
                        reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
