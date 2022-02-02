import SectionWrapper from '../global/SectionWrapper';
import ContactForm from '../ContactForm';
import InfoTileList from '../InfoTileList';
import LocationBlock from '../LocationBlock';

import { getContactData } from '../../utils/api';
import { useState, useEffect } from 'react';

const ContactLayout = (props) => {
    const [data, setData] = useState({});

    useEffect(async () => {
        const fetchData = async () => {
            const contactData = await getContactData();
            setData(contactData.attributes);
        };

        fetchData();
    }, []);

    return (
        <>
            <SectionWrapper options={{ isTwoColumns: true }}>
                <ContactForm heading='Please fill in the form below to get in touch with our team' />
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
                    buttonLink='#'
                >
                    {data.addressLocationDescription}
                </LocationBlock>
            </SectionWrapper>
        </>
    );
};

export default ContactLayout;
