import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import PageHeader from '../../components/global/PageHeader';
import Breadcrumb from '../../components/Breadcrumb';
import TextBlock from '../../components/sections/TextBlock';
import Timeline from '../../components/sections/Timeline';
import Banner from '../../components/sections/Banner';
import LinkGroup from '../../components/sections/LinkGroup';

import { getPageData, getLayoutData } from '../../utils/api';

const History = (props) => {
    const [headerBanner, textBlock1, timeline, banner] =
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
                            text: 'History',
                            link: '/about-us/history',
                        },
                    ],
                }}
            />

            <TextBlock sectionData={textBlock1} />

            <Timeline sectionData={timeline} />

            <Banner sectionData={banner} />

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
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'history' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default History;
