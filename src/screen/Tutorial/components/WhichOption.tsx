import React from 'react'
import styled from 'styled-components'
import { Selection } from '../types/selection'
import { ReactComponent as Picture } from 'assets/picture.svg'
import { ReactComponent as ParkingLot } from 'assets/parkingLot.svg'
import { ReactComponent as Elevator } from 'assets/elevator.svg'
import { ReactComponent as Path } from 'assets/path.svg'
import { ReactComponent as Wheel } from 'assets/wheel.svg'
import { ReactComponent as Toilet } from 'assets/toilet.svg'

import store from 'store/index'
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
      <SubTitle>필요 시설</SubTitle>
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
const SubTitle = styled.div`
  background-color: #61646b;
  color: #fafafa;
  width: 8.2rem;
  height: 3.4rem;
  border-radius: 11rem;
  margin-top: 29px;
  margin-bottom: 18px;
  padding: 0.3rem 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2.8rem;
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
  background-color: #efeff0;
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

export default WhichOption
