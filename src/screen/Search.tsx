import styled from 'styled-components'
import { ReactComponent as KakaoIcon } from 'assets/kakao.svg'

import store from 'store/index'
import { gql, useQuery } from '@apollo/client'
import { PER_PAGE } from 'constants/common'
import useGetSelection from 'hooks/useGetSelection'
import { GetSearchListQuery, GetSearchListQueryVariables } from 'api/graphql'
import { useMemo, useState } from 'react'
import DestinationCard from 'components/Search/DestinationCard'
import { Loading } from 'routes/Router'
import { useParams, useSearchParams } from 'react-router-dom'
import Spinner from 'components/common/Spinner'

const SearchQuery = gql`
  query GetSearchList(
    $before: String
    $after: String
    $first: Int
    $last: Int
    $categories: [String!]
    $parkingAvailable: Boolean
    $wheelChairRentable: Boolean
    $elevatorAvailable: Boolean
    $toiletAvailable: Boolean
    $pathExists: Boolean
    $needCompanion: Boolean!
    $coordinates: CoordinateInput
  ) {
    places(
      before: $before
      after: $after
      first: $first
      last: $last
      categories: $categories
      parkingAvailable: $parkingAvailable
      wheelChairRentable: $wheelChairRentable
      elevatorAvailable: $elevatorAvailable
      toiletAvailable: $toiletAvailable
      pathExists: $pathExists
      needCompanion: $needCompanion
      coordinates: $coordinates
    ) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasNextPage
      }
      edges {
        node {
          id
          name
          address
          thumbnails
          parkingAvailable
          parkingCount
          wheelChairRentable
          elevatorAvailable
          toiletAvailable
          pathExists
          pathDescription
          latitude
          longitude
          category
          needCompanion
          distance
          tel
        }
        cursor
      }
      totalCount
    }
  }
`

const Search = () => {
  const { setToggle, position } = store((state) => ({
    setToggle: state.setToggle,
    position: state.position,
  }))
  const [isLoading, setIsLoading] = useState(true)
  const selection = useGetSelection()
  const variables = useMemo(() => {
    if (!position?.coords.latitude || !position?.coords.longitude) {
      return { ...selection, first: PER_PAGE }
    }
    return {
      ...selection,
      coordinates: {
        latitude: position?.coords.latitude,
        longitude: position?.coords.longitude,
      },
      first: PER_PAGE,
    }
  }, [position])
  const {
    data: { places } = {},
    fetchMore,
    loading,
    called,
  } = useQuery<GetSearchListQuery>(SearchQuery, {
    variables,
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      console.log(data, 'dd')
      setIsLoading(false)
    },
  })
  const hasNextPage = places?.pageInfo.hasNextPage
  const edges = useMemo(() => places?.edges, [places?.edges])

  return isLoading || !called ? (
    <Loading text='결과를 불러오고 있어요..' />
  ) : (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '5rem',
          paddingBottom: '1rem',
        }}
        className='px'
      >
        <h3 className='title-large'>
          내 주변 가까운 <br />
          {places?.totalCount}개의 추천 관광지
        </h3>
        <div
          onClick={() => {
            console.log('onClick')
            window.Kakao.Share.sendCustom({
              templateId: 91940,
              templateArgs: {
                thumb_1: edges[0].node.thumbnails[0],
                thumb_2: edges[1].node.thumbnails[0],
                thumb_3: edges[2].node.thumbnails[0],
                name: 'test',
                ...selection,
              },

              callback: () => console.log('???'),
            })
          }}
        >
          <KakaoIcon />
        </div>
      </div>

      <Stickable>
        <FilterList className='mx scrollbar-hide' onClick={() => setToggle(true)}>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
            <FilterItem className='filter-small' key={item}>
              {item}
            </FilterItem>
          ))}
        </FilterList>
      </Stickable>
      <DestinationList>
        {edges
          ? edges.map(({ node }, i) => (
              <DestinationCard
                key={node.id}
                node={node}
                idx={i}
                fetchMore={() => {
                  if (hasNextPage) {
                    fetchMore({
                      variables: {
                        after: places.pageInfo.endCursor,
                      },
                    })
                  }
                }}
                maxLength={edges.length}
              />
            ))
          : null}
        {loading ? (
          <Spinner
            trackColor='#a7a7a7'
            indicatorColor='#4f4f4f'
            size={50}
            progress={25}
            trackWidth={5}
            indicatorWidth={5}
            spinnerMode={true}
          />
        ) : null}
      </DestinationList>
    </Wrapper>
  )
}

export default Search

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Stickable = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`

const DestinationList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: #efeff0;
`
const FilterList = styled.div`
  display: flex;
  column-gap: 0.75rem;
  border-top: 1px solid #efeff0;
  border-bottom: 1px solid #efeff0;
  padding: 1.5rem 2rem;

  background-color: white;

  width: 100vw;
  overflow-x: scroll;
`
const FilterItem = styled.div`
  font-size: 1.7rem;
  padding: 0.25rem 0;
  width: 7rem;
  text-align: center;
  background-color: #efeff0;
  border-radius: 999rem;
`
