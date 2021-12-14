import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import RegisterInterestCard from '../components/global/RegisterInterestCard';

import HomeHero from '../components/HomeHero/';
import TextBlock from '../components/TextBlock/';
import USPBanner from '../components/USPBanner/';
import ProgramList from '../components/ProgramList/';
import QuoteBlock from '../components/QuoteBlock/';
import SponsorBlock from '../components/SponsorBlock/';
import { InfoGrid } from '../components/InfoGrid/';
import FAQAccordion from '../components/FAQAccordion/';

import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        axios
            .get(
                'http://localhost:1337/api/home-page?populate[Hero][populate]=*'
            )
            .then((res) => console.log(res.data.data.attributes));
    }, []);

    return (
        <PageWrapper>
            <Header />

            <HomeHero
                //image="https://source.unsplash.com/random/900×900"
                button1Text='Learn more'
                button1Link='#'
                button2Text='Register Interest'
                button2Link='#'
            >
                The Future of Youth Football Development
            </HomeHero>

            <SectionWrapper>
                <USPBanner
                    data={[
                        {
                            icon: 'icon1',
                            description:
                                'Who could you become? With a number of different programs in RFI, the opportunities to train like a pro player continue to grow and evolve.',
                        },
                        {
                            icon: 'icon1',
                            description:
                                'Who could you become? With a number of different programs in RFI, the opportunities to train like a pro player continue to grow and evolve.',
                        },
                        {
                            icon: 'icon2',
                            description: 'adfasdfasdf',
                        },
                    ]}
                />
            </SectionWrapper>

            <SectionWrapper>
                <TextBlock h2='Our Program'>
                    Who could you become? With a number of different programs in
                    RFI, the opportunities to train like a pro player continue
                    to grow and evolve.
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper>
                <InfoGrid />
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

            <SectionWrapper bgcolor='#eee'>
                <QuoteBlock
                    avatar='https://source.unsplash.com/random/300×300'
                    author='Santiago Ortiz'
                    role='Coach, RFI'
                >
                    A LOT OF MEMORIES COME TO MY MIND AS A PLAYER, COACH, OR
                    FAN. THE BEST ONES ARE THOSE WHICH I LIVED AND SHARED WITH
                    PEOPLE.
                </QuoteBlock>
            </SectionWrapper>

            <SectionWrapper>
                <SponsorBlock
                    heading='Proudly supported by'
                    sponsorGold={[
                        {
                            name: 'Relab',
                            image: '',
                        },
                        {
                            name: 'Sponsor 1',
                            image: '',
                        },
                    ]}
                    sponsorSilver={[
                        {
                            image: 'https://source.unsplash.com/random/700x200',
                            name: 'Test1',
                            image: '',
                        },
                        {
                            name: 'Test1',
                            image: '',
                        },
                        {
                            name: 'Test1',
                            image: '',
                        },
                        {
                            name: 'Test2',
                            image: '',
                        },
                    ]}
                    button1Text='Become a sponsor'
                    button1Link='#'
                    button2Text='More about our sponsor'
                    button2Link='#'
                >
                    This is description
                </SponsorBlock>
            </SectionWrapper>

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>

            <SectionWrapper bgcolor='#1F265D'>
                <FAQAccordion
                    faqlists={[
                        {
                            question:
                                'How is the RFI Development Program structured?',
                            answer: 'this is test 1',
                        },
                        {
                            question: 'What is RFI’s approach?',
                            answer: 'Our approach is to focus on the individual, within the natural team setting and game environment. Our mentality is to focus on the individual, within the natural team setting and game environment.',
                        },
                    ]}
                ></FAQAccordion>
            </SectionWrapper>
            {/* <Footer /> */}
        </PageWrapper>
    );
}
