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

import { getLayoutData, getPageData } from '../utils/api';
import delve from 'dlv';
import { homeDefaultData } from '../utils/default';

const Home = (props) => {
    const [hero, uspBanner, textBlock1, skip1, skip2, quoteBlock, textBlock2] =
        props.pageData.attributes.content;

    const header = delve(props.layoutData, 'header.data.attributes');

    console.log(header);

    return (
        <PageWrapper>
            <Header headerData={header} />

            <HeroBanner data={hero} />

            <USPBanner offsetPos data={uspBanner.block} />

            <TextBlock
                heading={textBlock1.heading}
                headingType={textBlock1.headingType}
                description={textBlock1.description}
            />

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
                    author={quoteBlock.auhtorName}
                    role={quoteBlock.authorRole}
                >
                    {quoteBlock.quote}
                </QuoteBlock>
            </SectionWrapper>

            <SectionWrapper spaceBtm='0' option={{ spaceBtm: '0' }}>
                <TextBlock
                    heading={textBlock2.heading}
                    headingType={textBlock2.headingType}
                    description={textBlock2.description}
                />
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
    const pageData = await getPageData({ slug: 'home' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };

    // try {
    //     const respond = await fetchAPI('/pages/6', {
    //         populate: [
    //             'content.hero_card',
    //             'content.block',
    //             'content.programs.tags',
    //             'content.sponsor',
    //             'content.personPhoto',
    //         ],
    //     });

    //     return {
    //         props: {
    //             pageData: respond.data,
    //         },
    //     };
    // } catch (error) {
    //     return {
    //         props: {
    //             // default data goes here
    //             pageData: homeDefaultData,
    //         },
    //     };
    // }
};

export default Home;
