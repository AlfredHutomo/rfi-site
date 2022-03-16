import PageWrapper from '../components/global/PageWrapper';
import Sections from '../components/sections';

import { getLayoutData, getPageData, getPagePaths } from '../utils/api';

const PagesLayout = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />
        </PageWrapper>
    );
};

export const getStaticPaths = async (context) => {
    const pages = await getPagePaths();

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

export default PagesLayout;
