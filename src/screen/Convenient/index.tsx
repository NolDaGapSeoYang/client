import React from 'react'
import styled from 'styled-components'

const Convenient = () => {
  return (
    <Main>
      <Wrapper>
        <Title>어떤 시설이 필요하신가요?</Title>
        <SelectAll>
          <label htmlFor='all'>전체 선택</label>
          <input type='checkbox' name='all' id='all' />
        </SelectAll>
        <Option>선택 UI</Option>
        <Option>선택 UI</Option>
        <Option>선택 UI</Option>
        <Option>선택 UI</Option>
        <Option>선택 UI</Option>
        <Option>선택 UI</Option>
        <Option>선택 UI</Option>
        <NextBtn>다음 페이지로</NextBtn>
      </Wrapper>
    </Main>
  )
}

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
`
const Wrapper = styled.div`
  margin: 8rem 2.4rem;
  border: 1px solid rebeccapurple;
`

const Title = styled.h1`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  font-weight: 400;
  line-height: 3.026rem;
`
const SelectAll = styled.div`
  font-size: 2.5rem;
  margin: 1.1rem 0rem;
  text-align: end;
  & > label {
    margin-right: 1.3rem;
  }
`

const Option = styled.button`
  width: 100%;
  height: 5rem;
  font-size: 2.5rem;
  background-color: #efeff0;
  text-align: start;
  padding: 1rem;
  & + & {
    margin-top: 2.2rem;
  }
`

const NextBtn = styled.button`
  width: 16.6rem;
  height: 5rem;
  margin-top: 5.5rem;
  background-color: white;
  border: 0.1rem solid black;
  margin-left: auto;
  display: block;
`

export default Convenient
