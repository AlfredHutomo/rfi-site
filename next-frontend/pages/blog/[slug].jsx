import PageWrapper from '../../components/global/PageWrapper';

import BlogLayout from '../../components/BlogLayout';

import { getLayoutData, getBlogPaths, getPageData } from '../../utils/api';

const BlogArticle = ({ blogData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <BlogLayout data={blogData}></BlogLayout>
        </PageWrapper>
    );
};

export const getStaticPaths = async () => {
    const paths = await getBlogPaths();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const blogData = await getPageData({
        slug: context.params.slug,
        type: 'blogs',
    });
    const layoutData = await getLayoutData();

    return {
        props: {
            blogData,
            layoutData,
        },
    };
};

export default BlogArticle;
