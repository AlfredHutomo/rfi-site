import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const icons = {
    facebook: FacebookIcon,
    intagram: InstagramIcon,
    linkedIn: LinkedInIcon,
    twitter: TwitterIcon,
    whatsapp: WhatsAppIcon,
    youtube: YouTubeIcon,
    pinterest: PinterestIcon,
    website: LanguageIcon,
};

const SocialIcons = ({ children }) => {
    const SelectedIcons = icons[children];

    if (!SelectedIcons) {
        return null;
    }

    return <SelectedIcons className={`${children}__icon`} />;
};

export default SocialIcons;
