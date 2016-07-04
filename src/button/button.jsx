import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Anchor } from '../anchor'

import styles from './button.module.css'

class Button extends Component {
  resolveStyleName() {
    const list = []
    if (this.props.primary) {
      list.push('primary')
    } else {
      list.push('normal')
    }

    if (this.props.large) {
      list.push('large')
    } else if (this.props.small) {
      list.push('small')
    } else {
      list.push('medium')
    }

    return `button ${list.join(' ')}`
  }
  renderTagButton(props) {
    return (
      <button {...props} >
        {props.children}
      </button>
    )
  }
  renderTagAnchor(props) {
    let props2 = props
    if (props.onClick && !props.disabled) {
      props2 = {
        ...props,
        onClick: undefined,
      }
    }
    return (
      <Anchor {...props2} />
    )
  }
  renderTagInput(props) {
    const props2 = {
      ...props,
      children: undefined,
    }
    return (
      <input type="button" value={props.children} {...props2} />
    )
  }
  render() {
    const props = {
      ...this.props,
      styleName: this.resolveStyleName(),
    }
    if (this.props.tagType === 'input') {
      return this.renderTagInput(props)
    } else if (this.props.tagType === 'a') {
      return this.renderTagAnchor(props)
    }
    return this.renderTagButton(props)
  }
}

Button.defaultProps = {
  primary: false,
  normal: false, // default
  large: false,
  medium: false, // default
  small: false,
  disabled: false,
  tagType: 'button', // button || a || input
}

export default rcm(Button, styles, { allowMultiple: true })
