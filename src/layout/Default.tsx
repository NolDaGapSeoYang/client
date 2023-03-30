import { ReactComponent as Baby } from 'assets/baby.svg';
import { ReactComponent as Reset } from 'assets/reset.svg';
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValue,
  useTransform,
  Variants,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import store from 'store/index';
import styled from 'styled-components';

const SliderVariants: Variants = {
  exit: {
    y: '120%',
  },
  animate: {
    y: '0%',
    transition: {
      type: 'tween',
      ease: easeInOut,
    },
  },
  initial: {
    y: '120%',
  },
}

const Default = () => {
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

  if (!isMobile) {
    return (
      <Fallback>
        <Baby />
      </Fallback>
    )
  }

  const [sliderHeight, setSliderHeight] = useState(0)
  const y = useMotionValue(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const perY = useTransform(y, [0, sliderHeight], ['0%', '100%'])
  useEffect(() => {
    if (sliderRef?.current) {
      setSliderHeight((prev) => sliderRef.current.clientHeight)
    }
  }, [sliderRef.current?.clientHeight])
  return (
    <Main>
      <AnimatePresence mode='popLayout'>
        {toggle ? (
          <Darker initial='initial' animate='animate' exit='exit'>
            <Shadow
              onClick={() => setToggle(false)}
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
              }}
            />
            <Slider ref={sliderRef} variants={SliderVariants} style={{ y: perY }}>
              <SnapBars
                onPan={(e, point) => {
                  if (point.offset.y > 0) {
                    y.set(point.offset.y)
                  }
                }}
                onPanEnd={(e, point) => {
                  if (+perY.get().replace('%', '') > 80) {
                    setToggle(false)
                  } else {
                    y.set(0)
                  }
                }}
              >
                <SnapBar />
              </SnapBars>
              <Content>
                <FilterList>
                  <FilterHeader>
                    <span className='title-small main-text'>동행 여부</span>
                  </FilterHeader>
                  <FilterItems>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                  </FilterItems>
                </FilterList>
                <FilterList>
                  <FilterHeader>
                    <span className='title-small main-text'>옵션</span>
                    <button>
                      <span className='body-small text-gray'>모두 선택</span>
                    </button>
                  </FilterHeader>
                  <FilterItems>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                  </FilterItems>
                </FilterList>
                <FilterList>
                  <FilterHeader>
                    <span className='title-small main-text'>옵션</span>
                    <button>
                      <span className='body-small text-gray'>모두 선택</span>
                    </button>
                  </FilterHeader>
                  <FilterItems>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                    <FilterItem className='filter-small'>1</FilterItem>
                  </FilterItems>
                </FilterList>
              </Content>
              <Footer className='mx' style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                  <Reset style={{ width: '2.2rem', stroke: 'gray' }} />
                  <span className='title-medium text-gray' style={{ textDecoration: 'underline', textUnderlineOffset : '5px' }}>
                    초기화
                  </span>
                </div>
                <SearchButton className='button-text'>@개 여행지 보기</SearchButton>
              </Footer>
            </Slider>
          </Darker>
        ) : null}
      </AnimatePresence>
      <Outlet />
    </Main>
  )
}

export default Default
const SnapBars = styled(motion.div)`
  position: absolute;
  touch-action: none;
  margin: 0 auto;
  padding: 1rem 0;
  left: 50%;
  top: -0.25rem;
  transform: translateX(-50%);
`
const SnapBar = styled.div`
  width: 3.4rem;
  height: 0.4rem;
  border-radius: 999rem;
  background-color: #efeff0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`
const SearchButton = styled.button`
  color: white;
  background-color: black;
  padding: 1rem 5.5rem;
  border-radius: 999rem;
`

const Footer = styled.div`
  display: flex;
  padding: 1.6rem 2rem;
  width: 100vw;
  border-top: 1px solid rgba(0, 0, 0, 0.178);
  position: relative;
  left: -2rem;
`

const FilterList = styled.div`
  &:first-child {
    padding-bottom: 1.4rem;
    border-bottom: 1px solid #efeff0;
  }
  + div {
    padding: 1.4rem 0;
    &:not(:last-child) {
      border-bottom: 1px solid #efeff0;
    }
  }
`
const FilterItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(7rem, 1fr));
  gap: 1rem;
`
const FilterItem = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 0.5rem 0; */
  background-color: #efeff0;
  border-radius: 999rem;
  align-items: center;
`
const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Darker = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`
const Shadow = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

const Slider = styled(motion.div)`
  background-color: white;
  position: fixed;
  bottom: 0;
  padding: 1.5rem 2rem;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

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
