import React, { Component } from 'react'
import rcm from 'react-css-modules'

import Button from './button.jsx'
import { Menu } from '../menu'
import { Icon } from '../icon'

import styles from './split.module.css'

class Split extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
      timerId: null,
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleGlobalClick = this.handleGlobalClick.bind(this)
  }
  handleToggle() {
    const value = !this.state.opened
    this.setState({
      opened: value,
    })
    if (value) {
      setTimeout(() => {
        window.addEventListener('click', this.handleGlobalClick)
      }, 0)
    }
  }
  handleGlobalClick() {
    window.removeEventListener('click', this.handleGlobalClick)
    this.setState({
      opened: false,
    })
  }
  handleOpen() {
    clearTimeout(this.state.timerId)
    this.setState({
      opened: true,
    })
  }
  handleClose() {
    clearTimeout(this.state.timerId)
    this.state.timerId = setTimeout(() => {
      this.setState({
        opened: false,
      })
    }, 350)
  }
  renderInner() {
    const inner = this.props.children.filter((child) => child.type !== Menu)
    if (!inner.length) {
      return null
    }

    const props = {
      ...this.props,
      children: undefined,
      styles: undefined,
    }

    return (
      <Button {...props} styleName="main" >
        {
          inner
        }
      </Button>
    )
  }
  renderToggle() {
    const props = {
      primary: this.props.primary,
      normal: this.props.normal,
      large: this.props.large,
      medium: this.props.medium,
      small: this.props.small,
      disabled: this.props.disabled,
    }

    if (this.props.triggerType === 'click') {
      props.onClick = (e) => {
        this.handleToggle(e)
        if (this.props.onToggleClick) {
          this.props.onToggleClick(e)
        }
      }
    }

    return (
      <Button {...props} styleName="toggle" >
        <Icon type="arrow-down" styleName="toggle-icon" />
      </Button>
    )
  }
  renderMenu() {
    const menu = this.props.children.filter((child) => child.type === Menu).shift()
    if (!menu) {
      return null
    }

    const styleName = this.state.opened ? 'menu-opened' : 'menu-closed'
    return (
      <Menu {...menu.props} styleName={styleName} >
        {
          menu.props.children
        }
      </Menu>
    )
  }
  render() {
    const props = {}
    if (this.props.triggerType === 'hover') {
      props.onMouseEnter = this.handleOpen
      props.onMouseLeave = this.handleClose
    }

    return (
      <span {...props} styleName="wrap" >
        {
          this.renderInner()
        }
        {
          this.renderToggle()
        }
        {
          this.renderMenu()
        }
      </span>
    )
  }
}

Split.defaultProps = {
  triggerType: 'click',
}

export default rcm(Split, styles)
