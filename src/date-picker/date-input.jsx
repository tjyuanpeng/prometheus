import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { TextField } from '../text-field'
import DatePicker from './date-picker.jsx'
import { connect } from '../util'

import styles from './date-input.module.css'

class DateInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleGlobalClick = this.handleGlobalClick.bind(this)
  }
  handleChange(val) {
    if (this.props.onChange) {
      this.props.onChange(val)
      this.handleGlobalClick()
    }
  }
  handleToggle() {
    const value = !this.state.opened
    this.setState({
      ...this.state,
      opened: value,
    })
    if (value) {
      setTimeout(() => {
        window.addEventListener('click', this.handleGlobalClick)
      }, 0)
    }
  }
  handleGlobalClick() {
    window.removeEventListener('click', this.handleGlobalClick)
    this.setState({
      ...this.state,
      opened: false,
    })
  }
  renderInner() {
    return React.Children.map(this.props.children, (kid) => {
      if (kid.type !== TextField) {
        return kid
      }
      const props = {
        ...kid.props,
        onClick: connect(kid.props.onClick, this.handleToggle),
      }

      return (
        <kid.type {...props} />
      )
    })
  }
  render() {
    return (
      <div styleName="wrap">
        {
          this.renderInner()
        }
        <DatePicker
          styleName={this.state.opened ? 'picker-opened' : 'picker-closed'}
          format={this.props.format}
          start={this.props.start}
          end={this.props.end}
          value={this.props.value}
          onChange={this.handleChange}
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      </div>
    )
  }
}

DateInput.defaultProps = {

}

export default rcm(DateInput, styles)
