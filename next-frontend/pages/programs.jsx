import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import ProgramList from '../components/ProgramList/';
import TextBlock from '../components/TextBlock';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import RegisterInterestCard from '../components/global/RegisterInterestCard';
import PageHeader from '../components/global/PageHeader';

export default function Programs() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='Programs' />

            <SectionWrapper>
                <TextBlock
                    h3="The people who make RFI great"
                >
                    Throughout its proud history our team has built a deep and lasting kinship with communities in RFI.
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper>
                <ProgramList
                    programData={[
                        {
                            image: '',
                            name: 'RFI Initation Program 1',
                            tags: ['ages: 10 - 19', 'beginner'],
                            description:
                                'For players born 2011 and after, who wish to get started in football and advance quickly1.',
                            cta: 'Learn More 1',
                            link: '#',
                        },
                        {
                            image: '',
                            name: 'RFI Initation Program 3',
                            tags: ['ages: 10 - 19', 'beginner'],
                            description:
                                'For players born 2011 and after, who wish to get started in football and advance quickly1.',
                            cta: 'Learn More 1',
                            link: '#',
                        },
                        {
                            image: '',
                            name: 'RFI Initation Program 2',
                            tags: ['ages: 10 - 19', 'beginner'],
                            description:
                                'For players born 2011 and after, who wish to get started in football and advance quickly2.',
                            cta: 'Learn More 2',
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

