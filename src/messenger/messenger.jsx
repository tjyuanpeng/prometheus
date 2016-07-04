import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Icon } from '../icon'

import styles from './messenger.module.css'

class Messenger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: false,
      })

      if (this.props.onClose) {
        setTimeout(this.props.onClose, 100)
      }
    }, this.props.duration)
  }
  renderIcon() {
    if (this.props.type === 'info') {
      return <Icon type="notice" styleName="icon-info" />
    } else if (this.props.type === 'success') {
      return <Icon type="success" styleName="icon-success" />
    } else if (this.props.type === 'warning') {
      return <Icon type="warning" styleName="icon-warning" />
    } else if (this.props.type === 'error') {
      return <Icon type="error" styleName="icon-error" />
    }

    return null
  }
  render() {
    const type = this.props.type
    let styleName
    if (type === 'info') {
      styleName = 'content-info'
    } else if (type === 'success') {
      styleName = 'content-success'
    } else if (type === 'warning') {
      styleName = 'content-warning'
    } else if (type === 'error') {
      styleName = 'content-error'
    } else {
      styleName = 'content'
    }

    return (
      <div styleName={this.state.animate ? 'wrap-animate' : 'wrap-animate-end'}>
        <div styleName={styleName}>
          {
            this.renderIcon()
          }
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}

Messenger.defaultProps = {
  duration: 3 * 1000,
}

export default rcm(Messenger, styles)
