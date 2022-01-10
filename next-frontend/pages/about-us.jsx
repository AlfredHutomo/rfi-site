import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import ProfileCardList from '../components/ProfileCardList';
import IconTextLinkGroup from '../components/IconTextLinkGroup';
import TextBlock from '../components/TextBlock';
import { InfoGrid } from '../components/InfoGrid/';
import SponsorBlock from '../components/SponsorBlock/';
import RegisterInterestCard from '../components/RegisterInterestCard';
import PageHeader from '../components/global/PageHeader';
import StatisticsBlock from '../components/StatisticsBlock/';
import TextImageCard from '../components/TextImageCard/';

export default function AboutUs() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='About Us' />

            <SectionWrapper>
                <TextBlock
                    h3="RFI takes pride in bringing to Australia the finest in international youth football development."
                >
                    Our objective is to provide our players with nothing but the best football experience possible, the Real experience. It consists of all the necessary formation and resources to develop a professional career just as much as enabling a healthy sporting life and habits for the everlasting enjoying of this beautiful game.
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper>
                <InfoGrid />
            </SectionWrapper>

            <SectionWrapper>
                <ProfileCardList
                    //isMobileSlider
                    heading='This is heading'
                    data={[
                        {
                            name: 'Joe Smith',
                            title: 'RFI Player',
                        },
                        {
                            name: 'Joe Smith',
                            title: 'RFI Player',
                        },
                        {
                            name: 'Joe Smith',
                            title: 'RFI Player',
                        },
                        {
                            name: 'Warwick Rakesh',
                            title: 'RFI Player',
                        },
                        {
                            name: 'Agrafena Zorro',
                            title: 'RFI Player',
                        },
                    ]}
                >
                    This is some content
                </ProfileCardList>
            </SectionWrapper>

            <SectionWrapper bgcolor='#fff'>
                <StatisticsBlock
                    heading='Real Success'
                    statsData={[
                        {
                            number: '300+',
                            content: 'RFI Player',
                        },
                        {
                            number: '120',
                            content: 'Players at A-League Academies',
                        },
                        {
                            number: '120',
                            content: 'Players at A-League Academies',
                        },
                        {
                            number: '120',
                            content: 'Players at A-League Academies',
                        },
                        {
                            number: '7',
                            content: 'Players ademies',
                        },
                        {
                            number: '1',
                            content: 'Players ademies',
                        },
                    ]}
                >
                    Our programs have been helping players with some amazing
                    Our programs have been helping players with some amazing
                    Our programs have been helping players with some amazing
                    success stories.
                </StatisticsBlock>
            </SectionWrapper>



            <SectionWrapper>
                <TextImageCard
                    isVerticalCentreAlign

                    //image="https://source.unsplash.com/random/300×300"
                    preHeading={"RFI successes"}
                    heading={"Becoming Melbourne City's second youngest debutant"}
                    buttonLink='http://www.google.com.au'
                    buttonText='Test'
                >
                    <p>
                        Max spent his key development years at RFI, where he established himself as a leading talent in Melbourne.  Together with his teammates from childhood at RFI, he bossed the NPL system until he was recruited by Melbourne City. For us it’s not surprising that at the tender age of 15 he’s already an outstanding talent, we know he will soon represent Australia and serves as an inspiration to the current RFI players.
                    </p>
                    <p>this is a test</p>
                </TextImageCard>

            </SectionWrapper>


            <SectionWrapper
                spaceBtm="0"
            >
                <TextBlock
                    h2="Our sponsors make RFI possible"
                >
                    Their generosity and support of our football development program is acknowledged and very much appreciated.
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



            <SectionWrapper
                bgcolor="#fff"
                spaceBtm="0"
            >
                <TextBlock
                    h2="Our Policy"
                >
                    It's important to RFI to uphold ethical and behavioual standards. If you'd like to know more, have a look at the policies below, and get in touch if you can’t find what you're looking for.
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper bgcolor="#fff">
                <IconTextLinkGroup
                    data={[
                        {
                            icon: 'icon1',
                            heading: 'Club Policy',
                            linkText: 'Read Policy',
                            linkUrl: '#',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Anti-Bullying',
                            linkText: 'Read Policy',
                            linkUrl: '#',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Anti-Racism',
                            linkText: 'Read Policy',
                            linkUrl: '#',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Equal Opportunity',
                            linkText: 'Read Policy',
                            linkUrl: '#',
                        },
                    ]}
                >
                </IconTextLinkGroup>
            </SectionWrapper>



            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>

            <Footer />
        </PageWrapper>
    );
}

