import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bgImg from '../assets/main.png'
import { ReactComponent as Title } from 'assets/title.svg'

const Home = () => {
  return (
    <Container style={{ backgroundImage: `url(${bgImg})` }}>
      <SubTitle>제주 휠체어 관광지 250곳 중</SubTitle>
      {/* <Heading>어드레감디?</Heading> */}
      <Title
        style={{
          marginTop: '1.5rem',
        }}
      />
      {/* <Description
        style={{
          marginTop: '12.5rem',
        }}
      >
        ‘어디로 갈까?’의 제주 방언으로,
      </Description> */}

      <Description
        style={{
          marginTop: '0.5rem',
        }}
      >
        원하는 조건 선택만 하면,
        <br />
        나에게 딱 맞는 장소를 추천해요!
      </Description>

      <StartLink to='/option'>시작하기</StartLink>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 2rem;
`
const SubTitle = styled.h4`
  margin-top: 10rem;
  font-size: 1.6rem;
  line-height: 3rem;
  font-weight: 600;
  color: #50b194;
`

const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 4.4rem;
  line-height: 5.3rem;
`

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3.5rem;
`

const StartLink = styled(Link)`
  height: 4.8rem;
  width: 100%;
  background: #19191b;
  border-radius: 9999px;
  color: #fff;
  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  line-height: 2.4rem;

  margin-top: auto;
  margin-bottom: 4rem;
`
