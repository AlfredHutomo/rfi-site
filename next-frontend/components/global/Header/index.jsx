import Image from 'next/image';
import styles from './header.module.scss';
import LogoImg from '../../../public/logo-with-text.svg';

import Link from 'next/link';

import Button from '../Button';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { checkValidURL } from '../../../utils/utils';

const LinkOnly = ({ navData }) => {
    const to = navData.isExternalLink
        ? checkValidURL(navData.url)
        : checkValidURL(navData.page.data.attributes.slug);

    return (
        <li className={styles['page-navigation-item']}>
            <Link href={to}>
                <a>{navData.displayName}</a>
            </Link>
        </li>
    );
};

const LinkDropDown = ({ navData }) => {
    const primaryUrl = checkValidURL(navData.url);

    const SubLinks = ({ data, parentUrl }) => {
        const { url, displayName, isExternalLink, page } = data;

        const secondaryUrl = isExternalLink
            ? checkValidURL(url)
            : primaryUrl + checkValidURL(page.data.attributes.slug);

        return (
            <li className={styles['page-navigation-subnav-item']}>
                <Link href={secondaryUrl}>
                    <a>{displayName}</a>
                </Link>
            </li>
        );
    };

    return (
        <li className={styles['page-navigation-item']}>
            <Link href={primaryUrl}>
                <a>{navData.displayName}</a>
            </Link>

            <ul className={styles['page-navigation-subnav']}>
                {navData.links.map((link, i) => (
                    <SubLinks key={i} data={link} parentUrl={primaryUrl} />
                ))}
            </ul>
        </li>
    );
};

const ProgramsDropdown = ({ navData }) => {
    const { displayName, programs } = navData;

    const SubLinks = ({ data }) => {
        const { name, slug } = data.attributes;

        const secondaryUrl = checkValidURL('/programs/' + slug);

        return (
            <li className={styles['page-navigation-subnav-item']}>
                <Link href={secondaryUrl}>
                    <a>{name}</a>
                </Link>
            </li>
        );
    };

    return (
        <li className={styles['page-navigation-item']}>
            <Link href={'/programs'}>
                <a>{displayName}</a>
            </Link>

            <ul className={styles['page-navigation-subnav']}>
                {programs.data.map((program, i) => (
                    <SubLinks key={i} data={program} />
                ))}
            </ul>
        </li>
    );
};

const linkComponents = {
    ComponentElementsLinkDropdown: LinkDropDown,
    ComponentElementsProgramsDropdown: ProgramsDropdown,
    ComponentElementsLink: LinkOnly,
};

const NavElement = ({ navItem }) => {
    // Prepare the component
    const NavComponent = linkComponents[navItem.__typename];

    if (!NavComponent) {
        return null;
    }

    // Display the section
    return <NavComponent navData={navItem} />;
};

const HeaderButtons = ({ data }) => {
    const { displayName, isExternalLink, url, page, variation } = data;

    const primaryUrl = isExternalLink
        ? checkValidURL(url)
        : checkValidURL(page.data.attributes.slug);

    const variant = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
    };

    return (
        <Button size='small' variant={variant[variation]} to={primaryUrl}>
            {displayName}
        </Button>
    );
};

const Header = ({ headerData }) => {
    // const links = ['About Us', 'Our programs', 'Blog', 'Contact'];
    const [mobileMenuActive, setMobileMenu] = useState(false); // note: same as var active = false in v js
    const { logo, navigation, announcement, buttons } = headerData;

    const toggleMobileMenu = () => {
        setMobileMenu((state) => !state); //reading for sam https://reactjs.org/docs/hooks-state.html
    };

    return (
        <div className={styles['page-header-wrapper']}>
            {announcement !== null && (
                <div className={styles['page-header-banner']}>
                    <div className={styles['page-header-banner-content']}>
                        {announcement}
                    </div>
                </div>
            )}

            <header className={styles['page-header-main']}>
                <div className={styles['page-header']}>
                    <div className={styles['page-header-logo']}>
                        {logo != null ? (
                            <Link href={'/'}>
                                <a>
                                    <Image
                                        src={logo.data.attributes.url}
                                        width={logo.data.attributes.width}
                                        height={logo.data.attributes.height}
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
                            {navigation.map((navItem, i) => (
                                <NavElement
                                    key={`${navItem.__typename}__${i}`}
                                    navItem={navItem}
                                />
                            ))}
                        </ul>

                        <div className={styles['page-navigation-buttons']}>
                            {buttons.map((button, i) => (
                                <HeaderButtons key={i} data={button} />
                            ))}
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
