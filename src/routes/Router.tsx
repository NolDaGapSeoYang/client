import ErrorBoundary from 'components/common/ErrorBoundary'
import { LazyExoticComponent, Suspense, FC, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from '../GlobalStyle'
import Default from 'layout/Default'

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
const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Default />}>
          <Route path='' element={<Home />} />
          <Route path='detail' element={<Detail />} />
          <Route path='convenient' element={<Convenient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
