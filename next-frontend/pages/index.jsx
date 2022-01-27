import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';

import HeroBanner from '../components/sections/HeroBanner';
import TextBlock from '../components/sections/TextBlock';
import USPBanner from '../components/sections/USPBanner';
import ProgramList from '../components/sections/ProgramList';
import QuoteBlock from '../components/sections/QuoteBlock';
import SponsorBlock from '../components/sections/SponsorBlock';
import { InfoGrid } from '../components/sections/InfoGrid';
import FAQAccordion from '../components/sections/FAQAccordion';
import RegisterInterestCard from '../components/sections/RegisterInterestCard';

import { getLayoutData, getPageData } from '../utils/api';

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
        registerInterest,
        faq,
    ] = props.pageData.attributes.content;

    // wrapperOptions should be in sectionData for the dynamic pages

    return (
        <PageWrapper layoutData={props.layoutData}>
            <HeroBanner sectionData={hero} />

            <USPBanner
                sectionData={uspBanner}
                wrapperOptions={{
                    spaceTop: '0',
                    spaceBtm: '0',
                }}
            />

            <TextBlock sectionData={textBlock1} />
            <ProgramList sectionData={ourPrograms} />
            <InfoGrid sectionData={infoGrid} />

            <QuoteBlock sectionData={quoteBlock}></QuoteBlock>

            <TextBlock
                sectionData={textBlock2}
                wrapperOptions={{ spaceBtm: '0' }}
            />

            <SponsorBlock sectionData={sponsors} />

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>

            <FAQAccordion
                sectionData={faq}
                wrapperOptions={{ bgcolor: '#1F265D' }}
            ></FAQAccordion>
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
