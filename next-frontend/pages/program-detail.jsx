import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import HeroBanner from '../components/HeroBanner';
import TextBlock from '../components/TextBlock';
import TextTileBlockRow from '../components/TextTileBlockRow';
import IconTextLinkGroup from '../components/IconTextLinkGroup';
import ProgramDetailTiles from '../components/ProgramDetailTiles';
import TextImageCard from '../components/TextImageCard/';
import RegisterInterestCard from '../components/RegisterInterestCard';
import ProfileCardList from '../components/ProfileCardList';

export default function Programs() {
    return (
        <PageWrapper>
            <HeroBanner
                isContentOnRight
                heading='RFI Initiation program'
                button2Text='Register your interest'
                button2Link='#'
            >
                Designed for players who who wish to get started in football and
                advance quickly.
            </HeroBanner>

            <SectionWrapper spaceTop='0' spaceBtm='0'>
                <TextTileBlockRow
                    offsetPos
                    data={[
                        {
                            heading: 'For players aged 10-15',
                            content:
                                'We are pleased to announce the start of the 2019 Initiation Program, for players born 2011 and after, who wish to get started in football and advance quickly.',
                        },
                        {
                            heading: 'Train like pro players',
                            content:
                                'Advanced players can be invited to train with the Benjamines teams to increase their exposure to a more competitive environment and boost their development.',
                        },
                        {
                            heading: 'Slow and safe introduction',
                            content:
                                'To match situations, with detail and care put into the playing environment in which they are to participate.',
                        },
                    ]}
                />
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    isImageOnRight
                    //image="https://source.unsplash.com/random/300×300"
                    preHeading={'What to expect'}
                    heading={'Get started in football and advance quickly'}
                >
                    <p>
                        The activity will run alongside our other programs,
                        running for 10 months from early February to late
                        November. We will have 2 established groups in this
                        program:
                    </p>
                    <p>
                        <b>First Step</b>
                    </p>
                    <p>
                        To introduce players to the basics of the sport (basic
                        rules and principles such as scoring goals, ball exiting
                        the pitch, key ideas of the game).
                    </p>
                    <p>
                        <b>Advanced</b>
                    </p>
                    <p>
                        The activity will run alongside our other programs,
                        running for 10 months from early February to late
                        November. We will have 2 established groups in this
                        program:
                    </p>
                </TextImageCard>
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    //image="https://source.unsplash.com/random/300×300"
                    preHeading={'Development Plan'}
                    heading={'Designed to support young players'}
                    buttonLink='#'
                    buttonText='Test'
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

            <SectionWrapper bgcolor='#010a4f'>
                <IconTextLinkGroup
                    isDarkBackground
                    data={[
                        {
                            icon: 'icon1',
                            heading: 'Age and level-specific planning',
                            content:
                                'Providing the right challenge to each player according to his/her development stage.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Once-per-week training',
                            content:
                                'With sessions lasting between 60 to 75 minutes (at coaches’ discretion).',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Free 2 session trial',
                            content:
                                'New players can try out the program for 2 sessions.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'RFI professional coaching staff',
                            content:
                                'It is run by the RFI professional Coaching Staff involved in the Development Program.',
                        },
                    ]}
                ></IconTextLinkGroup>
            </SectionWrapper>

            <SectionWrapper>
                <ProgramDetailTiles />
            </SectionWrapper>

            <SectionWrapper>
                <ProfileCardList
                    isMobileSlider
                    heading='The Coaches'
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
                    Meet some of the key staff working at the Real Futbol
                    Institute for this program. It's a team effort behind the
                    scenes.
                </ProfileCardList>
            </SectionWrapper>

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>
        </PageWrapper>
    );
}
