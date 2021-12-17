import Image from 'next/dist/client/image';
import styles from './footer.module.scss';
import LogoImg from '../../../public/logo-no-text.svg';
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
        <footer className={styles['page-footer-wrapper']}>
            <div className={styles['page-footer-top']}>
                <div className={styles['page-footer']}>
                    <div className={styles['page-footer-col']}>
                        <Image src={LogoImg} width="94" height="94" alt="Real Futbol Institute" />
                        <h4 className={'h4 ' + styles['page-footer-logo-text']}>
                            Real Futbol Institute
                            <span>Finest youth football development</span>
                        </h4>
                    </div>
                    <div className={styles['page-footer-col']}>
                        <Subscription />
                    </div>
                </div>
            </div>

            <div className={styles['page-footer-btm']}>
                <div className={styles['page-footer']}>
                    <Link href='#'>Terms and Conditions</Link>

                    <div className={styles['page-footer-copyright-info']}>
                        Copyright © 2021 Real Futbol Institute Ltd. All rights
                        reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
