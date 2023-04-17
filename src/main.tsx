import { ApolloProvider } from '@apollo/client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { client } from './apollo'
import App from './App'
import reportWebVitals from './webVitals'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
reportWebVitals(() => {})
