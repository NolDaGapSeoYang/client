import React from 'react'
import { SVGProp } from '.'

const Mask = (props: SVGProp) => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <mask
        id='mask0_228_21984'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='22'
        height='22'
      >
        <rect width='22' height='22' fill='url(#pattern11)' />
      </mask>
      <g mask='url(#mask0_228_21984)'>
        <rect x='-1' y='-1' width='23' height='23' fill='#AFB1B6' />
      </g>
      <defs>
        <pattern id='pattern11' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_228_21984' transform='scale(0.0104167)' />
        </pattern>
        <image
          id='image0_228_21984'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  )
}

export default Mask
