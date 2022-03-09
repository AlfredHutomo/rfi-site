import PageWrapper from '../../components/global/PageWrapper';
import Sections from '../../components/sections';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import LinkGroup from '../../components/sections/LinkGroup';

import { getPageData, getLayoutData, getPagePaths } from '../../utils/api';

const AboutChildrenPages = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />
            <LinkGroup
                heading='Learn more about RFI'
                data={layoutData.header.data.attributes.navigation[0].links}
            />
            <RegisterInterestCard />
        </PageWrapper>
    );
};

export const getStaticPaths = async (context) => {
    const pages = await getPagePaths('about-us');

    return { paths: pages, fallback: false };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;

    return {
        props: {
            pageData: await getPageData({
                slug: slug[slug.length - 1],
            }),
            layoutData: await getLayoutData(),
        },
    };
};

export default AboutChildrenPages;
