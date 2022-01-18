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

//import SectionWrapper from '../components/global';

import StatisticsBlock from '../components/StatisticsBlock/';
import TextImageCard from '../components/TextImageCard/';
import QuoteBlock from '../components/QuoteBlock/';

export default function Philosophy() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='Philosophy' />

            <SectionWrapper>
                <TextBlock h3="We want to make a positive impact in our players' lives.">
                    RFI came to exist thanks to the ongoing and unconditional
                    support from families, and it must stand to protect and
                    empower its community for the sake of its young children and
                    the passionate coaches who will guide them.
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper>
                <IconTextTileGroup
                    data={[
                        {
                            icon: 'icon1',
                            heading: 'Mission',
                            content:
                                'To provide the best possible football development to young talented players in the Melbourne community.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Vision',
                            content:
                                'To be the best place for young players and coaches so we can all be the best we can be.',
                        },
                    ]}
                />
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    isImageOnRight
                    preHeading='What we do'
                    heading='Let us be totally clear: we are in the education business, not in the elite football one.'
                >
                    <p>
                        We do not work with players nor produce elite level
                        players who will become professionals, we work with kids
                        who have a passion for football and an above-average
                        skill level (holistically speaking). Our job is to
                        provide these children with the best possible education
                        we can give, through and for the sport.
                    </p>
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
                    ]}
                ></IconTextLinkGroup>
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    preHeading='What we do'
                    heading='We are driven by a sense of vocation; it leads us to undertake these tasks even with such high stakes. '
                >
                    As adults we may find enjoyment and fulfillment in coaching
                    or creating a great environment for the kids - we may even
                    think it’s our duty and responsibility. This is the first
                    reason behind our decisions: our own intrinsic motivation to
                    be a part of this. It’s important to be aware of what seems
                    natural and intuitive inside us, and ensure it is not
                    overlooked when we search our conscience.
                </TextImageCard>
            </SectionWrapper>

            <SectionWrapper bgcolor='#fff' spaceBtm='0'>
                <TextBlock h2='Our values'>
                    We are respectful, warm and friendly to each other, behaving
                    in the same way we want our players to do.
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper bgcolor='#fff'>
                <IconTextLinkGroup
                    data={[
                        {
                            icon: 'icon1',
                            heading: 'Program-centred approach',
                            content:
                                'all decisions made in every corner of the organisation should benefit or improve the conditions for player development.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Always do the right thing',
                            content:
                                'We aim to always act with integrity, being honest and transparent in what we do and why we do it, even if this leads to conflict or difficult situations.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Responsible for our actions',
                            content:
                                'Seeking to be positive role models, embodying the ethics that characterise us. In full awareness of our capacities, we go the extra mile to serve our mission and purpose.',
                        },
                        {
                            icon: 'icon1',
                            heading: 'Non-conformist perfectionism',
                            content:
                                'We seek to set an increasingly high standard, practicing a healthy non-conformist perfectionism.',
                        },
                    ]}
                ></IconTextLinkGroup>
            </SectionWrapper>

            <SectionWrapper>
                <TextImageCard
                    isImageOnRight
                    preHeading='What we do'
                    heading='Let us be totally clear: we are in the education business, not in the elite football one.'
                >
                    <p>
                        We do not work with players nor produce elite level
                        players who will become professionals, we work with kids
                        who have a passion for football and an above-average
                        skill level (holistically speaking). Our job is to
                        provide these children with the best possible education
                        we can give, through and for the sport.
                    </p>
                </TextImageCard>
            </SectionWrapper>

            <SectionWrapper>
                {
                    // <Image src="https://source.unsplash.com/random/1000x500" layout="fill" objectFit="cover" alt="" />}
                }
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
