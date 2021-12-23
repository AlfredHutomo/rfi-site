import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import TextBlock from '../components/TextBlock';
import IconTextLinkGroup from '../components/IconTextLinkGroup';
import ProgramDetailTiles from '../components/ProgramDetailTiles';
import TextImageCard from '../components/TextImageCard/';
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
                <TextImageCard
                    //image="https://source.unsplash.com/random/300×300"
                    preHeading={"What to expect"}
                    heading={"Get started in football and advance quickly"}
                    buttonLink='#'
                    buttonText='Test'
                >
                    <p>
The activity will run alongside our other programs, running for 10 months from early February to late November. We will have 2 established groups in this program:
                    </p>
                    <p>this is a test</p>
                </TextImageCard>

            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    //image="https://source.unsplash.com/random/300×300"
                    preHeading={"Development Plan"}
                    heading={"Designed to support young players"}
                    buttonLink='#'
                    buttonText='Test'
                >
                    <p>
                        Max spent his key development years at RFI, where he established himself as a leading talent in Melbourne.  Together with his teammates from childhood at RFI, he bossed the NPL system until he was recruited by Melbourne City. For us it’s not surprising that at the tender age of 15 he’s already an outstanding talent, we know he will soon represent Australia and serves as an inspiration to the current RFI players.
                    </p>
                    <p>this is a test</p>
                </TextImageCard>

            </SectionWrapper>



            <SectionWrapper bgcolor="#010a4f">
                <IconTextLinkGroup
                    isDarkBackground
                    data={[
                        {
                            icon: 'icon1',
                            heading: 'Age and level-specific planning',
                            content: 'Providing the right challenge to each player according to his/her development stage.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Once-per-week training',
                            content: 'With sessions lasting between 60 to 75 minutes (at coaches’ discretion).',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Free 2 session trial',
                            content: 'New players can try out the program for 2 sessions.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'RFI professional coaching staff',
                            content: 'It is run by the RFI professional Coaching Staff involved in the Development Program.',
                        },
                    ]}
                >
                </IconTextLinkGroup>
            </SectionWrapper>

            <SectionWrapper>
                <ProgramDetailTiles />
            </SectionWrapper>

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>

            <Footer />
        </PageWrapper>
    );
}

