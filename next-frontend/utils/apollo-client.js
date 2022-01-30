import { ApolloClient, InMemoryCache } from '@apollo/client';

export const getApolloClient = () => {
    return new ApolloClient({
        uri:
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql` ||
            'http://localhost:8080/graphql',
        cache: new InMemoryCache(),
    });
};
