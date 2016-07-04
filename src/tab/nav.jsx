import React, { Component } from 'react'
import rcm from 'react-css-modules'
import { connect } from '../util'

import NavItem from './nav-item.jsx'

import styles from './nav.module.css'

class Nav extends Component {
  render() {
    return (
      <ul {...this.props} styleName="nav" >
        {
          this.props.children.map((item) => {
            const activeKey = item.props.activeKey
            const props = {
              ...item.props,
              key: activeKey,
              active: (this.props.active === activeKey) || item.props.active,
              onClick: connect(item.props.onClick, () => {
                if (this.props.onChange) {
                  this.props.onChange(activeKey)
                }
              }),
            }
            return (
              <NavItem {...props} />
            )
          })
        }
      </ul>
    )
  }
}

Nav.defaultProps = {

}

export default rcm(Nav, styles)
