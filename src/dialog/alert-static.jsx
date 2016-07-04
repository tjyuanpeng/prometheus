import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Alert from './alert.jsx'

export default function ({ title, content, type = 'info' }) {
  const wrap = document.createElement('div')
  document.body.appendChild(wrap)

  const p = new Promise((resolve) => {
    render(
      <Alert onClose={resolve} title={title} type={type}>
        {content}
      </Alert>
      , wrap)
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
