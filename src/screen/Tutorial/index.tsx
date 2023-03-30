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
    <Mx className='mx'>
      <Header>
        <ProgressBar percent={percent} />
      </Header>
      <Main>
        {param.type === '1' ? (
          <HasGaurdin />
        ) : param.type === '2' ? (
          <WhichOption />
        ) : param.type === '3' ? (
          <WhichPlace />
        ) : param.type === 'result' ? (
          <Result />
        ) : null}
      </Main>
      <NaxtBtn onClick={handleIncrement} disabled={percent >= 100}>
        다음
      </NaxtBtn>
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

const NaxtBtn = styled.button`
  width: 100%;
  height: 4.187rem;
  background-color: #19191b;
  border-radius: 2rem;
  font-size: 1.3rem;
  line-height: 2rem;
  color: white;
`

export default Tutorial
