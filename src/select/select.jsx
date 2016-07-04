import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Icon } from '../icon'
import { Menu, MenuItem } from '../menu'

import styles from './select.module.css'

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }

    this.handleGlobalClick = this.handleGlobalClick.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleOptionItemClick = this.handleOptionItemClick.bind(this)
    this.handleLabelRemoverClick = this.handleLabelRemoverClick.bind(this)
  }
  isDisabledMenuItem(value) {
    if (!this.props.multiple) {
      return value === this.props.value
    }
    if (this.props.value === null) {
      return false
    }
    for (const val of this.props.value) {
      if (value === val) {
        return true
      }
    }
    return false
  }
  resolveOptions() {
    if (this.props.options) {
      return this.props.options.map((item) => {
        const value = item[this.props.valueKey]
        const label = item[this.props.lebelKey]
        const disabled = this.isDisabledMenuItem(value)
        return {
          value,
          key: value,
          label,
          children: item[this.props.optionKey] || label,
          disabled,
          onClick: (e) => {
            if (!disabled) {
              this.handleOptionItemClick(value)
            } else {
              e.stopPropagation()
            }
          },
        }
      })
    }
    if (this.props.children) {
      return this.props.children.map((item) => {
        const value = item.props.value
        const disabled = this.isDisabledMenuItem(value)
        return {
          ...item.props,
          key: value,
          label: item.props.label || item.props.children,
          disabled,
          onClick: (e) => {
            if (!disabled) {
              this.handleOptionItemClick(value)
            } else {
              e.stopPropagation()
            }
          },
        }
      })
    }
    return []
  }
  resolveLabel(value, options) {
    for (const option of options) {
      if (value === option.value) {
        return option.label
      }
    }
    return null
  }
  handleGlobalClick() {
    window.removeEventListener('click', this.handleGlobalClick)
    this.setState({
      opened: false,
    })
  }
  handleToggle() {
    const value = !this.state.opened
    this.setState({
      opened: value,
    })
    if (value) {
      setTimeout(() => {
        window.addEventListener('click', this.handleGlobalClick)
      }, 0)
    }
  }
  handleClearClick() {
    if (!this.props.onChange) {
      return
    }
    this.props.onChange(this.props.multiple ? [] : '')
  }
  handleOptionItemClick(value) {
    if (!this.props.onChange) {
      return
    }

    if (this.props.multiple) {
      this.props.onChange(Array.isArray(this.props.value) ? [...this.props.value, value] : [value])
    } else {
      this.props.onChange(value)
    }
  }
  handleLabelRemoverClick(value) {
    if (!this.props.onChange) {
      return
    }
    this.props.onChange(this.props.value.filter((val) => val !== value))
  }
  renderOptions(options) {
    return (
      <Menu styleName={this.state.opened ? 'menu-opened' : 'menu-closed'} >
        {
          options.map((option) => <MenuItem {...option} title={option.label} />)
        }
      </Menu>
    )
  }
  renderToggle() {
    return (
      <div styleName="toggle" onClick={this.handleToggle}>
        <Icon type={this.state.opened ? 'arrow-up' : 'arrow-down'} styleName="toggle-icon" />
      </div>
    )
  }
  renderClear() {
    if (this.props.showClear
        && (this.props.value == null || this.props.value === '' || this.props.value.length === 0)) {
      return null
    }
    return (
      <div styleName="clear" onClick={this.handleClearClick}>x</div>
    )
  }
  renderLabels(options) {
    if (this.props.placeholder
        && (this.props.value == null || this.props.value === '' || this.props.value.length === 0)) {
      return (
        <div styleName="label-placeholder" title={this.props.placeholder} >{this.props.placeholder}</div>
      )
    }

    if (!this.props.multiple) {
      const label = this.resolveLabel(this.props.value, options)
      return (
        <div styleName="label-single" title={label} >{label}</div>
      )
    }

    return (
      <ul styleName="label-list" >
        {
          this.props.value.map((value) => {
            const props = {
              key: value,
              onClick: (e) => {
                e.stopPropagation()
              },
            }
            return (
              <li {...props} styleName="label-item">
                {
                  this.resolveLabel(value, options)
                }
                <span
                  styleName="label-item-remover"
                  onClick={() => {
                    this.handleLabelRemoverClick(value)
                  }}
                >x</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
  renderField(options) {
    return (
      <div styleName="field" >
        <div styleName="field-inner" onClick={this.handleToggle} >
          {
            this.renderLabels(options)
          }
        </div>
      </div>
    )
  }
  render() {
    const options = this.resolveOptions()
    return (
      <div {...this.props} styleName="wrap" >
        {
          this.renderField(options)
        }
        {
          this.renderClear()
        }
        {
          this.renderToggle()
        }
        {
          this.renderOptions(options)
        }
      </div>
    )
  }
}

Select.defaultProps = {
  value: '',
  multiple: false,
  labelKey: 'label',
  valueKey: 'value',
  optionKey: 'option',
  showClear: true,
}

export default rcm(Select, styles)
