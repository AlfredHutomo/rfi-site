import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import PostList from '../components/PostList/';
import TextBlock from '../components/TextBlock';
import RegisterInterestCard from '../components/RegisterInterestCard';
import PageHeader from '../components/global/PageHeader';

const Blog = (props) => {
    return (
        <PageWrapper>
            <PageHeader title='Blog' />

            <SectionWrapper>
                <TextBlock h3='Get all the RFI latest news, event updates, program information and much more.'>
                    some description
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper>
                <PostList
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
                        {
                            //image: '',
                            title: 'What are the benefits of taking part in football classes for kids?',
                            date: '15 Sep',
                            author: 'RFI Management Team',
                            description:
                                'We are excited to provide you with news of the appointment of Santiago Ortiz – Santi – to a coaching role at Green Gully in the NPL for season 2022.',
                            link: '#',
                        },
                    ]}
                >
                    This is some description
                </PostList>
            </SectionWrapper>

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
