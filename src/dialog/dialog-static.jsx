import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
// import { connect } from '../util'

import Content from './content.jsx'

export default function (func, props) {
  const wrap = document.createElement('div')
  document.body.appendChild(wrap)

  const p = new Promise((resolve, reject) => {
    const element = func(resolve, reject)
    render(
      <Content {...props} >
        {
          element
        }
      </Content>
      , wrap
    )
  })

  p.then(() => {
    unmountComponentAtNode(wrap)
    document.body.removeChild(wrap)
  }, () => {
    unmountComponentAtNode(wrap)
    document.body.removeChild(wrap)
  })

  return p
}
