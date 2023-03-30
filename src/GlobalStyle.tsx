import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  html {
    font-size: 62.5%; // 1rem = 10px 로 변경
    width: 100%;
    height: calc(var(--var,1vh) * 100);
  }
  body {
    background-color: #f9f9f9;
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
  }
  html,
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

`

export default GlobalStyle
