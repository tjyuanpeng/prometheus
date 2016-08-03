import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './content.module.css'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollControl: false,
      oldPr: null,
      oldOverflow: null,
    }

    this.handleEscapePress = this.handleEscapePress.bind(this)
  }
  componentDidMount() {
    if (this.props.onEscapePress) {
      window.addEventListener('keyup', this.handleEscapePress)
    }

    // overflow
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    this.state.oldOverflow = oldOverflow

    // scrollbar width fix
    const sw = window.innerWidth - document.body.clientWidth
    if (sw > 0) {
      this.state.scrollControl = true

      const oldPr = document.body.style.paddingRight
      document.body.style.paddingRight = `${sw + (parseFloat(oldPr) || 0)}px`
      this.state.oldPr = oldPr
    }
  }
  componentWillUnmount() {
    if (this.props.onEscapePress) {
      window.removeEventListener('keyup', this.handleEscapePress)
    }

    // overflow
    document.body.style.overflow = this.state.oldOverflow

    // scrollbar width fix
    if (this.state.scrollControl) {
      document.body.style.paddingRight = this.state.oldPr
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
