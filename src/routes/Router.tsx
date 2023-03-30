import ErrorBoundary from 'components/common/ErrorBoundary'
import { LazyExoticComponent, Suspense, FC, lazy } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ReactComponent as Carbon } from 'assets/carbon_error.svg'
import GlobalStyle from '../GlobalStyle'
import Default from 'layout/Default'
import styled from 'styled-components'

const Error = () => {
  return (
    <ErrorWrapper>
      <Carbon />
      <p className='title-large'>잠시 서비스 오류가 발생했어요.</p>
      <GoHome to='/' className='title-medium'>
        홈으로 이동하기
      </GoHome>
    </ErrorWrapper>
  )
}

export const Loading: FC<{ text?: string }> = ({ text = '페이지를 불러오고 있어요...' }) => {
  return (
    <LoadingWrapper>
      <LoadingIcon />
      <p className='title-large'>{text}</p>
    </LoadingWrapper>
  )
}

const LoadingIcon = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: gray;
  border-radius: 999rem;
`

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4rem;
  height: calc(var(--vh, 1vh) * 100);
`

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  > p {
    margin: 3.5rem 0;
  }
`
const GoHome = styled(Link)`
  padding: 1rem 2.5rem;
  border-radius: 999rem;
  color: white;
  background-color: #61646b;
`

const Loadable =
  (Component: LazyExoticComponent<FC<{}>>) =>
  (props: JSX.IntrinsicAttributes): JSX.Element =>
    (
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
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
          <Route path='result' element={<Search />} />
          <Route path='convenient' element={<Convenient />} />
          <Route path='detail' element={<Detail />} />
          <Route path='option' element={<Tutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
