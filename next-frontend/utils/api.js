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

import { client, getApolloClient } from './apollo-client';

export function getStrapiURL(path) {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:8080'
    }${path}`;
}

export async function getPageData({ slug, type = 'pages' }) {
    const apolloClient = getApolloClient();

    const query = {
        pages: PAGE_DATA,
        blogs: ONE_BLOG_DATA,
        programs: PROGRAMS_DATA,
    };

    const { data } = await apolloClient.query({
        query: query[type],
        variables: {
            slug,
        },
    });

    if (data === undefined) {
        return {};
    }

    return data[type].data[0];
}

export async function getPagePaths(childOf = null) {
    const apolloClient = getApolloClient();

    const ignorePath = {
        '': true,
        programs: true,
        'about-us': true,
        blog: true,
    };

    const { data } = await apolloClient.query({
        query: PAGE_PATHS,
    });

    /* Mapping the data from the query to an object with the `params` property set to the `slug` of the
   page. */
    let paths = data.pages.data.map((page) => {
        let slug = page.attributes.url.split('/');
        slug.shift();

        if (childOf === null && slug.length === 1) {
            return {
                params: {
                    slug,
                },
            };
        } else {
            return (
                slug[0] === childOf &&
                slug.length !== 1 && { params: { slug: [slug[1]] } }
            );
        }
    });

    /* It filters out the paths that are not objects. */
    paths = paths.filter((item) => {
        return typeof item === 'object' && !ignorePath[item.params.slug[0]];
    });

    paths.forEach((path) => console.log(path));

    return paths;
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
