import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

class RenderInRoot extends Component {
  componentDidMount() {
    if (this.props.active) {
      this.renderContent(this.props)
    }
  }
  componentWillReceiveProps(newProps) {
    if (this.props.active || newProps.active) {
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

    render(props.active ? React.Children.only(this.props.children) : null, this.wrap)
  }
  render() {
    return null
  }
}

RenderInRoot.defaultProps = {
  active: false,
}

export default RenderInRoot
