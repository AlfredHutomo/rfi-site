import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import PageWrapper from '../components/global/PageWrapper';
import SectionWrapper from '../components/global/SectionWrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import RegisterForm from '../components/RegisterForm';

export default function ContactUs() {
    return (
        <PageWrapper>
            <Header></Header>

            <SectionWrapper>
                <RegisterForm />
            </SectionWrapper>

            <Footer />
        </PageWrapper>
    );
}

