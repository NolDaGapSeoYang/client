import React from 'react'
import styled from 'styled-components'

interface ProgressBarProps {
  percent: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <Wrapper>
      <BarContainer>
        <Bar percent={percent}></Bar>
      </BarContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 2rem 2rem;
  /* height: 100%; */
  border-bottom: 0.1rem solid #efeff0; // 작업 후 EFEFF0 로 변경
  /* background-color: yellow; */
`

const BarContainer = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  height: 0.7rem;
  border-radius: 15px;
`

const Bar = styled.div<ProgressBarProps>`
  height: 100%;
  border-radius: 10px;
  background-color: #50b194;
  width: ${(props) => `${props.percent}%`};
`

export default ProgressBar
