import React, { Component } from 'react'
import rcm from 'react-css-modules'

import Nav from './nav.jsx'
import Pane from './pane.jsx'

import styles from './tab.module.css'

class Tab extends Component {
  renderNav(child, index) {
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
      if (child.type === Nav) {
        return this.renderNav(child, index)
      } else if (child.type === Pane) {
        return this.renderPanes(child, index)
      }
      return child
    })
  }
  render() {
    return (
      <div >
        {
          this.renderChildren()
        }
      </div>
    )
  }
}

Tab.defaultProps = {
}

export default rcm(Tab, styles)
