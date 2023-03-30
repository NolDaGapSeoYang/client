import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import HasGaurdin from './components/hasGuardian'
import Result from './components/Result'
import WhichOption from './components/WhichOption'
import WhichPlace from './components/WhichPlace'

const Tutorial = () => {
  const param = useParams()
  console.log(param)
  if (param.type === '1') {
    return <HasGaurdin />
  }
  if (param.type === '2') {
    return <WhichOption />
  }
  if (param.type === '3') {
    return <WhichPlace />
  }
  if (param.type === 'result') {
    return <Result />
  }
  return (
    <div>
      <nav>Progress</nav>
      <div>튜토리얼 페이지입니다</div>
      {param.type === '1'}
      {param.type === '2'}
      {param.type === '3'}
      {param.type === 'result'}
      <footer>footer</footer>
    </div>
  )
}

export default Tutorial
