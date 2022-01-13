import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import TextBlock from '../components/TextBlock';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import InfoTileList from '../components/InfoTileList';
import ContactForm from '../components/ContactForm';
import LocationBlock from '../components/LocationBlock';
import PageHeader from '../components/global/PageHeader';

export default function ContactUs() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='Contact Us' />

            <SectionWrapper>
                <TextBlock
                    h3="Get all the RFI latest news, event updates, program information and much more."
                >
                    some description
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper isTwoColumns>
                <ContactForm
                    heading="Please fill in the form below to get in touch with our team"
                />
                <InfoTileList
                    data={[
                        {
                            heading: '',
                            phone: '',
                            email: '',
                            content: '',
                        },
                    ]}
                />
            </SectionWrapper>

            <SectionWrapper>
                <LocationBlock
                    preheading="Location"
                    heading="Gladstone Park Reserve"
                    buttonText="Get directions"
                    buttonLink="#"
                >
                    The Gladstone Park Community Centre is located on South Circular Road, and hosts a number of community bodies, such as the basketball club and mothers' groups.
                </LocationBlock>
            </SectionWrapper>

            <Footer />
        </PageWrapper>
    );
}

