import React, { Component } from 'react'
import rcm from 'react-css-modules'

import '@alife/alpha-icon/icon.css'

class Icon extends Component {
  render() {
    const extra = this.props.className || ''
    return (
      <i {...this.props} className={`ui2-icon ui2-icon-${this.props.type} ${extra}`}></i>
    )
  }
}

export default rcm(Icon, {})
