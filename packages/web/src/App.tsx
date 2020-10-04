import React from "react";

import QuestionsList from "./pages/QuestionsList";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export const App: React.FC = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:8080/v1/graphql',
        cache: new InMemoryCache(),
    })
    return (
        <ApolloProvider client={client}>
            <QuestionsList/>
        </ApolloProvider>
    )
}