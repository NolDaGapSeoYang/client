import { HTMLMotionProps } from 'framer-motion'

import { AnimatePresence } from 'framer-motion'
import useScrollBlock from 'hooks/useScrollBlock'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import Modal from './Modal'
import usePopup from 'hooks/usePopup'

interface ModalPortalProps extends HTMLMotionProps<'div'> {
  children: ReactNode
}

const ModalPortal: FC<ModalPortalProps> = ({ ...rest }) => {
  const [toggle] = usePopup()
  const ref = useRef<HTMLElement | null>()
  const { allowScroll, blockScroll } = useScrollBlock()
  const [mount, setMount] = useState(false)
  useEffect(() => {
    if (document) {
      const dom = document.getElementById('modal')
      ref.current = dom
      setMount(true)
    }
    return () => {
      allowScroll()
    }
  }, [])
  useEffect(() => {
    if (toggle.show) {
      blockScroll()
    } else {
      allowScroll()
    }
  }, [toggle.show])
  if (ref.current) {
    return createPortal(
      ref.current && (
        <AnimatePresence>{mount && toggle.show ? <Modal {...rest} /> : null}</AnimatePresence>
      ),
      ref.current,
    )
  }
  return null
}

export default ModalPortal
