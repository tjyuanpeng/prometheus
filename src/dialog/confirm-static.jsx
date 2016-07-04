import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Confirm from './confirm.jsx'

export default function ({ title, content }) {
  const wrap = document.createElement('div')
  document.body.appendChild(wrap)

  const p = new Promise((resolve) => {
    render(
      <Confirm onClose={resolve} title={title}>
        {content}
      </Confirm>
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
