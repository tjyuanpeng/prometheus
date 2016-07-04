import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Messenger from './messenger.jsx'

export default function ({ content = '', type, duration }) {
  const wrap = document.createElement('div')
  document.body.appendChild(wrap)

  const p = new Promise((resolve) => {
    render(
      <Messenger type={type} onClose={resolve} duration={duration}>
        {content}
      </Messenger>
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
