import { Variants, motion } from 'framer-motion'
import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0, fill: 'rgba(255,255,255,0)' },
  visible: (i) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      fill: 'rgba(255,255,255,1)',
      transition: {
        pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
        fill: { delay: delay * 2 },
      },
    }
  },
  exit: { pathLength: 0, opacity: 0, fill: 'rgba(255,255,255,0)' },
}
const circle: Variants = {
  hidden: { opacity: 0 },
  visible: {
    rotateZ: [-70, 70, -50, 50, -30, 30, -15, 15, 0],
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
  exit: { pathLength: 0, opacity: 0, fill: 'rgba(255,255,255,0)' },
}
interface Exclamation extends HTMLAttributes<HTMLOrSVGElement> {}
const Exclamation: FC<Exclamation> = (props) => {
  return (
    <RedCircle variants={circle} initial='hidden' animate='visible' exit='exit'>
      <svg {...props} viewBox='0 0 3 12' fill='currentColor' stroke='currentColor' strokeWidth={1}>
        <motion.path
          variants={draw}
          custom={0.1}
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.01571 0H0.187589L0.328214 8.04688H1.87509L2.01571 0ZM8.89593e-05 10.3125C-0.00772354 10.9219 0.500089 11.4141 1.10946 11.4219C1.71103 11.4141 2.21103 10.9219 2.21884 10.3125C2.21103 9.70312 1.71103 9.20312 1.10946 9.20312C0.500089 9.20312 -0.00772354 9.70312 8.89593e-05 10.3125Z'
        />
      </svg>
    </RedCircle>
  )
}

export default Exclamation

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
    width: 0.3rem;
    height: 1.2rem;
  }
`
