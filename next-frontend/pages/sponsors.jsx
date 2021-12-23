import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import LinkGroup from '../components/LinkGroup/';
import TextBlock from '../components/TextBlock';
import SponsorDetailBlock from '../components/SponsorDetailBlock';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import RegisterInterestCard from '../components/global/RegisterInterestCard';
import PageHeader from '../components/global/PageHeader';

export default function Teams() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='Sponsors' />

            <SectionWrapper>
                <TextBlock
                    h3="The people who make RFI great"
                >
                    Throughout its proud history our team has built a deep and lasting kinship with communities in RFI.
                </TextBlock>
            </SectionWrapper>


            <SectionWrapper>
                <SponsorDetailBlock
                    sponsorsData={[
                        {
                            type: 'Gold',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Gold',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Silver',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Bronze',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Bronze',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Bronze',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                    ]}
                >
                </SponsorDetailBlock>
            </SectionWrapper>


            <SectionWrapper>
                <LinkGroup
                    data={[
                        {
                            text: 'History',
                            link: '#',
                        },
                        {
                            text: 'Philosophy',
                            link: '#',
                        },
                        {
                            text: 'Success stories',
                            link: '#',
                        },
                        {
                            text: 'Sponsors',
                            link: '#',
                        },
                        {
                            text: 'Success stories',
                            link: '#',
                        },
                    ]}
                />
            </SectionWrapper>

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>

            <Footer />
        </PageWrapper>
    );
}

