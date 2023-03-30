import React from 'react'
import { useParams } from 'react-router-dom'
import styled, { withTheme } from 'styled-components'
import HasGaurdin from './components/hasGuardian'
import Result from './components/Result'
import WhichOption from './components/WhichOption'
import WhichPlace from './components/WhichPlace'
import ProgressBar from './components/ProgressBar'

const Tutorial = () => {
  const param = useParams()
  console.log(param)
  const [percent, setPercent] = React.useState(25)

  const handleIncrement = () => {
    setPercent((prevPercent) => prevPercent + 25)
  }

  return (
    <>
      <Header>
        <ProgressBar percent={percent} />
        {/* <Line /> */}
      </Header>
      <div></div>
      {param.type === '1' ? (
        <HasGaurdin />
      ) : param.type === '2' ? (
        <WhichOption />
      ) : param.type === '3' ? (
        <WhichPlace />
      ) : param.type === 'result' ? (
        <Result />
      ) : null}
      <NaxtBtn onClick={handleIncrement}>다음으로 가기</NaxtBtn>
    </>
  )
}

const Header = styled.header`
  width: 100vw;
  max-width: inherit;
  position: relative;
  left: -2rem;
`
// const Line = withTheme(styled.div`
//   width: 100%;
// `)

// const Line = styled.div`
//   position: absolute;
//   width: 100vw;
//   left: 2rem;
//   height: 2px;
//   background-color: red;
// `

const NaxtBtn = styled.button`
  width: 100%;
  height: 4.187rem;
  background-color: #19191b;
`

export default Tutorial
