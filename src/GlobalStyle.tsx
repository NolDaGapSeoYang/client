import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  html {
    font-size: 62.5%; // 1rem = 10px 로 변경
    color : hsl(240, 3.8461538461538463%, 10.196078431372548%);
    width: 100%;
    max-height: calc(var(--var,1vh) * 100);
  }
  body {

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
  // 색상 변수
  --colors-gray-400: #e0e0e0;
  // reset css
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
    --color-normal: #19191b;
    --color-dark : #61646B;
  }
  body,
  #root {
    height: 100%;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  // 인풋 기본 스타일 제거
  input {
    border: none;
    /* background-color: transparent; */
    /* -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none; */
  }
  // 인풋 태그 테두리 하이라이트 제거
  input:focus {
    outline: none;
  }
  /* IE */
  select::-ms-expand {
    display: none;
  }
  /* select css 없애기 */
  select {
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
  }
  li {
    list-style-type: none;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .mx {
    max-width: var(--mx, '100%');
  }

  .title-large  {
    font-size: 2.2rem;
    line-height: 3.5rem;
  }
  .title-medium {
    font-size:1.6rem;
    line-height: 2rem;
  }
  .title-small {
    font-size: 1.3rem;
    line-height: 2.8rem;
  }

  .body-small {
    font-size: 1.1rem;
    line-height : 2rem;
  }


  .button-text {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
  .filter-medium {
    font-size:1.5rem;
    line-height: 2.8rem;
  }

  .filter-small {
    font-size: 1.5rem;
    line-height: 2.8rem;
  }

  .text-gray {
   color : #AFB1B6;
  }

  .text-subdark {
    color :#61646B;
  }

  .main-text {
    color : #4DB495;
  }

  .body-small2 {
    font-size : 0.9rem;
    line-height:  1.6rem;
  }

  .text-bold {
    font-weight: 600;
  }

  .px {
    padding-left :2rem;
    padding-right: 2rem;
  }


.svg-pi-wrapper {
  position: relative;
}

.svg-pi {
  transform: rotate(-90deg); /* Fix the orientation */
}

/* Animated spinner version */
.svg-pi-indicator--spinner {
  animation: spinner .75s ease-in-out infinite;
  transform-origin: center;
}

.svg-pi-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.svg-pi-label__loading {
  opacity: .5;
  font-size: 0.75em;
}

.svg-pi-label__progress {
  font-size: 1.5em;
  font-weight: bold;
}

.svg-pi-label__loading,
.svg-pi-label__progress {
  display: block;
}

/* Spinner animation */
@keyframes spinner {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
}
`

export default GlobalStyle
