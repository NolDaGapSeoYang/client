import { easeInOut, motion, Variants } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import store, { Selection } from 'store/index'
import styled from 'styled-components'
import { ReactComponent as Reset } from 'assets/reset.svg'
import { ReactComponent as X } from 'assets/x-thin.svg'
import { gql, useQuery } from '@apollo/client'
import { GetCountQuery, GetCountQueryVariables, GetSearchListQuery } from 'api/graphql'
import { SearchQuery } from '../../screen/Search'

const getCount = gql`
  query getCount($PlaceCountInput: PlaceCountInput!) {
    placeCount(input: $PlaceCountInput)
  }
`

const SliderVariants: Variants = {
  exit: {
    y: '120%',
  },
  animate: {
    y: '0%',
    transition: {
      type: 'tween',
      ease: easeInOut,
    },
  },
  initial: {
    y: '120%',
  },
}
const SliderFilter = () => {
  const [setToggle, selectionStore, setSelectionStore] = store((state) => [
    state.setToggle,
    state.selection,
    state.setSelection,
  ])
  const [selection, setSelection] = useState<Selection>({
    ...selectionStore,
    categories: selectionStore.categories ?? [],
  })
  const variables = useMemo(() => {
    const vars = Object.keys(selection).reduce((acc, cur) => {
      if (cur === 'needCompanion') {
        return { ...acc, [cur]: selection[cur] }
      } else if (!selection[cur]) {
        return { ...acc }
      } else if (cur === 'categories' && selection[cur]?.length === 0) {
        return { ...acc, [cur]: null }
      }
      return { ...acc, [cur]: selection[cur] }
    }, {})

    return {
      ...vars,
    }
  }, [selection])
  const { refetch: queryRefetch } = useQuery<GetSearchListQuery>(SearchQuery, {
    variables,
    notifyOnNetworkStatusChange: true,
  })

  const { data: { placeCount = 0 } = {}, refetch } = useQuery<GetCountQuery>(getCount, {
    variables: { PlaceCountInput: { ...selection } } as GetCountQueryVariables,
  })

  useEffect(() => {
    refetch({ ...variables })
  }, [variables])
  return (
    <Darker initial='initial' animate='animate' exit='exit'>
      <Shadow
        onClick={() => setToggle(false)}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
          },
        }}
      />
      <Slider variants={SliderVariants}>
        <div onClick={() => setToggle(false)}>
          <CloseButton />
        </div>
        <Content>
          <FilterList>
            <FilterHeader>
              <span className='title-small main-text'>동행 여부</span>
            </FilterHeader>
            <FilterItems>
              <FilterItem
                selected={!selection.needCompanion}
                onClick={() =>
                  setSelection((prev) => ({
                    ...prev,
                    needCompanion: false,
                  }))
                }
                className='filter-xs'
              >
                아니오
              </FilterItem>
              <FilterItem
                selected={selection.needCompanion}
                onClick={() =>
                  setSelection((prev) => ({
                    ...prev,
                    needCompanion: true,
                  }))
                }
                className='filter-xs'
              >
                예
              </FilterItem>
            </FilterItems>
          </FilterList>
          <FilterList>
            <FilterHeader>
              <span className='title-small main-text'>옵션</span>
              <button>
                <span
                  className='body-small text-gray'
                  onClick={() => {
                    const isAllChecked =
                      selection.parkingAvailable &&
                      selection.wheelChairRentable &&
                      selection.toiletAvailable &&
                      selection.pathExists &&
                      selection.elevatorAvailable
                    setSelection((prev) => ({
                      ...prev,
                      parkingAvailable: isAllChecked ? false : true,
                      wheelChairRentable: isAllChecked ? false : true,
                      toiletAvailable: isAllChecked ? false : true,
                      pathExists: isAllChecked ? false : true,
                      elevatorAvailable: isAllChecked ? false : true,
                    }))
                  }}
                >
                  모두{' '}
                  {selection.parkingAvailable &&
                  selection.wheelChairRentable &&
                  selection.toiletAvailable &&
                  selection.pathExists &&
                  selection.elevatorAvailable
                    ? '해제'
                    : '선택'}
                </span>
              </button>
            </FilterHeader>
            <FilterItems>
              <FilterItem
                selected={selection.parkingAvailable}
                onClick={() =>
                  setSelection((prev) => ({ ...prev, parkingAvailable: !prev.parkingAvailable }))
                }
                className='filter-xs'
              >
                장애인 주차장
              </FilterItem>
              <FilterItem
                selected={selection.wheelChairRentable}
                onClick={() =>
                  setSelection((prev) => ({
                    ...prev,
                    wheelChairRentable: !prev.wheelChairRentable,
                  }))
                }
                className='filter-xs'
              >
                휠체어 대여
              </FilterItem>
              <FilterItem
                selected={selection.toiletAvailable}
                onClick={() =>
                  setSelection((prev) => ({
                    ...prev,
                    toiletAvailable: !prev.toiletAvailable,
                  }))
                }
                className='filter-xs'
              >
                장애인 전용 화장실
              </FilterItem>
              <FilterItem
                selected={selection.pathExists}
                onClick={() =>
                  setSelection((prev) => ({
                    ...prev,
                    pathExists: !prev.pathExists,
                  }))
                }
                className='filter-xs'
              >
                무단차/경사로
              </FilterItem>
              <FilterItem
                selected={selection.elevatorAvailable}
                onClick={() =>
                  setSelection((prev) => ({
                    ...prev,
                    elevatorAvailable: !prev.elevatorAvailable,
                  }))
                }
                className='filter-xs'
              >
                엘레베이터
              </FilterItem>
              {/* <FilterItem className='filter-xs'>1</FilterItem> */}
            </FilterItems>
          </FilterList>
          <FilterList>
            <FilterHeader>
              <span className='title-small main-text'>옵션</span>
              <button>
                <span
                  className='body-small text-gray'
                  onClick={() => {
                    setSelection((prev) => ({
                      ...prev,
                      categories:
                        prev.categories?.length >= 6
                          ? []
                          : ['자연경관', '트래킹', '바닷가', '동네구경', '문화예술', '쇼핑'],
                    }))
                  }}
                >
                  모두 {selection.categories?.length >= 6 ? '해제' : '선택'}
                </span>
              </button>
            </FilterHeader>
            <FilterItems>
              <FilterItem
                selected={!!selection.categories?.includes('자연경관')}
                onClick={() => {
                  setSelection((prev) => ({
                    ...prev,
                    categories: selection.categories?.includes('자연경관')
                      ? selection.categories?.filter((item) => item !== '자연경관')
                      : [...prev.categories, '자연경관'],
                  }))
                }}
                className='filter-xs'
              >
                자연경관
              </FilterItem>
              <FilterItem
                selected={!!selection.categories?.includes('트래킹')}
                onClick={() => {
                  setSelection((prev) => ({
                    ...prev,
                    categories: selection.categories?.includes('트래킹')
                      ? selection.categories?.filter((item) => item !== '트래킹')
                      : [...prev.categories, '트래킹'],
                  }))
                }}
                className='filter-xs'
              >
                트래킹
              </FilterItem>
              <FilterItem
                selected={!!selection.categories?.includes('바닷가')}
                onClick={() => {
                  setSelection((prev) => ({
                    ...prev,
                    categories: selection.categories?.includes('바닷가')
                      ? selection.categories?.filter((item) => item !== '바닷가')
                      : [...prev.categories, '바닷가'],
                  }))
                }}
                className='filter-xs'
              >
                바닷가
              </FilterItem>
              <FilterItem
                selected={!!selection.categories?.includes('동네구경')}
                onClick={() => {
                  setSelection((prev) => ({
                    ...prev,
                    categories: selection.categories?.includes('동네구경')
                      ? selection.categories?.filter((item) => item !== '동네구경')
                      : [...prev.categories, '동네구경'],
                  }))
                }}
                className='filter-xs'
              >
                동네구경
              </FilterItem>
              <FilterItem
                selected={!!selection.categories?.includes('문화예술')}
                onClick={() => {
                  setSelection((prev) => ({
                    ...prev,
                    categories: selection.categories?.includes('문화예술')
                      ? selection.categories?.filter((item) => item !== '문화예술')
                      : [...prev.categories, '문화예술'],
                  }))
                }}
                className='filter-xs'
              >
                문화예술
              </FilterItem>
              <FilterItem
                selected={!!selection.categories?.includes('쇼핑')}
                onClick={() => {
                  setSelection((prev) => ({
                    ...prev,
                    categories: selection.categories?.includes('쇼핑')
                      ? selection.categories?.filter((item) => item !== '쇼핑')
                      : [...prev.categories, '쇼핑'],
                  }))
                }}
                className='filter-xs'
              >
                쇼핑
              </FilterItem>
            </FilterItems>
          </FilterList>
        </Content>
        <Footer className='mx' style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
            <Reset style={{ width: '2.2rem', stroke: 'gray' }} />
            <span
              className='title-medium text-gray'
              style={{ textDecoration: 'underline', textUnderlineOffset: '5px' }}
              onClick={() =>
                setSelection((prev) => ({
                  categories: [],
                  elevatorAvailable: false,
                  needCompanion: false,
                  parkingAvailable: false,
                  pathExists: false,
                  toiletAvailable: false,
                  wheelChairRentable: false,
                }))
              }
            >
              초기화
            </span>
          </div>
          <SearchButton
            className='button-text'
            onClick={() => {
              console.log(variables, 'variables')
              setSelectionStore({ ...variables })
              setToggle(false)
            }}
          >
            {placeCount}개 여행지 보기
          </SearchButton>
        </Footer>
      </Slider>
    </Darker>
  )
}

