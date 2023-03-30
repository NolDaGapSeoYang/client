import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import store from 'store/index'
import styled, { withTheme } from 'styled-components'

import HasGaurdian from './components/HasGuardian'
import Nickname from './components/Nickname'
import ProgressBar from './components/ProgressBar'
import Result from './components/Result'
import WhichOption from './components/WhichOption'
import WhichPlace from './components/WhichPlace'
import { ReactComponent as Check } from 'assets/InfoCircleicon.svg'
import { Selection } from './types/selection'

const Tutorial = () => {
  const [selection, setSelection] = store((state) => [state.selection, state.setSelection])

  const [step, setStep] = React.useState(1)
  const [percent, setPercent] = React.useState(20)

  const navigate = useNavigate()

  const handleNext = () => {
    // console.log(type) // 숫자로 변환된 값
    setPercent((prevPercent) => prevPercent + 20)

    console.log(step)

    if (step === 5) {
      // window.localStorage.setItem('nickName', selection.nickName)
      // selection cleaning
      // selection에서 undefined인 key값을 모두 삭제해야함

      const searchParams = new URLSearchParams()
      for (const key in selection) {
        if (key === 'categories') {
          if (!!selection.categories && selection.categories.length > 0) {
            //set search params
            const categories = selection.categories.join(',')

            searchParams.append('categories', categories)
          }
          // searchParams.append('categories', selection.categories.)

          // category가 undefinded면 넣으면 안됨
          // category가 있는데, 비어있다면 넣으면 안됨
          // 아니라면, 각 카테고리에 대해서
          // searchParams.append('categories', category);
        } else {
          // boolean value만 있음
          //@ts-expect-error key
          const value = selection[key]
          if (!!value) {
            searchParams.set(key, value)
          }
        }
      }

      // const searchParams = new URLSearchParams({
      //   elevatorAvailable: 'true',
      // })
      // for (const category of ['관광', '동네탐방']) {
      //   searchParams.append('categories', category)
      // }
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
    setSelection({ needCompanion })
  }

  console.log(selection, ' <<<??')
  const onChangeParkingLot = () => {
    setSelection({ parkingAvailable: !selection.parkingAvailable })
  }
  const onChangeWheelchair = () => {
    setSelection({ wheelChairRentable: !selection.wheelChairRentable })
  }
  const onChangeToilet = () => {
    setSelection({ toiletAvailable: !selection.toiletAvailable })
  }
  const onChangePath = () => {
    setSelection({ pathExists: !selection.pathExists })
  }

  const onChangeElevator = () => {
    setSelection({ elevatorAvailable: !selection.elevatorAvailable })
  }

  const onClickCategory = (category: string) => {
    const prevCategories = selection.categories || []
    if (!prevCategories.includes(category)) {
      const newCategories = [...prevCategories, category]

      setSelection({
        categories: newCategories,
      })
    } else {
      const newCategories = prevCategories.filter((pCategory) => pCategory !== category)
      setSelection({
        categories: newCategories,
      })
    }
  }

  return (
    <Mx className='mx'>
      <Header>
        <ProgressBar percent={percent} />
      </Header>
      <Main>
        {step === 1 ? (
          <HasGaurdian onChangeNeedCompanion={onChangeNeedCompanion} />
        ) : step === 2 ? (
          <Nickname />
        ) : step === 3 ? (
          <WhichOption
            onChangeParkingLot={onChangeParkingLot}
            onChangeWheelchair={onChangeWheelchair}
            onChangeToilet={onChangeToilet}
            onChangePath={onChangePath}
            onChangeElevator={onChangeElevator}
          />
        ) : step === 4 ? (
          <WhichPlace onClickCategory={onClickCategory} />
        ) : step === 5 ? (
          <Result />
        ) : null}
        {step === 1 && !selection.needCompanion ? (
          <Alert className='title-small'>
            <Check />
            <p>
              보호자 동행 없이 여행하는 경우
              <br />
              시설 방문에 여려움이 있는 곳은 빼드릴게요.
            </p>
            <b className='body-small'>(입구 경사로가 매우 가파른 곳 등)</b>
          </Alert>
        ) : null}
      </Main>
      <Footer>
        {step > 1 ? <PrevBtn onClick={handlePrev}>이전</PrevBtn> : null}
        <NaxtBtn onClick={handleNext}>다음</NaxtBtn>
      </Footer>
    </Mx>
  )
}

const Alert = styled.div`
  padding: 1.4rem 0;
  position: absolute;
  bottom: 0;
  border: 1px solid #61646b;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Mx = styled.div`
  display: flex;
  padding: 2rem;
  min-height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
`

const Header = styled.header`
  width: 100vw;
  max-width: inherit;
  position: relative;
  padding-top: 5rem;
  left: -2rem;
`
const Main = styled.main`
  position: relative;
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
  background-color: #51be9d;
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
