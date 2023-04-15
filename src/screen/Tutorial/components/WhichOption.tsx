import React from 'react'
import styled from 'styled-components'
import { Picture, ParkingLot, Elevator, Path, Wheel, Toilet } from '../../../assets/svg'

import store from 'store/index'
import { SubTitle } from './HasGuardian'
type OptionProps = {
  onChangeParkingLot: () => void
  onChangeWheelchair: () => void
  onChangeToilet: () => void
  onChangePath: () => void
  onChangeElevator: () => void
}
const WhichOption: React.FC<OptionProps> = ({
  onChangeParkingLot,
  onChangeWheelchair,
  onChangeToilet,
  onChangePath,
  onChangeElevator,
}) => {
  const selection = store((state) => state.selection)

  return (
    <Wrapper>
      <SubTitle className='filter-medium'>필요 시설</SubTitle>
      <Title>어떤 옵션이 필요하신가요?</Title>
      <OptionWrapper>
        <Option
          highlight={!!selection.parkingAvailable}
          onClick={() => {
            onChangeParkingLot()
          }}
        >
          <ParkingLot />
          <OptionName>장애인 주차장</OptionName>
        </Option>
        <Option
          highlight={!!selection.wheelChairRentable}
          onClick={() => {
            onChangeWheelchair()
          }}
        >
          <Wheel />
          <OptionName>휠체어 대여</OptionName>
        </Option>
        <Option
          highlight={!!selection.toiletAvailable}
          onClick={() => {
            onChangeToilet()
          }}
        >
          <Toilet />
          <OptionName>장애인 전용 화장실</OptionName>
        </Option>
        <Option
          highlight={!!selection.pathExists}
          onClick={() => {
            onChangePath()
          }}
        >
          <Path />
          <OptionName>무단차/경사로</OptionName>
        </Option>
        <Option
          highlight={!!selection.elevatorAvailable}
          onClick={() => {
            onChangeElevator()
          }}
        >
          <Elevator />
          <OptionName>엘레베이터</OptionName>
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
  ${(props) => (props.highlight ? 'border 0.2rem solid #51BE9D;' : '')}
`

const OptionName = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
`

export default WhichOption
