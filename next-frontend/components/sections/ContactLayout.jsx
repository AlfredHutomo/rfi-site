import SectionWrapper from '../global/SectionWrapper';
import ContactForm from '../ContactForm';
import InfoTileList from '../InfoTileList';
import LocationBlock from '../LocationBlock';

import { getContactData } from '../../utils/api';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import MailBoxSVG from '../ContactForm/mailbox.svg';
import TextBlock from './TextBlock';
import Button from '../global/Button';

const ContactLayout = (props) => {
    const [data, setData] = useState({});
    const [contactSubmitted, setContactSubmitted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const contactData = await getContactData();
            setData(contactData.attributes);
        };

        fetchData();
    }, []);

    return (
        <>
            {contactSubmitted ? (
                <div
                    style={{
                        display: 'grid',
                        placeItems: 'center',
                        margin: '120px 20px',
                    }}
                >
                    <Image src={MailBoxSVG} alt='mailbox svg' />
                    <TextBlock
                        sectionData={{
                            isDarkBackground: false,
                            heading: 'Hooray.',
                            headingType: 'h1',
                            description:
                                'Your message has been sent to our team and we’ll be get back to you in a while.',
                        }}
                    />
                    <Button to='/'>Back to homepage</Button>
                </div>
            ) : (
                <>
                    <SectionWrapper options={{ isTwoColumns: true }}>
                        <ContactForm
                            heading='Please fill in the form below to get in touch with our team'
                            onSubmitSuccess={setContactSubmitted}
                        />
                        <InfoTileList
                            data={{
                                contacts: data.contactList,
                                socials: data.socialMediaList,
                            }}
                        />
                    </SectionWrapper>

                    <SectionWrapper>
                        <LocationBlock
                            preheading='Location'
                            heading={'Gladstone Park Reserve'}
                            buttonText='Get directions'
                            buttonLink='https://www.google.com.au/maps/place/Gladstone+Park+Reserve/@-37.6879089,144.8852434,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65a30e3983503:0xf04567605316830!8m2!3d-37.6879132!4d144.8874321'
                        >
                            {data.addressLocationDescription}
                        </LocationBlock>
                    </SectionWrapper>
                </>
            )}
        </>
    );
};

export default ContactLayout;
