import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  NormalizedCacheObject,
} from '@apollo/client';

import { User } from '../generated';

export const connectedUser = makeVar<User | null>(null);
export const isUserConnected = makeVar<boolean>(false);

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const cache = new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          project: {
            merge: true,
          },
          userConnected: {
            read() {
              return connectedUser();
            },
          },
          loggedIn: {
            read() {
              return isUserConnected();
            },
          },
        },
      },
    },
  });

  return new ApolloClient({
    cache,
    uri: 'graphql',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
      query: {
        fetchPolicy: 'network-only',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};
