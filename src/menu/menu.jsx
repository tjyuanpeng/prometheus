import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './menu.module.css'

class Menu extends Component {
  render() {
    return (
      <ul {...this.props} styleName="menu" >
        {
          this.props.children
        }
      </ul>
    )
  }
}

Menu.defaultProps = {

}

export default rcm(Menu, styles)
