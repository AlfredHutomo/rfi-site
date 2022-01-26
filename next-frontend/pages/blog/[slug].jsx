import PageWrapper from '../../components/global/PageWrapper';

import { getLayoutData, getBlogPaths, getBlogData } from '../../utils/api';
import BlogLayout from '../../components/BlogLayout';

const BlogArticle = ({ blogData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <BlogLayout data={blogData}></BlogLayout>

            {/* <PostList
                isMobileSlider
                data={[
                    {
                        //image: '',
                        title: 'Announcement: Santiago Ortiz appointed to coaching role at Green Gulley',
                        date: '15 Sep',
                        author: 'RFI Management Team',
                        description:
                            'We are excited to provide you with news of the appointment of Santiago Ortiz – Santi – to a coaching role at Green Gully in the NPL for season 2022.',
                        link: 'http://www.google.com.au',
                    },
                    {
                        //image: '',
                        title: 'What are the benefits of taking part in football classes for kids?',
                        date: '15 Sep',
                        author: 'RFI Management Team',
                        description:
                            'We are excited to provide you with news of the appointment of Santiago Ortiz – Santi – to a coaching role at Green Gully in the NPL for season 2022.',
                        link: '#',
                    },
                    {
                        //image: '',
                        title: 'The rise of ladies football',
                        date: '15 Sep',
                        author: 'RFI Management Team',
                        description:
                            'We are excited to provide you with news of the appointment of Santiago Ortiz – Santi – to a coaching role at Green Gully in the NPL for season 2022.',
                        link: '#',
                    },
                    {
                        //image: '',
                        title: 'Why use different sized footballs for different age groups?',
                        date: '15 Sep',
                        author: 'RFI Management Team',
                        description:
                            'We are excited to provide you with news of the appointment of Santiago Ortiz – Santi – to a coaching role at Green Gully in the NPL for season 2022.',
                        link: '#',
                    },
                ]}
            ></PostList> */}
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
    const blogData = await getBlogData({ slug: context.params.slug });
    const layoutData = await getLayoutData();

    return {
        props: {
            blogData,
            layoutData,
        },
    };
};

export default BlogArticle;
