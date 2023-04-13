import { useRef } from 'react'

export default () => {
  const scrollBlocked = useRef<boolean>()
  const html = document.documentElement
  const { body } = document

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return

    html.style.position = 'relative'
    html.style.overflow = 'hidden'

    scrollBlocked.current = true
  }

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return

    html.style.position = ''
    html.style.overflow = ''

    scrollBlocked.current = false
  }

  return { blockScroll, allowScroll }
}
