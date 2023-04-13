import { Button } from 'components/Search/DestinationCard'
import { AnimatePresence, MotionStyle, motion } from 'framer-motion'
import { FC, HTMLAttributes, ReactNode, useState } from 'react'
import ModalPortal from './Popup'
import usePopup from 'hooks/usePopup'
interface PopupButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  toolTip?: string | ReactNode
  toolTipStyle?: MotionStyle
  label: string | number
}

const PopupButton: FC<PopupButtonProps> = ({
  disabled = false,
  label,
  toolTip,
  children,
  toolTipStyle,
  ...rest
}) => {
  const [open, setOpen] = usePopup()
  return (
    <Button
      {...rest}
      data-tooltip={disabled ? undefined : true}
      onClick={(event) => {
        if (!disabled) {
          setOpen({
            show: !open.show,
            id: open.show ? null : label,
          })
        }
        rest.onClick && rest.onClick(event)
      }}
    >
      {open.id === label ? <ModalPortal>{toolTip}</ModalPortal> : null}

      {children}
    </Button>
  )
}

export default PopupButton
