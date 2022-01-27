import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import PostList from '../../components/sections/PostList';
import TextBlock from '../../components/sections/TextBlock';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';

import { getLayoutData, getPageData } from '../../utils/api';
import Sections from '../../components/sections';

const Blog = ({ pageData, layoutData }) => {
    const { seo, content } = pageData.attributes;

    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={content} />

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
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
