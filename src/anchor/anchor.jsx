import React, { Component } from 'react'

class Anchor extends Component {
  render() {
    if (this.props.href) {
      return (
        <a {...this.props} />
      )
    }
    return (
      <span {...this.props} />
    )
  }
}

Anchor.defaultProps = {
  target: '_blank',
}

export default Anchor
