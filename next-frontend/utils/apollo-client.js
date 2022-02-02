import { ApolloClient, InMemoryCache } from '@apollo/client';

const DEV_TUNNEL_URL = 'https://silly-newt-43.loca.lt/graphql';

export const getApolloClient = () => {
    return new ApolloClient({
        // uri:
        //     process.env.NEXT_PUBLIC_STRAPI_GQL ||
        //     'http://localhost:8080/graphql',
        uri:
            process.env.NEXT_PUBLIC_STRAPI_GQL ||
            'http://localhost:8080/graphql',
        cache: new InMemoryCache(),
    });
};
