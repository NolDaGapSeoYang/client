import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Baby } from 'assets/baby.svg'
import store from 'store/index'
import { useQuery } from '@apollo/client'
import { graphql } from 'api/gql'
import { TestQuery } from 'api/graphql'

const q = graphql(
  /** Graph QL */
  `
    query test {
      places {
        address
      }
    }
  `,
)
const Default = () => {
  const { data } = useQuery<TestQuery>(q)
  const isMobile = store((state) => state.isMobile)
  function setScreenSize() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  setScreenSize()
  useEffect(() => {
    window.addEventListener('resize', setScreenSize)
    if (!isMobile) {
      document.body.style.backgroundColor = '#f4b03e'
    }
    return () => window.removeEventListener('resize', setScreenSize)
  }, [])
  // return isMobile ? (
  //   <Main>
  //     <Outlet />
  //   </Main>
  // ) : (
  //   <Fallback>
  //     <Baby />
  //   </Fallback>
  // )
  return (
    <Main>
      <Outlet />
    </Main>
  )
}

export default Default
const Main = styled.main`
  max-width: 412px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

const Fallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4b03e;
`
