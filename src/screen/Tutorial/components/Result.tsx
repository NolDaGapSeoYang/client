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
import option from 'assets/option'
const SliderVariants: Variants = {
  initial: {
    x: 200,
    transition: {
      type: 'tween',
      ease: 'circOut',
      duration: 2,
    },
  },
  animate: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'circOut',
      duration: 2,
    },
  },
  exit: {
    x: -200,
    transition: {
      type: 'tween',
      ease: 'circOut',
      duration: 2,
    },
  },
}
const Result = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { selection, position } = store((state) => ({
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
  const { data: { places } = {}, called } = useQuery<GetSearchListQuery>(SearchQuery, {
    variables,
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      setIsLoading(false)
    },
  })
  const [name, categories] = store((state) => [state.myName, state.selection.categories])

  useEffect(() => {
    const intervalId = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '200%' : '-200%',
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? '-200%' : '200%',
        opacity: 0,
      }
    },
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const [[page, direction], setPage] = useState([0, 0])
  const paginate = (newDirection: number) => {
    setPage((prev) => [prev[0] + newDirection, newDirection])
  }

  return isLoading || !called ? (
    <Loading text='결과를 불러오고 있어요..' />
  ) : (
    <Wrapper>
      <div style={{ display: 'flex', overflowX: 'hidden' }}>
        {/* <AnimatePresence mode='sync'>
          {categories?.length ? (
            <Icon
              variants={SliderVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              key={categories[idx]}
            >
              <img src={option[categories[idx]]} />
            </Icon>
          ) : null}
        </AnimatePresence> */}
        {categories?.length ? (
          <Card>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={option[categories[page % categories.length]]}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
              />
            </AnimatePresence>
          </Card>
        ) : null}
      </div>

      <Title>
        {name}에게 <br />
        어울리는 총 {places?.totalCount}개의 <br />
        제주 관광지를 찾았어요!
      </Title>
    </Wrapper>
  )
}
const Card = styled.div`
  display: flex;
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
