import code from 'assets/qr_code.png'
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
    const main = document.querySelector('main')
    if (main) {
      document.documentElement.style.setProperty('--main-mr', `${main.offsetLeft}px`)
    }
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
        <CodeWrapper>
          <QR src={code} />
        </CodeWrapper>
        <FallbackDes>
          모바일 기기에서
          <br />
          편하게 사용하수깡
        </FallbackDes>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #51be9d;
`

const CodeWrapper = styled.div`
  padding: 1rem;
  border-radius: 1.6rem;
  display: flex;
  background-color: white;
`

const FallbackDes = styled.p`
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 3.5rem;
  text-align: center;
  margin-top: 5rem;
`

const QR = styled.img`
  width: 15rem;
  height: 15rem;
`
