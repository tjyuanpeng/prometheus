import React, { Component } from 'react'
import rcm from 'react-css-modules'
import $ from '@alife/alpha-jquery/jquery'

// import { Icon } from '../icon'
import { connect } from '../util'

import styles from './text-field.module.css'

class ClearableTextField extends Component {
  constructor(props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  componentDidMount() {
    // console.log(this.refs.input)

    $('body').append('<div id="clear" style="position:absolute;display:none;">x</div>')
  }
  componentWillUnmount() {
    $('#clear').remove()
  }
  handleFocus() {
    // console.log('handleFocus')

    const input = $(this.refs.input)
    const os = input.offset()
    $('#clear').css(os)
    $('#clear').show()

    console.log(os, $('#clear').offset())
  }
  handleBlur() {
    // console.log('handleBlur')
    $('#clear').hide()
  }
  render() {
    return (
      <input
        {...this.props}
        ref="input"
        value={this.props.value || ''}
        onFocus={connect(this.props.onFocus, this.handleFocus)}
        onBlur={connect(this.props.onBlur, this.handleBlur)}
        styleName="text-field"
      />
    )
  }
}

ClearableTextField.defaultProps = {

}

export default rcm(ClearableTextField, styles)
