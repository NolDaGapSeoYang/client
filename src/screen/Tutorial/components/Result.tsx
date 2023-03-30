import { useQuery } from '@apollo/client'
import { GetSearchListQuery } from 'api/graphql'
import { PER_PAGE } from 'constants/common'
import useGetSelection from 'hooks/useGetSelection'
import React, { useEffect, useMemo, useState } from 'react'
import { Loading } from 'routes/Router'
import store from 'store/index'
import Slider from 'react-slick'
import styled from 'styled-components'
import { SearchQuery } from '../../Search'
import Item from './Item'
import { AnimatePresence, easeIn, motion, Variants } from 'framer-motion'
const SliderVariants: Variants = {
  initial: {
    x: 200,
    transition: {
      type: 'tween',
      ease: easeIn,
    },
  },
  animate: {
    x: 0,
    transition: {
      type: 'tween',
      ease: easeIn,
    },
  },
  exit: {
    x: -200,
    transition: {
      type: 'tween',
      ease: easeIn,
    },
  },
}
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
  const [name, categories] = store((state) => [state.myName, state.selection.categories])

  const [idx, setIdx] = useState(0)
  console.log(categories, 'categories')
  console.log(idx, 'idx')

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (categories?.length) {
        setIdx((prev) => (prev + 1) % categories?.length)
      }
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return isLoading || !called ? (
    <Loading text='결과를 불러오고 있어요..' />
  ) : (
    <Wrapper>
      <div style={{ display: 'flex', overflowX: 'hidden' }}>
        <AnimatePresence mode='sync'>
          {categories?.length ? (
            <Icon
              variants={SliderVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              key={categories[idx]}
            >
              {categories[idx]}
            </Icon>
          ) : null}
        </AnimatePresence>
      </div>

      <Title>
        {name}에게 <br />
        어울리는 총 {places?.totalCount}개의 <br />
        제주 관광지를 찾았어요!
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
  text-align: center;
  padding: 30px 20px;
  font-size: 2.2rem;
  font-weight: 500;
  height: 16.5rem;
`

const Icon = styled(motion.div)``
export default Result
