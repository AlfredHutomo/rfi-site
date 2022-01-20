import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';

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
    const [
        hero,
        uspBanner,
        textBlock1,
        ourPrograms,
        infoGrid,
        quoteBlock,
        textBlock2,
        sponsors,
    ] = props.pageData.attributes.content;

    return (
        <PageWrapper layoutData={props.layoutData}>
            <HeroBanner data={hero} />

            <USPBanner
                wrapperOptions={{ spaceTop: '0', spaceBtm: '0' }}
                offsetPos
                data={uspBanner.block}
            />

            <TextBlock
                heading={textBlock1.heading}
                headingType={textBlock1.headingType}
                description={textBlock1.description}
            />

            <ProgramList data={ourPrograms} />

            <InfoGrid sectionData={infoGrid} />

            <QuoteBlock
                avatar={quoteBlock.avatar.data.attributes.url}
                author={quoteBlock.authorName}
                role={quoteBlock.authorRole}
            >
                {quoteBlock.quote}
            </QuoteBlock>

            <TextBlock
                wrapperOptions={{ spaceBtm: '0' }}
                heading={textBlock2.heading}
                headingType={textBlock2.headingType}
                description={textBlock2.description}
            />

            <SectionWrapper>
                <SponsorBlock
                    sectionData={sponsors}
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
};

export default Home;
