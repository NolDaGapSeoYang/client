import React from 'react'
import styled from 'styled-components'
import { Selection } from '../types/selection'
import { ReactComponent as Picture } from 'assets/picture.svg'
import { ReactComponent as Local } from 'assets/local.svg'
import { ReactComponent as Nature } from 'assets/nature.svg'
import { ReactComponent as Tracking } from 'assets/tracking.svg'

import store from 'store/index'
import { SubTitle } from './HasGuardian'
type PlaceProps = {
  onClickCategory: (category: string) => void
}

const WhichPlace: React.FC<PlaceProps> = ({ onClickCategory }) => {
  const selection = store((state) => state.selection)
  return (
    <Wrapper>
      <SubTitle className='filter-medium'>필요 시설</SubTitle>
      <Title>어떤 옵션이 필요하신가요?</Title>
      <OptionWrapper>
        <Option
          highlight={!!selection.categories?.includes('자연경관')}
          onClick={() => {
            onClickCategory('자연경관')
          }}
        >
          <Nature />
          <OptionName>자연경관</OptionName>
          <Example>섬, 숲길/굴/폭포, 공원</Example>
        </Option>
        <Option
          highlight={!!selection.categories?.includes('트레킹')}
          onClick={() => {
            onClickCategory('트레킹')
          }}
        >
          <Tracking />
          <OptionName>트레킹</OptionName>
          <Example>오름, 산, 올레</Example>
        </Option>
        <Option
          highlight={!!selection.categories?.includes('바닷가')}
          onClick={() => {
            onClickCategory('바닷가')
          }}
        >
          <Picture />
          <OptionName>바닷가</OptionName>
          <Example>바다, 해변, 해안</Example>
        </Option>
        <Option
          highlight={!!selection.categories?.includes('동네 구경')}
          onClick={() => {
            onClickCategory('동네 구경')
          }}
        >
          <Local />
          <OptionName>동네 구경</OptionName>
          <Example>시장, 마을</Example>
        </Option>
        <Option
          highlight={!!selection.categories?.includes('문화예술')}
          onClick={() => {
            onClickCategory('문화예술')
          }}
        >
          <Picture />
          <OptionName>문화예술</OptionName>
          <Example>전시, 테마파크, 박물관, 공연</Example>
        </Option>
        <Option
          highlight={!!selection.categories?.includes('쇼핑')}
          onClick={() => {
            onClickCategory('쇼핑')
          }}
        >
          <Picture />
          <OptionName>쇼핑</OptionName>
          <Example>면세점, 기념품샵</Example>
        </Option>
      </OptionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  column-gap: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  /* margin-bottom: 36rem; */
`
const Option = styled.button<{ highlight: boolean }>`
  /* width: 15rem; */
  width: 48%;
  aspect-ratio: 1.3/1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 11rem; */
  background-color: #fafafa;
  border-radius: 1rem;
  padding: 1rem 0rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  ${(props) => (props.highlight ? 'border 1px solid #51BE9D;' : '')}
`
const OptionName = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
`

const Example = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`

export default WhichPlace
