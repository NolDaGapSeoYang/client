import { ReactComponent as Carbon } from 'assets/carbon_error.svg';
import dataLoading from 'assets/load_data.png';
import pageLoading from 'assets/load_page.png';
import ErrorBoundary from 'components/common/ErrorBoundary';
import Spinner from 'components/common/Spinner';
import Default from 'layout/Default';
import { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle';

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

export const Loading: FC<{ text?: string; page?: boolean }> = ({
  text = '페이지를 불러오고 있어요...',
  page = true,
}) => {
  return (
    <LoadingWrapper>
      {page ? <LoadingImage src={pageLoading} /> : <LoadingImage src={dataLoading} />}

      <p className='title-large'>{text}</p>

      <Spinner
        trackColor='#a7a7a7'
        indicatorColor='#4f4f4f'
        size={25}
        progress={25}
        trackWidth={2}
        indicatorWidth={2}
        spinnerMode={true}
      />
    </LoadingWrapper>
  )
}

const LoadingImage = styled.img`
  width: 100%;
  height: auto;
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
          <Route path='result'>
            <Route index element={<Search />} />
            <Route path=':id' element={<Detail />} />
          </Route>
          <Route path='convenient' element={<Convenient />} />
          <Route path='option' element={<Tutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
