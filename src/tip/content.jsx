import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './content.module.css'

class Content extends Component {
  render() {
    return (
      <div {...this.props} styleName="wrap">
        {
          this.props.children
        }
      </div>
    )
  }
}

export default rcm(Content, styles)
