import ErrorBoundary from 'components/common/ErrorBoundary'
import { LazyExoticComponent, Suspense, FC, lazy } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import GlobalStyle from '../GlobalStyle'
import Default from 'layout/Default'
import HasGaurdin from '../screen/Tutorial/components/hasGuardian'

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
          <Route path='option' element={<Outlet />}>
            <Route path=':type' element={<Tutorial />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
