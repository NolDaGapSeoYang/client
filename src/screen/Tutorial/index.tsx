import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled, { withTheme } from 'styled-components'

import HasGaurdian from './components/HasGuardian'
import Nickname from './components/Nickname'
import ProgressBar from './components/ProgressBar'
import Result from './components/Result'
import WhichOption from './components/WhichOption'
import WhichPlace from './components/WhichPlace'
import { Selection } from './types/selection'

const Tutorial = () => {
  const [selection, setSelection] = React.useState<Selection>({
    needCompanion: false,
    nickName: '',
    parkingAvailable: false,
    wheelChairRentable: false,
    elevatorAvailable: false,
    toiletAvailable: false,
    pathExists: false,
  })

  const [step, setStep] = React.useState(1)
  const [percent, setPercent] = React.useState(20)

  const navigate = useNavigate()

  const handleNext = () => {
    // console.log(type) // 숫자로 변환된 값
    setPercent((prevPercent) => prevPercent + 20)

    if (step === 5) {
      // window.localStorage.setItem('nickName', selection.nickName)

      // selection cleaning
      // selection에서 undefined인 key값을 모두 삭제해야함

      const searchParams = new URLSearchParams({
        elevatorAvailable: 'true',
      })

      for (const category of ['관광', '동네탐방']) {
        searchParams.append('categories', category)
      }

      navigate(`/result?${searchParams.toString()}`)
    } else {
      setStep((prevStep) => prevStep + 1)
    }
  }

  const handlePrev = () => {
    console.log('이전 버튼 클릭!!')
    setPercent((prevPercent) => prevPercent - 20)
    if (step === 1) {
      navigate(`/`)
    } else {
      setStep((prevStep) => prevStep - 1)
    }
  }

  const onChangeNeedCompanion = (needCompanion: boolean) => {
    setSelection((prev) => ({
      ...prev,
      needCompanion,
    }))
  }

  const onChangeParkingLot = () => {
    setSelection((prev) => ({
      ...prev,
      parkingAvailable: !prev.parkingAvailable,
    }))
  }
  const onChangeWheelchair = () => {
    setSelection((prev) => ({
      ...prev,
      wheelChairRentable: !prev.wheelChairRentable,
    }))
  }
  const onChangeToilet = () => {
    setSelection((prev) => ({
      ...prev,
      toiletAvailable: !prev.toiletAvailable,
    }))
  }
  const onChangePath = () => {
    setSelection((prev) => ({
      ...prev,
      pathExists: !prev.pathExists,
    }))
  }

  const onChangeElevator = () => {
    setSelection((prev) => ({
      ...prev,
      elevatorAvailable: !prev.elevatorAvailable,
    }))
  }

  return (
    <Mx className='mx'>
      <Header>
        <ProgressBar percent={percent} />
      </Header>
      <Main>
        {step === 1 ? (
          <HasGaurdian selection={selection} onChangeNeedCompanion={onChangeNeedCompanion} />
        ) : step === 2 ? (
          <Nickname />
        ) : step === 3 ? (
          <WhichOption
            selection={selection}
            onChangeParkingLot={onChangeParkingLot}
            onChangeWheelchair={onChangeWheelchair}
            onChangeToilet={onChangeToilet}
            onChangePath={onChangePath}
            onChangeElevator={onChangeElevator}
          />
        ) : step === 4 ? (
          <WhichPlace />
        ) : step === 5 ? (
          <Result />
        ) : null}
      </Main>
      <Footer>
        {step > 1 ? <PrevBtn onClick={handlePrev}>이전</PrevBtn> : null}
        <NaxtBtn onClick={handleNext}>다음</NaxtBtn>
      </Footer>
    </Mx>
  )
}

// const Wrapper = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
// `

const Mx = styled.div`
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
`

const Header = styled.header`
  width: 100vw;
  max-width: inherit;
  position: relative;
  left: -2rem;
`
const Main = styled.main`
  flex: 1;
`

const PrevBtn = styled.button`
  width: 100%;
  height: 4.187rem;
  background-color: #efeff0;
  border-radius: 2rem;
  font-size: 1.3rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  color: #19191b;
`

const NaxtBtn = styled.button`
  width: 100%;
  height: 4.187rem;
  background-color: #19191b;
  border-radius: 2rem;
  font-size: 1.3rem;
  line-height: 2rem;
  color: white;
`

const Footer = styled.footer`
  margin-top: 4rem;
  /* border-top: 1px solid red; */
`

export default Tutorial
