import Image from 'next/image';
import styles from './header.module.scss';
import LogoImg from '../../../public/logo-with-text.svg';

import Link from 'next/link';

import SectionWrapper from '../SectionWrapper';
import Button from '../Button';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = (props) => {
    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];
    const [mobileMenuActive, setMobileMenu] = useState(false); // note: same as var active = false in v js
    const { logo } = props;

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
                        {props.logo != null ? (
                            <Link href={'/'}>
                                <a>
                                    <Image
                                        src={props.logo}
                                        width='200'
                                        height='100'
                                        alt=''
                                    />
                                </a>
                            </Link>
                        ) : (
                            <Link href={'/'}>
                                <a>
                                    <Image
                                        src={LogoImg}
                                        layout='responsive'
                                        alt=''
                                    />
                                </a>
                            </Link>
                        )}
                    </div>

                    <nav
                        className={`${styles['page-navigation-wrapper']} ${
                            mobileMenuActive ? styles['active'] : ''
                        }`}
                    >
                        <div
                            className={styles['page-navigation-close']}
                            onClick={toggleMobileMenu}
                        >
                            <CloseIcon sx={{ fontSize: 40 }} />
                        </div>
                        <ul className={styles['page-navigation']}>
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    className={styles['page-navigation-item']}
                                >
                                    <Link href={'#'} passHref>
                                        <a>{link}</a>
                                    </Link>

                                    <ul
                                        className={
                                            styles['page-navigation-subnav']
                                        }
                                    >
                                        <li
                                            className={
                                                styles[
                                                    'page-navigation-subnav-item'
                                                ]
                                            }
                                        >
                                            <Link href={'#'}>
                                                <a>Test 1</a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles[
                                                    'page-navigation-subnav-item'
                                                ]
                                            }
                                        >
                                            <Link href={'#'}>
                                                <a>Test 1</a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles[
                                                    'page-navigation-subnav-item'
                                                ]
                                            }
                                        >
                                            <Link href={'#'}>
                                                <a>Test 1</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            ))}
                        </ul>

                        <div className={styles['page-navigation-buttons']}>
                            <Button size='small' variant={'3'}>
                                Member portal
                            </Button>
                            <Button size='small' variant={'1'}>
                                Register
                            </Button>
                        </div>
                    </nav>

                    <div className={styles['page-navigation-icon']}>
                        {mobileMenuActive ? (
                            <></>
                        ) : (
                            <MenuIcon
                                sx={{ fontSize: 40 }}
                                onClick={toggleMobileMenu}
                            />
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
