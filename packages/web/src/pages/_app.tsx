import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../../lib/apolloClient'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ margin: '20px' }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}
export default App
