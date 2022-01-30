import qs from 'qs';
// import client from './apollo-client';
import {
    LAYOUT_DATA,
    PAGE_DATA,
    PROGRAMS_DATA,
    PROGRAMS_PATHS,
    BLOGS_DATA,
    BLOGS_PATHS,
    ONE_BLOG_DATA,
    THREE_LATEST_BLOGS,
    CONTACT_INFORMATION,
    PAGE_PATHS,
} from './gqlQueries';

import { getApolloClient } from './apollo-client';
import { func } from 'prop-types';

export function getStrapiURL(path) {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:8080'
    }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, {
        encodeValuesOnly: true,
    });
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ''}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
}

export async function getPageData({ slug }) {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: PAGE_DATA,
        variables: {
            slug,
        },
    });

    if (data === undefined) {
        return {};
    }

    return data.pages.data[0];
}

export async function getPagePaths() {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: PAGE_PATHS,
    });

    const pages = data.pages.data.map((page) => {
        if (page.attributes.parent.data === null) {
            return { params: { slug: page.attributes.slug } };
        }
        return {
            params: {
                slug: [
                    page.attributes.parent.data.attributes.slug,
                    page.attributes.slug,
                ],
            },
        };
    });

    return pages;
}

export async function getLayoutData() {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: LAYOUT_DATA,
    });

    return data;
}

export async function getProgramsPaths() {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: PROGRAMS_PATHS,
    });

    const paths = data.programs.data.map((program, i) => ({
        params: { slug: program.attributes.slug },
    }));

    return paths;
}

export async function getProgramsData({ slug }) {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: PROGRAMS_DATA,
        variables: { slug },
    });

    return data.programs.data[0];
}

/**
 *
 * @param {*} options
 * @returns {Promise<Array>} an Array of blog inside strapi cms
 */
export async function getPostList() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: BLOGS_DATA,
    });

    return data.blogs.data;
}

export async function getBlogPaths() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: BLOGS_PATHS,
    });

    const paths = data.blogs.data.map((blog, i) => ({
        params: { slug: blog.attributes.slug },
    }));

    return paths || [];
}

export async function getBlogData({ slug }) {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: ONE_BLOG_DATA,
        variables: { slug },
    });

    return data.blogs.data[0];
}

export async function getThreeLatestBlogs() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: THREE_LATEST_BLOGS,
    });

    return data.blogs.data;
}

export async function getContactData() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: CONTACT_INFORMATION,
    });

    return data.contactInformation.data;
}
