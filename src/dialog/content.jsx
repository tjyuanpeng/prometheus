import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './content.module.css'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollControl: false,
      oldPr: '',
    }

    this.handleEscapePress = this.handleEscapePress.bind(this)
  }
  componentDidMount() {
    if (this.props.onEscapePress) {
      window.addEventListener('keyup', this.handleEscapePress)
    }

    const sw = window.innerWidth - document.body.clientWidth
    if (sw > 0) {
      const oldPr = document.body.style.paddingRight
      document.body.style.paddingRight = `${sw + (parseFloat(oldPr) || 0)}px`
      document.body.style.overflow = 'hidden'
      this.state = {
        scrollControl: true,
        oldPr,
      }
    }
  }
  componentWillUnmount() {
    if (this.props.onEscapePress) {
      window.removeEventListener('keyup', this.handleEscapePress)
    }

    if (this.state.scrollControl) {
      document.body.style.paddingRight = `${this.state.oldPr}`
      document.body.style.overflow = ''
    }
  }
  handleEscapePress(e) {
    if (e.key === 'Escape') {
      this.props.onEscapePress(e)
    }
  }
  render() {
    return (
      <div styleName="mask">
        <div styleName="content-wrap">
          <div {...this.props} styleName="content" >
            {
              this.props.children
            }
          </div>
        </div>
      </div>
    )
  }
}

export default rcm(Content, styles)
