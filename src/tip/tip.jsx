import React, { Component, cloneElement } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { connect } from '../util'

import Content from './content.jsx'

class Tip extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleMove = this.handleMove.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  componentWillUnmount() {
    if (this.wrap) {
      unmountComponentAtNode(this.wrap)
      document.body.removeChild(this.wrap)
    }
  }
  handleMove(e) {
    const { pageY, pageX } = e
    this.renderContent(true, pageY + 20, pageX)
  }
  handleClose() {
    this.renderContent(false)
  }
  renderContent(open, top, left) {
    if (!this.wrap) {
      this.wrap = document.createElement('div')
      document.body.appendChild(this.wrap)
    }
    const style = {
      display: open ? 'block' : 'none',
      position: 'absolute',
      top,
      left,
    }
    render(
      <div style={style}>
        <Content {...this.props}>
          {
            this.props.title
          }
        </Content>
      </div>
      , this.wrap
    )
  }
  render() {
    const child = React.Children.only(this.props.children)
    const childProps = child.props || {}
    const newProps = {
      onMouseMove: connect(childProps.onMouseEnter, this.handleMove),
      onMouseLeave: connect(childProps.onMouseLeave, this.handleClose),
    }
    return cloneElement(child, newProps)
  }
}

Tip.defaultProps = {
}

export default Tip
