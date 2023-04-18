import code from '../assets/qr_code.png'
import Slider from 'components/Search/Slider'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import store from 'store/index'
import styled from 'styled-components'

// 위치 정보를 담는 인터페이스
interface Location {
  latitude: number
  longitude: number
}

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

  // 이전 위치 정보를 저장할 변수
  const prevPosition = useRef<Location | null>(null)

  // 이전 위치와 새로운 위치의 거리를 계산하는 함수
  const calculateDistance = (prev: Location, next: Location) => {
    const R = 6371e3 // 지구 반경(m)
    const prevLat = (prev.latitude * Math.PI) / 180
    const nextLat = (next.latitude * Math.PI) / 180
    const deltaLat = ((next.latitude - prev.latitude) * Math.PI) / 180
    const deltaLon = ((next.longitude - prev.longitude) * Math.PI) / 180

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(prevLat) * Math.cos(nextLat) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    return R * c
  }

  const cleanUp = (watchId: number) => {
    window.removeEventListener('resize', setScreenSize)
    window.navigator.geolocation.clearWatch(watchId)
  }
  useEffect(() => {
    window.addEventListener('resize', setScreenSize)

    const watchId = window.navigator.geolocation.watchPosition(
      (position) => {
        // 새로운 위치 정보
        const newPosition: Location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }

        // 이전 위치 정보가 있고, 이전 위치와 새로운 위치의 거리가 1m 이상인 경우에만 업데이트
        if (prevPosition.current && calculateDistance(prevPosition.current, newPosition) >= 1) {
          console.log('업데이트 된 Position : ', newPosition)
          setPosition(position)
          prevPosition.current = newPosition
        }
        // 이전 위치 정보가 없는 경우에는 새로운 위치 정보를 저장하고 업데이트하지 않음
        else if (!prevPosition.current) {
          console.log('처음 Position', newPosition)
          setPosition(position)
          prevPosition.current = newPosition
        }
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
