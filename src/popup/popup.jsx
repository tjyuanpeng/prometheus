import React, { Component } from 'react'
import rcm from 'react-css-modules'

import Content from './content.jsx'

import styles from './popup.module.css'

class Popup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleGlobalClick = this.handleGlobalClick.bind(this)
    this.handleEscapePress = this.handleEscapePress.bind(this)
  }
  componentDidMount() {
    if (this.props.open) {
      this.hookGlobalEvents()
    }
  }
  componentWillReceiveProps(newProps) {
    if (!this.props.open && newProps.open) {
      this.hookGlobalEvents()
    } else if (this.props.open && !newProps.open) {
      this.unhookGlobalEvents()
    }
  }
  componentWillUnmount() {
    this.unhookGlobalEvents()
  }
  hookGlobalEvents() {
    setTimeout(() => {
      window.addEventListener('click', this.handleGlobalClick)
      window.addEventListener('keyup', this.handleEscapePress)
    }, 0)
  }
  unhookGlobalEvents() {
    window.removeEventListener('click', this.handleGlobalClick)
    window.removeEventListener('keyup', this.handleEscapePress)
  }
  handleGlobalClick(e) {
    if (this.props.onGlobalClick) {
      const fromPopup = this.refs.popup.contains(e.target)
      this.props.onGlobalClick(fromPopup)
    }
  }
  handleEscapePress(e) {
    if (this.props.onEscapePress && e.key === 'Escape') {
      this.props.onEscapePress(e)
    }
  }
  render() {
    let popup
    const kids = React.Children.map(this.props.children, (child) => {
      if (child.type === Content) {
        popup = child
        return false
      }
      return child
    })

    return (
      <div {...this.props} >
        {kids}
        <div ref="popup" style={{ display: this.props.open ? 'block' : 'none' }}>
          {popup}
        </div>
      </div>
    )
  }
}

Popup.defaultProps = {
  open: false,
}

export default rcm(Popup, styles)
