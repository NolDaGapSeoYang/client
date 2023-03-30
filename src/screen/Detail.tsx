import styled from 'styled-components'

const Detail = () => {
  return (
    <Wrapper>
      <Grid>
        <Title>어떤 시설이 필요하신가요?</Title>
        <SelectAll>
          <label htmlFor='all'>전체 선택</label>
          <input type='checkbox' name='all' id='all' />
        </SelectAll>
        <Item>선택 UI</Item>
        <Item>선택 UI</Item>
        <Item>선택 UI</Item>
        <Item>선택 UI</Item>
        <Item>선택 UI</Item>
        <Item>선택 UI</Item>
      </Grid>
      <Button>다음 페이지로</Button>
    </Wrapper>
  )
}

export default Detail

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

const Button = styled.button`
  padding: 0.25em 1.25em;
  background-color: white;
  width: fit-content;
  align-self: flex-end;
`

const Wrapper = styled.section`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: space-between;
  min-height: 100vh;
`

const SelectAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.75rem;
`
const Item = styled.div`
  background-color: #333;
  padding: 10px;
  border-radius: 0.5em;
`

const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
`
