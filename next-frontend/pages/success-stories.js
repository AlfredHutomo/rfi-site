import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import TextBlock from '../components/TextBlock';
import LinkGroup from '../components/LinkGroup/';
import Banner from '../components/Banner';
import RegisterInterestCard from '../components/RegisterInterestCard';
import PageHeader from '../components/global/PageHeader';

//import SectionWrapper from '../components/global';

import StatisticsBlock from '../components/StatisticsBlock/';
import TextImageCard from '../components/TextImageCard/';
import QuoteBlock from '../components/QuoteBlock/';

export default function SuccessStories() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='Success Stories' />


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
                    success stories.
                </StatisticsBlock>
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    //image="https://source.unsplash.com/random/300×300"
                    isVerticalCentreAlign
                    heading="Becoming Melbourne City's second youngest debutant"
                    buttonLink='#'
                    buttonText='Read More'
                >
                    <p>
                        Max spent his key development years at RFI, where he
                        established himself as a leading talent in Melbourne.
                        Together with his teammates from childhood at RFI, he
                        bossed the NPL system until he was recruited by
                        Melbourne City. For us it’s not surprising that at the
                        tender age of 15 he’s already an outstanding talent, we
                        know he will soon represent Australia and serves as an
                        inspiration to the current RFI players.
                    </p>
                    <p>this is a test</p>
                </TextImageCard>
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    isImageOnRight
                    isVerticalCentreAlign
                    preHeading='Development'
                    heading="Becoming Melbourne City's second youngest debutant"
                    buttonLink='#'
                    buttonText='Read More'
                >
                    <p>
                        Max spent his key development years at RFI, where he
                        established himself as a leading talent in Melbourne.
                        Together with his teammates from childhood at RFI, he
                        bossed the NPL system until he was recruited by
                        Melbourne City. For us it’s not surprising that at the
                        tender age of 15 he’s already an outstanding talent, we
                        know he will soon represent Australia and serves as an
                        inspiration to the current RFI players.
                    </p>
                    <p>this is a test</p>
                </TextImageCard>
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    //image="https://source.unsplash.com/random/300×300"
                    isVerticalCentreAlign
                    heading="Becoming Melbourne City's second youngest debutant"
                    buttonLink='#'
                    buttonText='Read More'
                >
                    <p>
                        Max spent his key development years at RFI, where he
                        established himself as a leading talent in Melbourne.
                        Together with his teammates from childhood at RFI, he
                        bossed the NPL system until he was recruited by
                        Melbourne City. For us it’s not surprising that at the
                        tender age of 15 he’s already an outstanding talent, we
                        know he will soon represent Australia and serves as an
                        inspiration to the current RFI players.
                    </p>
                    <p>this is a test</p>
                </TextImageCard>
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
                <LinkGroup
                    heading="Learn more about RFI"
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

            <Banner />

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>

            <Footer />
        </PageWrapper>
    );
}
