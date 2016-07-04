import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './text-field.module.css'

class TextField extends Component {
  render() {
    return (
      <input {...this.props} value={this.props.value || ''} styleName="text-field" />
    )
  }
}

TextField.defaultProps = {

}

export default rcm(TextField, styles)
