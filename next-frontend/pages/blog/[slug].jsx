import PageWrapper from '../../components/global/PageWrapper';

import BlogLayout from '../../components/BlogLayout';

import { getLayoutData, getBlogPaths, getBlogData } from '../../utils/api';

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

export const getServerSideProps = async (context) => {
    const blogData = await getBlogData({ slug: context.params.slug });
    const layoutData = await getLayoutData();

    return {
        props: {
            blogData,
            layoutData,
        },
        revalidate: 1,
    };
};

export default BlogArticle;
