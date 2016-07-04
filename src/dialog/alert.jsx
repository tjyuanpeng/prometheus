import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Button } from '../button'
import { Icon } from '../icon'
import Content from './content.jsx'
import Closer from './closer.jsx'

import styles from './alert.module.css'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleConfirm() {
    if (this.props.onConfirm) {
      this.props.onConfirm()
    }
    if (this.props.onClose) {
      this.props.onClose(true)
    }
  }
  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel()
    }
    if (this.props.onClose) {
      this.props.onClose(false)
    }
  }
  renderIcon() {
    if (this.props.type === 'info') {
      return <Icon type="notice" styleName="alert-icon-info" />
    } else if (this.props.type === 'success') {
      return <Icon type="success" styleName="alert-icon-success" />
    } else if (this.props.type === 'warning') {
      return <Icon type="warning" styleName="alert-icon-warning" />
    } else if (this.props.type === 'error') {
      return <Icon type="error" styleName="alert-icon-error" />
    }

    return null
  }
  render() {
    const props = {
      ...this.props,
      title: null,
      styles: null,
      children: null,
      onConfirm: null,
      onCancel: null,
      onClose: null,
    }
    return (
      <Content {...props} styleName="alert" onEscapePress={this.handleCancel}>
        <Closer onClick={this.handleCancel} />
        {
          this.renderIcon()
        }
        {
          this.props.title ?
            <div styleName="alert-title" >
              {this.props.title}
            </div>
            : null
        }
        {
          this.props.children ?
            <div styleName="alert-content" >
              {this.props.children}
            </div>
            : null
        }
        <div styleName="alert-actions">
          <Button primary styleName="alert-btn" onClick={this.handleConfirm}>
            {
              this.props.confirmText
            }
          </Button>
        </div>
      </Content>
    )
  }
}

Alert.defaultProps = {
  confirmText: 'Ok',
  type: 'info',
}

export default rcm(Alert, styles)
