import { CloseButton, Darker, Shadow } from 'components/Search/Slider'
import { HTMLMotionProps, Variants, motion } from 'framer-motion'
import usePopup from 'hooks/usePopup'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
const PopupVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
interface ModalPortalProps extends HTMLMotionProps<'div'> {
  children: ReactNode
}

const Modal: FC<ModalPortalProps> = ({ children, ...rest }) => {
  const [_, setToggle] = usePopup()
  return (
    <ModalBase
      {...rest}
      data-tooltip
      initial='initial'
      animate='animate'
      exit='exit'
      style={{ left: 'var(--main-mr)' }}
    >
      <ModalBackground
        variants={PopupVariants}
        onClick={(event) => {
          setToggle({
            show: false,
            id: null,
          })
        }}
      />
      <ModalContent variants={PopupVariants}>
        <ModalCloseButton
          onClick={(event) => {
            setToggle({
              show: false,
              id: null,
            })
          }}
        />

        {children}
      </ModalContent>
    </ModalBase>
  )
}

export default Modal
const ModalBase = styled(Darker)`
  padding: 0 9%;
`

const ModalCloseButton = styled(CloseButton)`
  /* right: -2rem; */
  top: 1rem;
`

const ModalBackground = styled(Shadow)`
  position: absolute;
  max-width: 412px;
`
const ModalContent = styled(motion.div)`
  text-align: center;
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  z-index: 11;
  border-radius: 1.2rem;
  padding: 2rem 0;
  row-gap: 0.5rem;
  position: relative;
`
