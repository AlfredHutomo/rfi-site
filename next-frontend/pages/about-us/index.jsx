import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import Breadcrumb from '../../components/Breadcrumb';
import ProfileCardList from '../../components/ProfileCardList';
import IconTextLinkGroup from '../../components/IconTextLinkGroup';
import TextBlock from '../../components/sections/TextBlock';
import { InfoGridTwo } from '../../components/InfoGrid/';
import SponsorBlock from '../../components/SponsorBlock/';
import RegisterInterestCard from '../../components/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
import StatisticsBlock from '../../components/StatisticsBlock/';
import TextImageCard from '../../components/TextImageCard/';
import { homeDefaultData } from '../../utils/default';
import { fetchAPI } from '../../utils/api';
import { getPageData, getLayoutData } from '../../utils/api';
import delve from 'dlv';

const AboutUs = (props) => {
    const [
        banner,
        textBlock1,
        gridInfo,
        peopleHighlight,
        statistics,
        textImage,
        textBlock2,
        sponsors,
        textBlock3,
        policy,
    ] = props.pageData.attributes.content;

    return (
        <PageWrapper layoutData={props.layoutData}>
            <PageHeader title={banner.banner_text} />
            {/* TODO: Breadcrumb is crumbly */}
            <Breadcrumb
                sectionData={{
                    data: [
                        {
                            text: 'Home',
                            link: '/',
                        },
                        {
                            text: 'About Us',
                            link: '/about-us',
                        },
                    ],
                }}
            />
            <TextBlock sectionData={textBlock1} />
            <InfoGridTwo sectionData={gridInfo} />
            <ProfileCardList sectionData={peopleHighlight} />
            <StatisticsBlock
                sectionData={statistics}
                wrapperOptions={{ bgcolor: '#fff' }}
            />
            <TextImageCard sectionData={textImage} />
            <TextBlock
                sectionData={textBlock2}
                wrapperOptions={{ spaceBtm: '0' }}
            />
            <SponsorBlock sectionData={sponsors} />
            <TextBlock
                sectionData={textBlock3}
                wrapperOptions={{ bgcolor: '#fff', spaceBtm: '0' }}
            />
            <IconTextLinkGroup
                sectionData={policy}
                wrapperOptions={{ bgcolor: '#fff' }}
            ></IconTextLinkGroup>
            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'about-us' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default AboutUs;