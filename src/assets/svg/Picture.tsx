import React from 'react'
import { SVGProp } from '.'

const Picture = (props: SVGProp) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <rect width='30' height='30' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_241_4545' transform='scale(0.0104167)' />
        </pattern>
        <image
          id='image0_241_4545'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2cPW4UQRCFPwlYBEQguAAEIK2JEBExQpBxA0tIBCQEHAACUpBt8RM4cMIpkM0ZjAwJJMABjABLIMAUWjSBMWa9u1W9Nb3zPqnSnql63fW67Z0GIYQQQgghhBBCCCGEEEKIfzkPLAKvgC3AOh5bTS0WgLmSE+Yw8ATYbkHS1tIY1OYx0CtR/BctSNAqibVoEZ62ICmrLB5F9ny1HcYW4CfQjxBgsQWzySqNhxECvG5BIlZpbEQI8KUFiVil8TlCgOwkrPKQAEiA9FloWgH5hTC1oPxiWELIA5AA6bPQtALyC2FqQfnFsISQByAB0mehaQXkF8LUgvKLYQkhD0ACpM9C0wrIL4SpBeUXwxJCHoAESJ+FphWQXwhTC8orwjKwIgFyir8OHAGOJf3EptMmvAmc3pFLP+EX3Z0VYBu4tkc+8xJgOgLcGzKppukHnVwBq8CBITlN0w+qEGC5+bAhYqz3wMkR8pqWH7RegPVml3Kwmbmesb4BF8fIbb7rAmzu2qUcB944xrs5QX4rXRVgG7i6x/POAh8nGO/ZhPmV9gM3pV7s7pBnXgZ+jDHWS+CoI8eSfuCmxEs932eXMuD2iGMNVssZ/JTyAzfRL/RuxF3KKB8H/gKuE0cJP3AT+TJfgQtjPPtQ88nn/8a7Tywl/MBN5MvcmOD5J4C3e4y1NkIba4MfuIk8bE3KuV07ow/AKcoR6QduIg9bHq40395+By5Rnig/cBN92PJwB7jFdIjyAzclDlu10A/wAzelDlu14PUDNyUPW7Xg8QM3pQ9bNeDxAzelD1uz7gdupnHYmmU/cOMxIEUAKiKuGkgAcieRBKByAXRhExMX/1OEALqyjNwryxZasIyt0ngQIcBc82fg7GSsq9dWEvirtS7FEoH09vnfrIK/arBa4v7oXnMdr9oRQ9vOUoni76Tf3Ag7cHhtUflTg42mJmE9XwghhBBCCCGEEEIIIYQQzAy/AW1AGFRS6hQuAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  )
}

export default Picture
