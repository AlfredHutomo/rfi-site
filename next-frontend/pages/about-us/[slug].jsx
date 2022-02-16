import PageWrapper from '../../components/global/PageWrapper';
import Sections from '../../components/sections';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import LinkGroup from '../../components/sections/LinkGroup';

import {
    getPageData,
    getLayoutData,
    getPagePaths,
    getChildPagesOf,
} from '../../utils/api';


const AboutChildrenPages = ({ pageData, layoutData, childPages }) => {

    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />
            <LinkGroup heading='Learn more about RFI' data={layoutData.header.data.attributes.navigation[0].links} />
            <RegisterInterestCard />
        </PageWrapper>
    );
};

// export const getStaticPaths = async (context) => {
//     const pages = await getPagePaths({ childOf: 'about-us' });

//     return { paths: pages, fallback: false };
// };

export const getServerSideProps = async (context) => {
    const pageData = await getPageData({ slug: context.params.slug });
    const layoutData = await getLayoutData();
    const childPages = await getChildPagesOf('about-us');

    return {
        props: {
            pageData,
            childPages,
            layoutData,
        },
    };
};

export default AboutChildrenPages;
