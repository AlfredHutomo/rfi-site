import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

import HeroBanner from '../components/HeroBanner/';
import TextBlock from '../components/TextBlock/';
import USPBanner from '../components/USPBanner/';
import ProgramList from '../components/ProgramList/';
import QuoteBlock from '../components/QuoteBlock/';
import SponsorBlock from '../components/SponsorBlock/';
import { InfoGrid } from '../components/InfoGrid/';
import FAQAccordion from '../components/FAQAccordion/';
import RegisterInterestCard from '../components/RegisterInterestCard';

import { fetchAPI } from '../utils/api';
import { homeDefaultData } from '../utils/default';

const Home = (props) => {
    const [hero, ourPrograms] = props.pageData.attributes.content;

    return (
        <PageWrapper>
            <Header />
            <HeroBanner
                //imageDesktop="https://source.unsplash.com/random/900×900"
                heading={hero.heading}
                button1Text='Learn more'
                button1Link='#'
                button2Text='Register Interest'
                button2Link='#'
            />

            <SectionWrapper spaceTop='0' spaceBtm='0'>
                <USPBanner
                    offsetPos
                    data={[
                        {
                            icon: 'location_on',
                            description:
                                'Who could you become? With a number of different programs in RFI, the opportunities to train like a pro player continue to grow and evolve.',
                        },
                        {
                            icon: 'track_changes',
                            description:
                                'Who could you become? With a number of different programs in RFI, the opportunities to train like a pro player continue to grow and evolve.',
                        },
                        {
                            icon: 'people_outline',
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
                <InfoGrid />
            </SectionWrapper>

            <SectionWrapper bgcolor='#e5e5e5'>
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

            <SectionWrapper spaceBtm='0'>
                <TextBlock h2='Proudly supported by'>
                    Their generosity and support of our football development
                    program is acknowledged and very much appreciated.
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper>
                <SponsorBlock
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
                />
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
            <Footer />
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    try {
        const respond = await fetchAPI('/pages/6', {
            populate: [
                'content.hero_card',
                'content.programs.tags',
                'content.sponsor',
            ],
        });

        console.log(respond);

        return {
            props: {
                pageData: respond.data,
            },
        };
    } catch (error) {
        return {
            props: {
                // default data goes here
                pageData: homeDefaultData,
            },
        };
    }
};

export default Home;
