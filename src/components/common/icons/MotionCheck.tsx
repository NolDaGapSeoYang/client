import { Variants, motion } from 'framer-motion'
import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
  exit: { pathLength: 0, opacity: 0 },
}

interface CheckProps extends HTMLAttributes<HTMLOrSVGElement> {}
const MotionCheck: FC<CheckProps> = (props) => {
  return (
    <RedCircle initial='hidden' animate='visible' exit='exit'>
      <svg {...props} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <motion.path
          variants={draw}
          custom={0.1}
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M5 13l4 4L19 7'
        />
      </svg>
    </RedCircle>
  )
}

export default MotionCheck

const RedCircle = styled(motion.div)`
  background-color: rgb(222, 51, 36, 0.7);
  width: 1.9rem;
  height: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999rem;
  svg {
    stroke: white;
  }
`