export default SliderFilter
const CloseButton = styled(X)`
  position: absolute;
  right: 2rem;
`
const SnapBars = styled(motion.div)`
  position: absolute;
  touch-action: none;
  margin: 0 auto;
  padding: 1rem 0;
  left: 50%;
  top: -0.25rem;
  transform: translateX(-50%);
`
const SnapBar = styled.div`
  width: 3.4rem;
  height: 0.4rem;
  border-radius: 999rem;
  background-color: #efeff0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`
const SearchButton = styled.button`
  color: white;
  background-color: black;
  padding: 1rem 5.5rem;
  border-radius: 999rem;
`

const Footer = styled.div`
  display: flex;
  padding: 1.6rem 2rem;
  width: 100vw;
  border-top: 1px solid rgba(0, 0, 0, 0.178);
  position: relative;
  left: -2rem;
`

const FilterList = styled.div`
  &:first-child {
    padding-bottom: 1.4rem;
    border-bottom: 1px solid #efeff0;
  }
  + div {
    padding: 1.4rem 0;
    &:not(:last-child) {
      border-bottom: 1px solid #efeff0;
    }
  }
`
const FilterItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(7rem, 1fr));
  gap: 1rem;
`
const FilterItem = styled.label<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  /* padding: 0.5rem 0; */
  background-color: ${(props) => (props.selected ? '#61646B' : '#efeff0')};
  color: ${(props) => (props.selected ? '#FAFAFA' : '#19191B')};
  transition: all 0.1s ease-in-out;
  border-radius: 999rem;
  align-items: center;
`
const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Darker = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`
const Shadow = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

const Slider = styled(motion.div)`
  background-color: white;
  position: fixed;
  bottom: 0;
  padding: 1.5rem 2rem;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`
