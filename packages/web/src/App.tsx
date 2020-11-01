import React from "react";
import Router from './routes'

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {Box} from "@material-ui/core";

export const App: React.FC = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:8080/v1/graphql',
        cache: new InMemoryCache(),
    })
    return (
        <ApolloProvider client={client}>
            <Box p={2}>
                <Router/>
            </Box>
        </ApolloProvider>
    )
}