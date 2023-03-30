import { ReactComponent as Baby } from 'assets/baby.svg'

import Slider from 'components/Search/Slider'
import { AnimatePresence, easeInOut, motion, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import store from 'store/index'
import styled from 'styled-components'

const Default = () => {
  const { selection, setSelection, setPosition, toggle, setToggle } = store((state) => ({
    toggle: state.toggle,
    setPosition: state.setPosition,
    setToggle: state.setToggle,
    selection: state.selection,
    setSelection: state.setSelection,
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

  if (!isMobile) {
    return (
      <Fallback>
        <Baby />
      </Fallback>
    )
  }
  return (
    <Main>
      <AnimatePresence mode='popLayout'>{toggle ? <Slider /> : null}</AnimatePresence>
      <Outlet />
    </Main>
  )
}

export default Default

const Main = styled.main`
  max-width: 412px;
  width: 100vw;
  margin: 0 auto;
  /* padding: 4rem 2rem; */
`

const Fallback = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4b03e;
`
