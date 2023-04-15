import React from 'react'
import { SVGProp } from '.'

const Vector = (props: SVGProp) => {
  return (
    <svg
      width='12'
      height='22'
      viewBox='0 0 12 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.62212 21.5646L0.304164 11.8127C0.193565 11.6966 0.11504 11.5708 0.0685884 11.4354C0.0221368 11.2999 -0.000720045 11.1548 1.72812e-05 11C1.72812e-05 10.8452 0.0228742 10.7001 0.0685884 10.5646C0.114303 10.4292 0.192828 10.3034 0.304164 10.1873L9.62212 0.406332C9.88019 0.135444 10.2028 0 10.5899 0C10.977 0 11.3088 0.145119 11.5853 0.435356C11.8618 0.725594 12 1.0642 12 1.45119C12 1.83817 11.8618 2.17678 11.5853 2.46702L3.45623 11L11.5853 19.533C11.8433 19.8039 11.9724 20.1378 11.9724 20.5349C11.9724 20.9319 11.8341 21.2752 11.5576 21.5646C11.2811 21.8549 10.9585 22 10.5899 22C10.2212 22 9.89862 21.8549 9.62212 21.5646Z'
        fill='#61646B'
      />
    </svg>
  )
}

export default Vector