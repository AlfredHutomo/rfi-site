import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import PageHeader from '../components/global/PageHeader';
import Breadcrumb from '../components/Breadcrumb';
import TextBlock from '../components/TextBlock';
import Timeline from '../components/Timeline';
import LinkGroup from '../components/LinkGroup/';

export default function History() {
    return (
        <PageWrapper>
            <Header></Header>

            <PageHeader title='History' />

            <SectionWrapper>
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
            </SectionWrapper>

            <SectionWrapper>
                <TextBlock
                    h3="RFI takes pride in bringing to Australia the finest in international youth football development."
                >
                    Our objective is to provide our players with nothing but the best football experience possible, the Real experience. It consists of all the necessary formation and resources to develop a professional career just as much as enabling a healthy sporting life and habits for the everlasting enjoying of this beautiful game.
                </TextBlock>
            </SectionWrapper>

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

            <SectionWrapper>
                <LinkGroup
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

            <Footer />
        </PageWrapper>
    );
}
