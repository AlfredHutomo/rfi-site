import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import IconTextLinkGroup from '../components/IconTextLinkGroup/';
import LinkGroup from '../components/LinkGroup/';
import IconTextTileGroup from '../components/IconTextTileGroup/';
import TextBlock from '../components/TextBlock';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import RegisterInterestCard from '../components/RegisterInterestCard';
import PageHeader from '../components/global/PageHeader';
import ProfileCardList from '../components/ProfileCardList';

//import SectionWrapper from '../components/global';

import StatisticsBlock from '../components/StatisticsBlock/';
import TextImageCard from '../components/TextImageCard/';
import QuoteBlock from '../components/QuoteBlock/';

export default function Teams() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='Team' />

            <SectionWrapper>
                <TextBlock
                    h3="The people who make RFI great"
                >
                    Throughout its proud history our team has built a deep and lasting kinship with communities in RFI.
                </TextBlock>
            </SectionWrapper>


            <SectionWrapper>
                <ProfileCardList
                    //isMobileSlider
                    heading='Coaches & assistants'
                    data={[
                        {
                            //image: '',
                            name: 'Joe Smith',
                            title: 'RFI Player',
                            description: 'some description if any',
                            content: '<p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</b></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</p> ',
                        },
                        {
                            name: 'Joe Smith',
                            title: 'RFI Player',
                            description: 'some description if any',
                            content: '<p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</b></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</p> ',
                        },
                        {
                            name: 'Joe Smith',
                            title: 'RFI Player',
                            description: 'some description if any',
                            content: '<p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</b></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</p> ',
                        },
                        {
                            name: 'Warwick Rakesh',
                            title: 'RFI Player',
                            description: 'some description if any',
                            content: '<p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</b></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</p> ',
                        },
                        {
                            name: 'Agrafena Zorro 2',
                            title: 'RFI Player 2',
                            description: 'some description if any',
                            content: 'eatdsf',
                        },
                    ]}
                >
                    This is some content
                </ProfileCardList>
            </SectionWrapper>


            <SectionWrapper bgcolor='#010A4F'>
                <StatisticsBlock
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
                </StatisticsBlock>
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
                <ProfileCardList
                    //isMobileSlider
                    heading='The committee'
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
                            name: 'Warwick Rakesh',
                            title: 'RFI Player',
                            description: 'some description if any',
                            programs: [
                                {
                                    name: 'program 1',
                                    desc: 'for age 10 - 13',
                                },
                                {
                                    name: 'program 2',
                                    desc: 'for age 5 - 8',
                                },
                                {
                                    name: 'program 2 test test',
                                    desc: 'for age 5 - 8',
                                },
                                {
                                    name: 'program 2',
                                    desc: 'for age 5 - 8',
                                },
                            ],
                            content: '<p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</b></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nunc cras sit volutpat. Eu et pretium morbi quisque purus sagittis maecenas morbi nam. Aenean diam risus egestas id quis fusce.</p> ',
                        },
                    ]}
                >
                    This is some content
                </ProfileCardList>
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

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>

            <Footer />
        </PageWrapper>
    );
}

