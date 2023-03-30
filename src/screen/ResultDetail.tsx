import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ResultDetail = () => {
  return (
    <Container>
      <Heading>어드레감디</Heading>

      <Description
        style={{
          marginTop: '12.5rem',
        }}
      >
        ‘어디로 갈까?’의 제주 방언으로,
      </Description>

      <Description
        style={{
          marginTop: '3.5rem',
        }}
      >
        휠체어를 타고도
        <br />
        제주도의 @곳을 편안하게
        <br />
        방문할 수 있다.
        <br />
      </Description>

      <StartLink to='/option'>시작하기</StartLink>
    </Container>
  )
}

export default ResultDetail

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  position: relative;

  padding: 0 2rem;
`

const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 4.4rem;
  line-height: 5.3rem;

  margin-top: 10rem;
`

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
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
