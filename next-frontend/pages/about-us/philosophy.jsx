import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import IconTextLinkGroup from '../../components/IconTextLinkGroup';
import LinkGroup from '../../components/LinkGroup';
import IconTextTileGroup from '../../components/IconTextTileGroup';
import TextBlock from '../../components/TextBlock';
import StatisticsBlock from '../../components/StatisticsBlock';
import Banner from '../../components/Banner';
import RegisterInterestCard from '../../components/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
import TextImageCard from '../../components/TextImageCard';
import QuoteBlock from '../../components/QuoteBlock';
import Breadcrumb from '../../components/Breadcrumb';

import { getPageData, getLayoutData } from '../../utils/api';

const Philosophy = ({ pageData, layoutData }) => {
    const [
        headerBanner,
        textBlock1,
        iconTextTile1,
        textImage1,
        textBlockExtra,
        iconTextLink1,
        textImage2,
        textBlock2,
        iconTextLink2,
        textImage3,
        banner,
    ] = pageData.attributes.content;
    return (
        <PageWrapper layoutData={layoutData}>
            <PageHeader title={headerBanner.banner_text} />

            <Breadcrumb
                sectionData={{
                    data: [
                        {
                            text: 'Home',
                            link: '/home',
                        },
                        {
                            text: 'About Us',
                            link: '/about-us',
                        },
                        {
                            text: 'Philosophy',
                            link: '/about-us/philosophy',
                        },
                    ],
                }}
            />

            <TextBlock sectionData={textBlock1}></TextBlock>

            <IconTextTileGroup sectionData={iconTextTile1} />

            <TextImageCard sectionData={textImage1} />

            <TextBlock
                sectionData={textBlockExtra}
                wrapperOptions={{ bgcolor: '#010a4f', spaceBtm: '0' }}
            ></TextBlock>

            <IconTextLinkGroup
                sectionData={iconTextLink1}
                wrapperOptions={{ bgcolor: '#010a4f', spaceTop: '0' }}
            />

            <TextImageCard sectionData={textImage2} />

            <TextBlock
                sectionData={textBlock2}
                wrapperOptions={{ bgcolor: '#fff', spaceBtm: '0' }}
            />

            <IconTextLinkGroup
                sectionData={iconTextLink2}
                wrapperOptions={{ bgcolor: '#fff' }}
            />

            <TextImageCard sectionData={textImage3} />

            <Banner sectionData={banner} />

            {/* 
            
            TODO: work on Link Group during navigation

            NOTE: should work automatically 

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
            </SectionWrapper> */}

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'philosophy' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default Philosophy;
