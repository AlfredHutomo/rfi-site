import PageWrapper from '../../components/global/PageWrapper';
import Sections from '../../components/sections';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import LinkGroup from '../../components/sections/LinkGroup';

import {
    getPageData,
    getLayoutData,
    getPagePaths,
    getChildPagesOf,
} from '../../utils/api';
import { useEffect, useState } from 'react';

const Pages = ({ pageData, layoutData }) => {
    const [childPages, setChildPages] = useState([]);

    useEffect(async () => {
        const fetchData = async () => {
            const links = await getChildPagesOf('about-us');
            setChildPages(links);
        };

        fetchData();
    }, []);

    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />
            <LinkGroup heading='Learn more about RFI' data={childPages} />
            <RegisterInterestCard />
        </PageWrapper>
    );
};

export const getStaticPaths = async (context) => {
    const pages = await getPagePaths({ childOf: 'about-us' });

    return { paths: pages, fallback: false };
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: context.params.slug });

    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default Pages;
