import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Icon } from '../icon'

import styles from './notice.module.css'

class Notice extends Component {
  constructor(props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  renderIcon() {
    let large = ''
    if (this.props.large) {
      large = ' icon-large'
    }

    if (this.props.type === 'info') {
      return <Icon type="notice" styleName={`icon-info${large}`} />
    } else if (this.props.type === 'warning') {
      return <Icon type="warning" styleName={`icon-warning${large}`} />
    } else if (this.props.type === 'remind') {
      return <Icon type="smile" styleName={`icon-remind${large}`} />
    }

    return null
  }
  renderCloser() {
    if (this.props.hasCloser) {
      return (
        <div styleName="closer-wrap">
          <Icon type="cross" styleName="closer" onClick={this.handleClose} />
        </div>
      )
    }

    return null
  }
  render() {
    let styleName = 'wrap'

    if (this.props.type === 'info') {
      styleName += ' wrap-info'
    } else if (this.props.type === 'warning') {
      styleName += ' wrap-warning'
    } else if (this.props.type === 'remind') {
      styleName += ' wrap-remind'
    }

    if (this.props.large) {
      styleName += ' wrap-large'
    }

    return (
      <div styleName={styleName}>
        {
          this.renderIcon()
        }
        <div styleName="content">
        {
          this.props.children
        }
        </div>
        {
          this.renderCloser()
        }
      </div>
    )
  }
}

Notice.defaultProps = {
  type: 'info',
  large: false,
  hasCloser: false,
  hasBorder: false,
}

export default rcm(Notice, styles, { allowMultiple: true })
