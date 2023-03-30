import ErrorBoundary from 'components/common/ErrorBoundary';
import Default from 'layout/Default';
import { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import GlobalStyle from '../GlobalStyle';

const Error = () => {
  return <>ERROR</>
}
const Loadable =
  (Component: LazyExoticComponent<FC<{}>>) =>
  (props: JSX.IntrinsicAttributes): JSX.Element =>
    (
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback='loading...'>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    )

const Home = Loadable(lazy(() => import('../screen/Home')))
const Detail = Loadable(lazy(() => import('../screen/Detail')))
const Convenient = Loadable(lazy(() => import('../screen/Convenient')))
const Search = Loadable(lazy(() => import('../screen/Search')))
const Tutorial = Loadable(lazy(() => import('../screen/Tutorial')))
const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='convenient' element={<Convenient />} />
          <Route path='detail' element={<Detail />} />
          <Route path='result' element={<Search />} />
          <Route path='option' element={<Tutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
