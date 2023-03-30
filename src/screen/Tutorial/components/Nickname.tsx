import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ReactComponent as Picture } from 'assets/picture.svg'

const Nickname = () => {
  return (
    <Wrapper>
      <SubTitle>???</SubTitle>
      <Title>여행 닉네임을 알려주세요!</Title>
      <InputBox>
        <label htmlFor='nickname'>
          <div>
            <input name='nickname' id='id' type='name' placeholder='닉네임을 입력해주세요' />
          </div>
        </label>
      </InputBox>
    </Wrapper>
  )
}

const InputBox = styled.div`
  background-color: #efeff0;
  width: 100%;
  height: 6.5rem;
  border-radius: 2rem;
  :focus-within {
    border: 0.1rem solid blue;
  }
  label {
    display: block;
    width: 100%;
    height: 100%;
    padding: 1.6rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    background-color: inherit;
    margin-top: 0.2rem;
    width: 100%;
    height: 2.8rem;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
    margin: 0 auto;
    ::placeholder {
      color: #afb1b6;
    }
  }
`

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

export default Nickname
