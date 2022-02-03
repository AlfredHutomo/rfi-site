import PageWrapper from '../../components/global/PageWrapper';
import Sections from '../../components/sections';

import RegisterInterestCard from '../../components/sections/RegisterInterestCard';

import { getLayoutData, getPageData } from '../../utils/api';

const Blog = ({ pageData, layoutData }) => {
    const { seo, content } = pageData.attributes;

    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={content} />

            <RegisterInterestCard />
        </PageWrapper>
    );
};

export const getServerSideProps = async (context) => {
    const pageData = await getPageData({ slug: 'blog' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default Blog;
