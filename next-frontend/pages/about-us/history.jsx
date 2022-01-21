import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import PageHeader from '../../components/global/PageHeader';
import Breadcrumb from '../../components/Breadcrumb';
import TextBlock from '../../components/TextBlock';
import Timeline from '../../components/Timeline';
import Banner from '../../components/Banner';
import LinkGroup from '../../components/LinkGroup';

import { getPageData, getLayoutData } from '../../utils/api';

const History = (props) => {
    return (
        <PageWrapper layoutData={props.layoutData}>
            <PageHeader title='History' />

            {/* <SectionWrapper>
                <Breadcrumb
                    data={[
                        {
                            text: 'Home',
                            link: '/home',
                        },
                        {
                            text: 'About Us',
                            link: '/about-us',
                        },
                    ]}
                />
            </SectionWrapper> */}

            {/* <SectionWrapper>
                <TextBlock h3='RFI takes pride in bringing to Australia the finest in international youth football development.'>
                    Our objective is to provide our players with nothing but the
                    best football experience possible, the Real experience. It
                    consists of all the necessary formation and resources to
                    develop a professional career just as much as enabling a
                    healthy sporting life and habits for the everlasting
                    enjoying of this beautiful game.
                </TextBlock>
            </SectionWrapper> */}

            <SectionWrapper>
                <Timeline
                    data={[
                        {
                            date: '2022',
                            //image: '',
                            content: 'some heading 1',
                        },
                        {
                            date: '2021',
                            //image: '',
                            content: 'some heading 2',
                        },
                        {
                            date: '2020',
                            //image: '',
                            content: 'some heading 3',
                        },
                        {
                            date: '2019',
                            //image: '',
                            content: 'some heading 4',
                        },
                    ]}
                />
            </SectionWrapper>

            {/* <Banner
                //icon="./public/logo-no-text.svg"
                //image="https://source.unsplash.com/random/1000x400"
                heading='The history of RFI is one of non-conformity, counterculture and determination.'
            >
                But above all, it's about ideas, mentality and conviction
                required to persevere and thrive in a constant quest for
                excellence. It was written by people who believed in this, who
                made RFI their struggle, taking responsibility and carrying the
                burden of being different – being better.
            </Banner> */}

            <SectionWrapper>
                <LinkGroup
                    heading='Learn more about RFI'
                    data={[
                        {
                            text: 'History',
                            link: '#',
                        },
                        {
                            text: 'Philosophy',
                            link: '#',
                        },
                        {
                            text: 'Success stories',
                            link: '#',
                        },
                        {
                            text: 'Sponsors',
                            link: '#',
                        },
                        {
                            text: 'Success stories',
                            link: '#',
                        },
                    ]}
                />
            </SectionWrapper>
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'history' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData: {},
            layoutData,
        },
    };
};

export default History;
