import React, { Component } from 'react'
import rcm from 'react-css-modules'

import Pane from './pane.jsx'
import Knob from './drawer-knob.jsx'

import styles from './drawer.module.css'

class Drawer extends Component {
  renderKnob(child, index) {
    const props = {
      ...child.props,
      key: index,
      active: this.props.active,
    }
    return (
      <child.type {...props} />
    )
  }
  renderPanes(child) {
    const props = {
      ...child.props,
      key: child.props.activeKey,
      active: (this.props.active === child.props.activeKey) || child.props.active,
    }
    return (
      <child.type {...props} />
    )
  }
  renderChildren() {
    return this.props.children.map((child, index) => {
      switch (child.type) {
        case Knob: {
          return this.renderKnob(child, index)
        }
        case Pane: {
          return this.renderPanes(child, index)
        }
        default:
          return child
      }
    })
  }
  render() {
    return (
      <div styleName="wrap" >
        {
          this.renderChildren()
        }
      </div>
    )
  }
}

Drawer.defaultProps = {
}

export default rcm(Drawer, styles)
