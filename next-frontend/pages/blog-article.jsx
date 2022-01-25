import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import PostArticle from '../components/PostArticle/';
import PostList from '../components/PostList/';
import PostArticleHero from '../components/PostArticleHero/';
import PageHeader from '../components/global/PageHeader';

import { getLayoutData } from '../utils/api';

export default function BlogArticle(props) {
    return (
        <PageWrapper layoutData={props.layoutData}>
            <PostArticleHero
            //image='https://source.unsplash.com/random/300x100'
            />

            <SectionWrapper>
                <PostArticle
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
                    ]}
                >
                    This is some description
                </PostArticle>
            </SectionWrapper>

            <SectionWrapper>
                <PostList
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
                ></PostList>
            </SectionWrapper>
        </PageWrapper>
    );
}

export const getStaticProps = async (context) => {
    // const pageData = await getPageData({ slug: 'blog' });
    const layoutData = await getLayoutData();

    return {
        props: {
            // pageData,
            layoutData,
        },
    };
};
