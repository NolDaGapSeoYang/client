import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Baby } from 'assets/baby.svg'
import store from 'store/index'
import { gql, useQuery } from '@apollo/client'

import { GetPlaceQuery } from 'api/graphql'
import { placeInfoFragment } from '../fragments'

const q = gql`
  query getPlace {
    places {
      ...PlaceInfo
      __typename
    }
  }
  ${placeInfoFragment}
`

const Default = () => {
  const { data } = useQuery<GetPlaceQuery>(q)
  const setPosition = store((state) => state.setPosition)
  const po = store((state) => state.position)
  const isMobile = store((state) => state.isMobile)
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  setScreenSize()
  const cleanUp = (watchId: number) => {
    window.removeEventListener('resize', setScreenSize)
    window.navigator.geolocation.clearWatch(watchId)
  }
  useEffect(() => {
    window.addEventListener('resize', setScreenSize)

    const watchId = window.navigator.geolocation.watchPosition(
      (position) => {
        setPosition(position)
      },
      (error) => {
        console.error(error, 'watchPositon error')
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000 * 60,
      },
    )

    if (!isMobile) {
      document.body.style.backgroundColor = '#f4b03e'
    }
    return () => {
      cleanUp(watchId)
    }
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
