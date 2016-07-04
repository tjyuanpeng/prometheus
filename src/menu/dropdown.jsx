import React, { Component } from 'react'
import rcm from 'react-css-modules'

import Menu from './menu'

import styles from './dropdown.module.css'

class Dropdown extends Component {
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
    }, 250)
  }
  renderInner() {
    const inner = this.props.children.filter((child) => child.type !== Menu)
    if (!inner.length) {
      return null
    }

    return (
      inner
    )
  }
  renderMenu() {
    const menu = this.props.children.find((child) => child.type === Menu)
    if (!menu) {
      return null
    }

    return (
      <Menu {...menu.props} styleName={this.state.opened ? 'menu-opened' : 'menu-closed'} >
        {
          menu.props.children
        }
      </Menu>
    )
  }
  render() {
    const props = {
      ...this.props,
    }

    if (this.props.triggerType === 'click') {
      props.onClick = this.handleToggle
    }

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
          this.renderMenu()
        }
      </span>
    )
  }
}

Dropdown.defaultProps = {
  triggerType: 'hover',
}

export default rcm(Dropdown, styles)
