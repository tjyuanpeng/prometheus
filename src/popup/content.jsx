import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './content.module.css'

class PopupContent extends Component {
  render() {
    return (
      <div {...this.props} />
    )
  }
}

PopupContent.defaultProps = {
}

export default rcm(PopupContent, styles)
