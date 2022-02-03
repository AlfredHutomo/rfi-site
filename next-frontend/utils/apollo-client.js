import { ApolloClient, InMemoryCache } from '@apollo/client';

export const getApolloClient = ({ clientSide = false }) => {
    return new ApolloClient({
        uri:
            process.env.NEXT_PUBLIC_STRAPI_GQL ||
            'http://localhost:8080/graphql',
        cache: new InMemoryCache(),
        ssrMode: clientSide,
    });
};
