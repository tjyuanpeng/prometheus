import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Icon } from '../icon'

import styles from './closer.module.css'

class Closer extends Component {
  render() {
    return (
      <Icon type="cross" {... this.props} styleName="closer" />
    )
  }
}

export default rcm(Closer, styles)
