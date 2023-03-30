import { ApolloClient, InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          places: relayStylePagination([
            'first',
            'last',
            'categories',
            'parkingAvailable',
            'wheelChairRentable',
            'elevatorAvailable',
            'toiletAvailable',
            'pathExists',
            'needCompanion',
            'coordinates',
          ]),
        },
      },
    },
  }),
})
