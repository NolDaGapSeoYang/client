import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled, { withTheme } from 'styled-components'
import HasGaurdian from './components/HasGuardian'
import Result from './components/Result'
import WhichOption from './components/WhichOption'
import WhichPlace from './components/WhichPlace'
import ProgressBar from './components/ProgressBar'
import Nickname from './components/Nickname'

const Tutorial = () => {
  const param = useParams()
  console.log(param)
  const [percent, setPercent] = React.useState(20)

  const navigate = useNavigate()

  const getType = () => {
    if (param.type) {
      return parseInt(param.type)
    } else {
      return 1
    }
  }

  const handleNext = () => {
    console.log('다음 버튼 클릭!!')
    const type = getType()
    // console.log(type) // 숫자로 변환된 값
    setPercent((prevPercent) => prevPercent + 20)

    if (type === 5) {
      navigate(`/result`)
    } else {
      navigate(`/option/${type + 1}`)
    }
    // navigate(`/option/${String(intParam + 1)}`)
    // navigate(`/option/`)
  }

  const handlePrev = () => {
    console.log('이전 버튼 클릭!!')
    const type = getType()
    console.log('이전버튼 클릭시 type :', type)
    setPercent((prevPercent) => prevPercent - 20)
    if (type === 1) {
      navigate(`/`)
    } else {
      navigate(`/option/${type - 1}`)
    }
  }

  return (
    <Mx className='mx'>
      <Header>
        <ProgressBar percent={percent} />
      </Header>
      <Main>
        {param.type === '1' ? (
          <HasGaurdian />
        ) : param.type === '2' ? (
          <Nickname />
        ) : param.type === '3' ? (
          <WhichOption />
        ) : param.type === '4' ? (
          <WhichPlace />
        ) : param.type === '5' ? (
          <Result />
        ) : null}
      </Main>
      <Footer>
        {param.type === '2' || '3' || '4' || '5' ? (
          <PrevBtn onClick={handlePrev}>이전</PrevBtn>
        ) : null}
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
