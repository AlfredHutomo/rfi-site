import Image from 'next/dist/client/image';
import styles from './footer.module.scss';
import LogoImg from '../../../public/logo-no-text.svg';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Button from '../Button';
import Subscription from './Subscription';

import { checkValidURL } from '../../../utils/utils';

const LinkOnly = ({ navData }) => {
    const primaryUrl = navData.isExternalLink
        ? checkValidURL(navData.url)
        : checkValidURL(navData.page.data.attributes.slug);

    return (
        <li className={styles['page-footer-nav-item']}>
            <Link href={primaryUrl}>{navData.displayName}</Link>
        </li>
    );
};

const LinkDropDown = ({ navData }) => {
    const primaryUrl = checkValidURL(navData.url);

    const SubLinks = ({ data }) => {
        const { url, displayName, isExternalLink, page } = data;

        const secondaryUrl = isExternalLink
            ? checkValidURL(url)
            : checkValidURL(page.data.attributes.url);

        return (
            <li className={styles['page-footer-subnav-item']}>
                <Link href={secondaryUrl}>
                    <a>{displayName}</a>
                </Link>
            </li>
        );
    };

    return (
        <li className={styles['page-footer-nav-item']}>
            <Link href={primaryUrl}>
                <a>{navData.displayName}</a>
            </Link>

            <ul className={styles['page-footer-subnav']}>
                {navData.links.map((link, i) => (
                    <SubLinks key={i} data={link} />
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
            <li className={styles['page-footer-subnav-item']}>
                <Link href={secondaryUrl}>
                    <a>{name}</a>
                </Link>
            </li>
        );
    };

    return (
        <li className={styles['page-footer-nav-item']}>
            <Link href={'/programs'}>
                <a>{displayName}</a>
            </Link>

            <ul className={styles['page-footer-subnav']}>
                <li className={styles['page-footer-subnav-item']}>
                    <Link href={'/programs'}>
                        <a>All Programs</a>
                    </Link>
                </li>
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

const Footer = ({ footerData }) => {
    const { name, message, email, logo, footerMenu, copyrightInfo } =
        footerData;

    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];

    return (
        <footer className={styles['page-footer-wrapper']}>
            <div className={styles['page-footer-top']}>
                <div className={styles['page-footer']}>
                    <div className={styles['page-footer-col']}>
                        <Image
                            src={logo.data?.attributes.url || LogoImg}
                            width='94'
                            height='94'
                            alt='Real Futbol Institute'
                        />
                        <h4 className={'h4 ' + styles['page-footer-logo-text']}>
                            {name}
                            <span>{message}</span>
                        </h4>

                        <div className={styles['page-footer-misc']}>
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>

                        <div className={styles['page-footer-social-media']}>
                            <Link href="https://www.facebook.com/RealFutbolInstitute/">
                                <a><FacebookIcon sx={{ fontSize: 40 }} /></a>
                            </Link>
                            <Link href="https://www.instagram.com/realfutbolinstitute">
                                <a><InstagramIcon sx={{ fontSize: 40 }} /></a>
                            </Link>
                        </div>

                        <div className={styles['page-footer-cta']}>
                            <Button to={'/register'} className={styles['page-footer-cta-button']}  size='small' variant='1'>
                                Register your interest
                            </Button>
                        </div>
                    </div>

                    <div className={styles['page-footer-col']}>
                        <ul className={styles['page-footer-nav']}>
                            {footerMenu.map((items, i) => (
                                <NavElement key={i} navItem={items} />
                            ))}
                        </ul>
                    </div>

                    <div className={styles['page-footer-col']}>
                        <Subscription />
                    </div>
                </div>
            </div>

            <div className={styles['page-footer-btm']}>
                <div className={styles['page-footer']}>
                    <Link href='/terms-and-conditions'>Terms and Conditions</Link>

                    <div className={styles['page-footer-copyright-info']}>
                        {copyrightInfo}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
