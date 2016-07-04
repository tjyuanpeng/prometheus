import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Button } from '../button'
import { Icon } from '../icon'
import Content from './content.jsx'
import Closer from './closer.jsx'

import styles from './confirm.module.css'

class Confirm extends Component {
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
      <Content {...props} styleName="confirm" onEscapePress={this.handleCancel}>
        <Closer onClick={this.handleCancel} />
        <Icon type="help" styleName="confirm-icon" />
        {
          this.props.title ?
            <div styleName="confirm-title" >
              {this.props.title}
            </div>
            : null
        }
        {
          this.props.children ?
            <div styleName="confirm-content" >
              {this.props.children}
            </div>
            : null
        }
        <div styleName="confirm-actions">
          <Button primary styleName="confirm-btn" onClick={this.handleConfirm}>
            {
              this.props.confirmText
            }
          </Button>
          <Button styleName="confirm-btn" onClick={this.handleCancel}>
          {
            this.props.cancelText
          }
          </Button>
        </div>
      </Content>
    )
  }
}

Confirm.defaultProps = {
  confirmText: 'Ok',
  cancelText: 'Cancel',
}

export default rcm(Confirm, styles)
