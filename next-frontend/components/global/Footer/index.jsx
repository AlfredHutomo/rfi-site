import Image from 'next/dist/client/image';
import styles from './footer.module.scss';
import LogoImg from '../../../public/logo-no-text.svg';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Button from '../Button';
import Subscription from './Subscription';

const Footer = () => {
    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];

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

                        <div className={styles['page-footer-misc']}>
                            <Link href="#">coordination@realfutbolinstitute.com</Link>
                        </div>

                        <div className={styles['page-footer-social-media']}>
                            <FacebookIcon sx={{ fontSize: 40 }} />
                            <InstagramIcon sx={{ fontSize: 40 }} />
                        </div>

                        <div className={styles['page-footer-cta']}>
                            <Button size='small' variant='1'>Register your interest</Button>
                        </div>
                    </div>


                    <div className={styles['page-footer-col']}>
                        <ul className={styles['page-footer-nav']}>
                            <li className={styles['page-footer-nav-item']}>
                                <Link href="#">About Us</Link>
                                <ul className={styles['page-footer-subnav']}>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">Overview</Link>
                                    </li>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">History</Link>
                                    </li>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">Philosophy</Link>
                                    </li>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">Philosophy</Link>
                                    </li>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">Philosophy</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles['page-footer-nav-item']}>
                                <Link href="#">Programs</Link>
                                <ul className={styles['page-footer-subnav']}>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">All Programs</Link>
                                    </li>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">Initiation</Link>
                                    </li>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">Initiation</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles['page-footer-nav-item']}>
                                <Link href="#">Blog</Link>
                                <ul className={styles['page-footer-subnav']}>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">All Programs</Link>
                                    </li>
                                    <li className={styles['page-footer-subnav-item']}>
                                        <Link href="#">Initiation</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles['page-footer-nav-item']}>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
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
