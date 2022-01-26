import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import IconTextLinkGroup from '../../components/sections/IconTextLinkGroup';
import LinkGroup from '../../components/sections/LinkGroup';
import IconTextTileGroup from '../../components/IconTextTileGroup';
import TextBlock from '../../components/sections/TextBlock';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
import ProfileCardList from '../../components/sections/ProfileCardList';
import Breadcrumb from '../../components/Breadcrumb';
//import SectionWrapper from '../components/global';

import StatisticsBlock from '../../components/sections/StatisticsBlock';
import TextImageCard from '../../components/sections/TextImageCard';
import QuoteBlock from '../../components/sections/QuoteBlock';

import { getPageData, getLayoutData } from '../../utils/api';

//TODO: complete finish this page back and front
const Team = (props) => {
    const [headerBanner, textBlock1, coachesAssistant, stats, quote, commitee] =
        props.pageData.attributes.content;
    return (
        <PageWrapper layoutData={props.layoutData}>
            <PageHeader title={headerBanner.banner_text} />

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
                        {
                            text: 'Teams',
                            link: '/about-us/teams',
                        },
                    ],
                }}
            />

            <TextBlock sectionData={textBlock1}></TextBlock>

            <ProfileCardList sectionData={coachesAssistant} />

            <StatisticsBlock
                sectionData={stats}
                wrapperOptions={{ bgcolor: '#010A4F' }}
            ></StatisticsBlock>

            <QuoteBlock sectionData={quote}></QuoteBlock>

            <ProfileCardList sectionData={commitee} />

            <SectionWrapper>
                <LinkGroup
                    heading='Learn more about RFI'
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
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'team' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default Team;
