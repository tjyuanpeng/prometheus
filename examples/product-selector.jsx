
import React, { Component } from 'react'
import rcm from 'react-css-modules'

import {
  Dialog,
  Closer,
  Button,
} from '../src'

import styles from './product-selector.module.css'
// import i18n from '@alife/scc-i18n/i18n.js'

class ProductSelector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    this.setState({
      ...this.state,
      open: false,
    })
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              open: true,
            })
          }}
        >open dialog</button>
        <Dialog open={this.state.open} styleName="wrap">
          <Closer onClick={this.handleClose} />
          <div styleName="dialog-title">
            Please choose one product to edit for resale.
          </div>
          <ul styleName="list">
            <li>1</li>
            <li>2</li>
          </ul>
          <div styleName="actions">
            <Button primary >Confirm</Button>
            <a styleName="cancel-btn" onClick={this.handleClose} >Cancel</a>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default rcm(ProductSelector, styles)
