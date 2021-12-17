import Image from 'next/dist/client/image';
import styles from './header.module.scss';
import LogoImg from '../../../public/logo-with-text.svg';

import Link from 'next/link';
import { MdMenu } from 'react-icons/md';

import SectionWrapper from '../SectionWrapper';
import Button from '../Button';
import { useState } from 'react';

const Header = () => {
    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];
    const [mobileMenuActive, setMobileMenu] = useState(false); // note: same as var active = false in v js

    const toggleMobileMenu = () => {
        setMobileMenu((state) => !state); //reading for sam https://reactjs.org/docs/hooks-state.html
    };

    return (
        <div className={styles['page-header-wrapper']}>
            <div className={styles['page-header-banner']}>
                <div className={styles['page-header-banner-content']}>
                    Celebrating 10 years in the game!
                </div>
            </div>

            <header className={styles['page-header-main']}>
                <div className={styles['page-header']}>
                    <div className={styles['page-header-logo']}>
                        <Image
                            src={LogoImg}
                            height={54}
                            width={202}
                            alt={''}
                        />
                    </div>

                    <nav className={`${styles['page-navigation-wrapper']} ${mobileMenuActive ? styles['active'] : ''}`}>
                        <div className={styles['page-navigation-close']} onClick={toggleMobileMenu}>
                            Close
                        </div>
                        <ul className={styles['page-navigation']}>
                            {links.map((link, i) => (
                                <li className={styles['page-navigation-item']}>
                                    <Link href={'#'} key={i} passHref={true}>
                                        <a>{link}</a>
                                    </Link>

                                    <ul className={styles['page-navigation-subnav']}>
                                        <li className={styles['page-navigation-subnav-item']}>
                                            <Link href={'#'}>
                                                <a>Test 1</a>
                                            </Link>
                                        </li>
                                        <li className={styles['page-navigation-subnav-item']}>
                                            <Link href={'#'}>
                                                <a>Test 1</a>
                                            </Link>
                                        </li>
                                        <li className={styles['page-navigation-subnav-item']}>
                                            <Link href={'#'}>
                                                <a>Test 1</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            ))}
                        </ul>

                        <div className={styles['page-navigation-buttons']}>
                            <Button size='small' variant={'3'}>Member portal</Button>
                            <Button size='small' variant={'1'}>Register</Button>
                        </div>
                    </nav>

                    <div className={styles['page-navigation-icon']}>
                        {mobileMenuActive ? (
                            <></>
                        ) : (
                            <>
                            <MdMenu onClick={toggleMobileMenu} />
                            Menu
                            </>
                        )}
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;

