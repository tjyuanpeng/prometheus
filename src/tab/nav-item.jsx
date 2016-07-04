import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './nav.module.css'

class NavItem extends Component {
  render() {
    const props = {
      ...this.props,
      styleName: this.props.active ? 'active' : 'item',
    }
    return (
      <li {...props} />
    )
  }
}

NavItem.defaultProps = {
}

export default rcm(NavItem, styles)
