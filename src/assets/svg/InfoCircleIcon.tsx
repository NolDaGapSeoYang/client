import React from 'react'
import { SVGProp } from '.'

const InfoCircleIcon = (props: SVGProp) => {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.875 18C14.36 18 18 14.36 18 9.87503C18 5.39128 14.36 1.75003 9.875 1.75003C5.39 1.75003 1.75 5.39128 1.75 9.87503C1.75 14.36 5.39 18 9.875 18ZM15 6.88539L8.09056 13.7948L4 9.70331L4.88439 8.81795L8.09056 12.0241L14.1156 6.00003L15 6.88539Z'
        fill='#DE3324'
        fillOpacity='0.7'
      />
    </svg>
  )
}

export default InfoCircleIcon
