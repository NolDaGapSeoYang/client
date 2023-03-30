import React from 'react'

import styled from 'styled-components'
import Item from './Item'

const Result = () => {
  return (
    <Wrapper>
      {/* <div>
        <span>자연경관</span>
      </div> */}
      <Item />
      <Title>
        총 20개의 <br />
        편안한 여행지를 찾았어요
      </Title>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const Title = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
`

export default Result
