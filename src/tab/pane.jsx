import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './pane.module.css'

class Pane extends Component {
  render() {
    const props = {
      ...this.props,
      styleName: this.props.active ? 'active' : 'item',
    }
    return (
      <div {...props} />
    )
  }
}

Pane.defaultProps = {

}

export default rcm(Pane, styles)
