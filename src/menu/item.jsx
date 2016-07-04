import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './menu.module.css'

class MenuItem extends Component {
  render() {
    const props = {
      ...this.props,
      styleName: (this.props.disabled) ? 'item-disabled' : 'item',
    }
    return (
      <li {...props} />
    )
  }
}

MenuItem.defaultProps = {
}

export default rcm(MenuItem, styles)
