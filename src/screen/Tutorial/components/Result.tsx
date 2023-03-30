import { useQuery } from '@apollo/client'
import { GetSearchListQuery } from 'api/graphql'
import { PER_PAGE } from 'constants/common'
import useGetSelection from 'hooks/useGetSelection'
import React, { useMemo, useState } from 'react'
import { Loading } from 'routes/Router'
import store from 'store/index'

import styled from 'styled-components'
import { SearchQuery } from '../../Search'
import Item from './Item'

const Result = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { selection, setToggle, position } = store((state) => ({
    setToggle: state.setToggle,
    position: state.position,
    selection: state.selection,
  }))
  const variables = useMemo(() => {
    const vars = Object.keys(selection).reduce((acc, cur) => {
      if (cur === 'needCompanion') {
        return { ...acc, [cur]: selection[cur] }
      } else if (!selection[cur]) {
        return { ...acc }
      }
      return { ...acc, [cur]: selection[cur] }
    }, {})
    if (!position?.coords.latitude || !position?.coords.longitude) {
      return { ...vars, first: PER_PAGE }
    }
    return {
      ...vars,
      coordinates: {
        latitude: position?.coords.latitude,
        longitude: position?.coords.longitude,
      },
      first: PER_PAGE,
    }
  }, [position])
  console.log(variables, 'variables')
  const {
    data: { places } = {},
    fetchMore,
    loading,
    called,
  } = useQuery<GetSearchListQuery>(SearchQuery, {
    variables,
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      setIsLoading(false)
    },
  })
  const name = store((state) => state.myName)
  return isLoading || !called ? (
    <Loading text='결과를 불러오고 있어요..' />
  ) : (
    <Wrapper>
      {/* <div>
        <span>자연경관</span>
      </div> */}
      <Item />
      <Title>
        {name}에게 어울리는 <br />총 {places?.totalCount}개의 <br />
        편안한 여행지를 찾았어요
      </Title>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const Title = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
`

export default Result
