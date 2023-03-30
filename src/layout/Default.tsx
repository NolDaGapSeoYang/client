import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Baby } from 'assets/baby.svg'
import store from 'store/index'
import { gql, useQuery } from '@apollo/client'

import { GetPlaceQuery } from 'api/graphql'
import { placeInfoFragment } from '../fragments'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const SliderVariants: Variants = {
  exit: {
    y: '100%',
  },
  animate: {
    y: '0%',
  },
  initial: {
    y: '100%',
  },
}

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
  const { setPosition, toggle, setToggle } = store((state) => ({
    toggle: state.toggle,
    setPosition: state.setPosition,
    setToggle: state.setToggle,
  }))

  const isMobile = store((state) => state.isMobile)
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    document.documentElement.style.setProperty('--mx', `412px`)
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
      <AnimatePresence mode='popLayout'>
        {toggle ? (
          <Darker initial='initial' animate='animate' exit='exit' onClick={() => setToggle()}>
            <Slider variants={SliderVariants}>???</Slider>
          </Darker>
        ) : null}
      </AnimatePresence>
      <Outlet />
    </Main>
  )
}

export default Default
const Darker = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`

const Slider = styled(motion.div)`
  background-color: white;
  position: absolute;
  bottom: 0;
  padding: 1.5rem 2rem;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

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
