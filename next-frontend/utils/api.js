import qs from 'qs';
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
    CHILD_PAGES,
} from './gqlQueries';

import { getApolloClient } from './apollo-client';

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

export async function getPagePaths({ childOf = null }) {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: PAGE_PATHS,
    });

    let paths = data.pages.data.map((page) => {
        if (childOf === null) {
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
        } else {
            if (
                page.attributes.parent.data !== null &&
                page.attributes.parent.data.attributes.slug === childOf
            ) {
                return { params: { slug: page.attributes.slug } };
            }
        }
    });

    if (childOf !== null) {
        paths = paths.filter((item) => {
            return typeof item === 'object';
        });
    }

    return paths;
}

/**
 * It takes a slug and returns a list of child pages
 * @param slug - The slug of the parent page.
 * @returns An array of objects with the text and link properties.
 */
export async function getChildPagesOf(slug) {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: CHILD_PAGES,
        variables: { slug },
    });

    const parent = data.pages.data[0];

    if (parent.attributes.children.data.length === 0) {
        return [];
    }

    const childPages = parent.attributes.children.data.map((page) => ({
        text: page.attributes.shortName,
        link: `/${parent.attributes.slug}/${page.attributes.slug}`,
    }));

    return childPages;
}

/**
 * It queries the layout data from the server and returns it
 * @returns The query returns a `data` object with a `layout` property.
 */
export async function getLayoutData() {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: LAYOUT_DATA,
    });

    return data;
}

/**
 * It queries the GraphQL API for the programs data, and returns an array of paths
 * @returns An array of objects with the following shape:
 */
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

/**
 * It takes a program slug and returns the program data
 * @returns The query returns a program object.
 */
export async function getProgramsData({ slug }) {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
        query: PROGRAMS_DATA,
        variables: { slug },
    });

    return data.programs.data[0];
}

/**
 * It queries the GraphQL server for the blogs data.
 * @returns The query returns a list of blogs.
 */
export async function getPostList() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: BLOGS_DATA,
    });

    return data.blogs.data;
}

/**
 * It queries the GraphQL API for the blog paths
 * @returns An array of objects with the `params` property set to the `slug` of the blog.
 */
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

/**
 * It queries the GraphQL API for the blog data
 * @returns The data for the blog post.
 */
export async function getBlogData({ slug }) {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: ONE_BLOG_DATA,
        variables: { slug },
    });

    return data.blogs.data[0];
}

/**
 * Get the three latest blogs from the database.
 * @returns The query returns a list of blogs.
 */
export async function getThreeLatestBlogs() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: THREE_LATEST_BLOGS,
    });

    return data.blogs.data;
}

/**
 * It queries the contact information from the server and returns the data.
 * @returns The data from the contactInformation query.
 */
export async function getContactData() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: CONTACT_INFORMATION,
    });

    return data.contactInformation.data;
}
