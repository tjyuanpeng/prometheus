import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './drawer.module.css'

class Knob extends Component {
  render() {
    return (
      <div {...this.props} styleName="knob" >
        <div
          styleName="knob-inner"
          onClick={(e) => {
            if (this.props.onClick) {
              this.props.onClick(e)
            }
            if (this.props.onChange) {
              const activeKey = (this.props.active === this.props.foldKey) ? this.props.unfoldKey : this.props.foldKey
              this.props.onChange(activeKey)
            }
          }}
        >
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}

Knob.defaultProps = {
}

export default rcm(Knob, styles)
