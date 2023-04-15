import { GetSearchListQuery } from 'api/graphql'
import option from '../../../assets/option'
import { PER_PAGE } from 'constants/common'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Loading } from 'routes/Router'
import store from 'store/index'
import styled from 'styled-components'

import { useQuery } from '@apollo/client'

import { SearchQuery } from '../../Search'
import Item from './Item'

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
    }, 1500)
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
        x: direction < 0 ? '200%' : '-200%',
        opacity: 0,
      }
    },
  }

  // const swipePower = (offset: number, velocity: number) => {
  //   return Math.abs(offset) * velocity
  // }

  const [[page, direction], setPage] = useState([0, 0])
  const paginate = (newDirection: number) => {
    setPage((prev) => [prev[0] + newDirection, newDirection])
  }
  console.log(categories, 'option[categories[page % categories.length]]')

  if (isLoading || !called) return <Loading text='결과를 불러오고 있어요..' page={false} />
  const Icon = option[categories[page % categories.length]]
  return (
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
            <AnimatePresence initial={false} custom={direction} mode='wait'>
              <IconWrapper
                key={page}
                custom={direction}
                variants={variants}
                transition={{
                  type: 'tween',
                  ease: 'circOut',
                }}
                initial='enter'
                animate='center'
                exit='exit'
              >
                {/* <option[categories[page % categories.length]] /> */}
                <Icon />
              </IconWrapper>
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
  /* background-color: yellow; */
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const IconWrapper = styled(motion.div)`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  width: 22rem;
  height: 16.5rem;
  border-radius: 3rem;
  svg {
    width: 100%;
    height: 100%;
  }
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
