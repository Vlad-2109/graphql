import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, from } from '@apollo/client';
import { router } from './router/router';
import { AppContext } from './context/appContext';
import { AppContextType } from './context/contextType';

export const App = () => {
  const { state } = useContext(AppContext) as AppContextType;
  const httpLink = new HttpLink({ uri: 'http://localhost:4000/' });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty('headers')
      ? operation.getContext().headers
      : {};
    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale
      },
    });
    return forward(operation);
  });
  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return (
    <>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </>
  );
};
