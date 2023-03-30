import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Picture } from 'assets/picture.svg'

const HasGaurdian = () => {
  return (
    <Wrapper>
      <SubTitle>동행 여부</SubTitle>
      <Title>보호자와 동행하시나요?</Title>
      <OptionWrapper>
        <Option>
          <Picture />
        </Option>
        <Option>
          <Picture />
        </Option>
      </OptionWrapper>
      <OptionWrapper>
        <Answer>아니요</Answer>
        <Answer>예</Answer>
      </OptionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SubTitle = styled.div`
  background-color: #efeff0;
  width: 8rem;
  height: 3rem;
  border-radius: 11rem;
  margin-top: 29px;
  margin-bottom: 18px;
  padding: 0.3rem 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  display: block;
  font-size: 2.2rem;
  line-height: 2.8rem;
  font-weight: 500;
  color: #19191b;
  margin-bottom: 2rem;
`

const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  /* background-color: yellow; */
  column-gap: 2rem;
  justify-content: space-between;
  flex: 1;
  /* margin-bottom: 36rem; */
`
const Option = styled.button`
  /* width: 15rem; */
  flex: 1;
  aspect-ratio: 1.3/1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 11rem; */
  background-color: #efeff0;
  border-radius: 1rem;
  padding: 1rem 0rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`
const OptionName = styled.span`
  display: block;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
`
const Answer = styled.span`
  flex: 1;
  /* aspect-ratio: 1.3/1; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0rem;
  font-weight: 500;
  font-size: 16px;
  /* line-height: 24px; */
  /* background-color: yellow; */
`

export default HasGaurdian