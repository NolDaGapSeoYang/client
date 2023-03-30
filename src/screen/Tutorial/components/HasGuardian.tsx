import React from 'react'
import styled from 'styled-components'

const HasGaurdin = () => {
  return (
    <>
      <SubTitle>시설 선택</SubTitle>
      <Title>보호자와 동행하시나요?</Title>
      <OptionWrapper>
        <Option>있음</Option>
        <Option>없음</Option>
      </OptionWrapper>
    </>
  )
}

const SubTitle = styled.div`
  background-color: #efeff0;
  width: 8rem;
  height: 3rem;
  border-radius: 11rem;
  margin-top: 29px;
  margin-bottom: 18px;
  padding: 0.3rem 1.3rem;
  display: flex;
  justify-content: center;
  align-items: centers;
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
  background-color: yellow;
  column-gap: 2rem;
  justify-content: space-between;
  /* margin-bottom: 36rem; */
`
const Option = styled.button`
  /* width: 15rem; */
  flex: 1;
  aspect-ratio: 1.3/1;
  display: inline;
  /* height: 11rem; */
  background-color: #efeff0;
  border-radius: 1rem;
  padding: 1rem 0rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`

export default HasGaurdin
