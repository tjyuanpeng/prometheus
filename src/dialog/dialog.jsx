import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Content from './content.jsx'

class Dialog extends Component {
  componentDidMount() {
    if (this.props.open) {
      this.renderContent(this.props)
    }
  }
  componentWillReceiveProps(newProps) {
    if (this.props.open || newProps.open) {
      this.renderContent({
        ...this.props,
        ...newProps,
      })
    }
  }
  componentWillUnmount() {
    if (this.wrap) {
      unmountComponentAtNode(this.wrap)
      document.body.removeChild(this.wrap)
    }
  }
  renderContent(props) {
    if (!this.wrap) {
      this.wrap = document.createElement('div')
      document.body.appendChild(this.wrap)
    }

    render(props.open ? <Content {...props} /> : null, this.wrap)
  }
  render() {
    return null
  }
}

Dialog.defaultProps = {
  open: false,
}

export default Dialog
