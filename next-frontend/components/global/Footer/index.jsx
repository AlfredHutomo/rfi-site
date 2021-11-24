import Image from 'next/dist/client/image';
import styles from './footer.module.scss';
import LogoText from '../../../public/Logo_With_Text.svg';

import Button from '../Button';

const Footer = () => {
    const links = ['About Us', 'Our programs', 'Blog', 'Contact'];

    const logo_placeholder = {
        width: '54px',
        height: '54px',
        backgroundColor: 'grey',
    };

    return <footer></footer>;
};

export default Footer;
