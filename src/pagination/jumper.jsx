import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { TextField } from '../text-field'
import styles from './jumper.module.css'

class Jumper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleGo = this.handleGo.bind(this)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleGo()
    }
  }
  handleGo() {
    const value = parseInt(this.state.value, 10)
    if (value && value > 0 && value <= this.props.pageCount) {
      this.props.onChange(value)
    }
    this.setState({
      value: '',
    })
  }
  render() {
    return (
      <div styleName="wrap">
        <span styleName="title">Go to Page</span>
        <TextField
          styleName="input"
          type="text"
          maxLength="3"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <a
          styleName="go"
          onClick={this.handleGo}
        >Go</a>
      </div>
    )
  }
}

export default rcm(Jumper, styles)
