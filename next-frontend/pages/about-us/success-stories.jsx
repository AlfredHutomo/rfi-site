import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import TextBlock from '../../components/sections/TextBlock';
import LinkGroup from '../../components/sections/LinkGroup';
import Banner from '../../components/sections/Banner';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
import Breadcrumb from '../../components/Breadcrumb';

import StatisticsBlock from '../../components/sections/StatisticsBlock';
import TextImageCard from '../../components/sections/TextImageCard';
import QuoteBlock from '../../components/sections/QuoteBlock';
import { getPageData, getLayoutData } from '../../utils/api';

const SuccessStories = (props) => {
    const [
        headerBanner,
        textBlock1,
        statistics,
        textImage1,
        textImage2,
        textImage3,
        banner,
        quote,
    ] = props.pageData.attributes.content;

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
                            text: 'Success Stories',
                            link: '/about-us/success-stories',
                        },
                    ],
                }}
            />

            <TextBlock sectionData={textBlock1}></TextBlock>

            <StatisticsBlock
                sectionData={statistics}
                wrapperOptions={{ bgcolor: '#fff' }}
            ></StatisticsBlock>

            <TextImageCard sectionData={textImage1}></TextImageCard>

            <TextImageCard sectionData={textImage2}></TextImageCard>
            <TextImageCard sectionData={textImage3}></TextImageCard>

            <Banner sectionData={banner}></Banner>

            <QuoteBlock
                sectionData={quote}
                wrapperOptions={{ bgcolor: '#eee' }}
            ></QuoteBlock>

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

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'success-stories' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default SuccessStories;
