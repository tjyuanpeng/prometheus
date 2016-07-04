import React, { Component } from 'react'
import rcm from 'react-css-modules'

import styles from './size-selector.module.css'

class SizeSelector extends Component {
  renderItems() {
    return this.props.pageSizeList.map((item) => {
      const isActive = this.props.pageSize === item
      return (
        <dd styleName={(this.props.pageSize === item) ? 'active' : 'item'} key={item}>
          {
            isActive
              ? (<span styleName="item-inner" >{item}</span>)
              : (<a styleName="item-inner" onClick={() => { this.props.onChange(item) }}>{item}</a>)
          }
        </dd>
      )
    })
  }
  render() {
    return (
      <dl styleName="list" >
        <dt styleName="title" >Show :</dt>
        {
          this.renderItems()
        }
      </dl>
    )
  }
}

export default rcm(SizeSelector, styles)
