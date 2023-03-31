import { GetSearchListQuery } from 'api/graphql'
import { ReactComponent as KakaoIcon } from 'assets/kakao.svg'
import Spinner from 'components/common/Spinner'
import DestinationCard from 'components/Search/DestinationCard'
import { FILTER_TYPE, PER_PAGE } from 'constants/common'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Loading } from 'routes/Router'
import store, { Selection } from 'store/index'
import styled from 'styled-components'

import { gql, useQuery } from '@apollo/client'

export const SearchQuery = gql`
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
  const [searchParams] = useSearchParams()

  const { toggle, setToggle, position, myName, sharedName, selection, setSelection } = store(
    (state) => ({
      setToggle: state.setToggle,
      position: state.position,
      myName: state.myName,
      sharedName: state.sharedName,
      toggle: state.toggle,
      selection: state.selection,
      setSelection: state.setSelection,
    }),
  )
  const [isLoading, setIsLoading] = useState(true)
  // const selection = useGetSelection()
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
  }, [position, selection])
  const {
    data: { places } = {},
    fetchMore,
    loading,
    called,
    refetch,
  } = useQuery<GetSearchListQuery>(SearchQuery, {
    variables,
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      setIsLoading(false)
    },
  })
  const hasNextPage = places?.pageInfo.hasNextPage
  const edges = useMemo(() => places?.edges, [places?.edges])

  useEffect(() => {
    if (!toggle) {
      refetch()
      // setIsLoading(true)
    }
  }, [toggle, selection])

  useEffect(() => {
    const entries = searchParams.entries()
    let defaultSelection: Selection = {
      categories: null,
      parkingAvailable: false,
      wheelChairRentable: false,
      elevatorAvailable: false,
      toiletAvailable: false,
      pathExists: false,
      needCompanion: false,
    }

    for (const entry of entries) {
      const [key, value] = entry
      if (key === 'categories') {
        defaultSelection[key] = value.split(',')
      } else {
        //@ts-expect-error Key Type
        defaultSelection[key] = value === 'true'
      }
    }

    setSelection(defaultSelection)
  }, [])

  const selected = store((state) => state.selection)

  return isLoading || !called ? (
    <Loading text='결과를 불러오고 있어요..' page={false} />
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
          {sharedName ? `${sharedName}님` : myName ? `${myName}님` : '내'} 주변 가까운 <br />
          {places?.totalCount}개의 추천 관광지
        </h3>
        <div
          onClick={() => {
            let vars = { ...selection }
            if (vars.categories?.length) {
              vars.categories = vars.categories.join(',')
            }

            window.Kakao.Share.sendCustom({
              templateId: 91940,
              templateArgs: {
                thumb_1: edges[0].node.thumbnails[0],
                thumb_2: edges[1].node.thumbnails[0],
                thumb_3: edges[2].node.thumbnails[0],
                name: sharedName || myName,
                ...vars,
              },
            })
          }}
        >
          <KakaoIcon />
        </div>
      </div>

      <Stickable>
        <FilterList className='mx scrollbar-hide' onClick={() => setToggle(true)}>
          {Object.keys(selected).map((item) => {
            if (item === 'categories') {
              if (selected[item]?.length) {
                return selected[item].map((item) =>
                  item ? (
                    <FilterItem className='filter-small' key={item}>
                      {item}
                    </FilterItem>
                  ) : null,
                )
              } else {
                return null
              }
            } else if (item === 'needCompanion' && !selected[item]) {
              return null
            }
            return selected[item] ? (
              <FilterItem className='filter-small' key={item}>
                {FILTER_TYPE[item]}
              </FilterItem>
            ) : null
          })}
        </FilterList>
      </Stickable>
      <DestinationList>
        {edges
          ? edges.map(({ node }, i) => (
              <DestinationCard
                key={node.id + i + ''}
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
  font-size: 1.5rem;
  padding: 0.3rem 1.2rem;
  text-align: center;
  background-color: #61646b;
  color: white;
  border-radius: 999rem;
`
