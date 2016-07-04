import React, { Component } from 'react'
import rcm from 'react-css-modules'

import { Icon } from '../icon'

import styles from './list.module.css'

class List extends Component {
  renderItem(type, key, content = key) {
    let onClick = undefined
    if (type === 'link' && key === 'prev') {
      onClick = () => {
        this.props.onChange(this.props.currentPage - 1)
      }
    } else if (type === 'link' && key === 'next') {
      onClick = () => {
        this.props.onChange(this.props.currentPage + 1)
      }
    } else if (type === 'link') {
      onClick = () => {
        this.props.onChange(key)
      }
    }

    const props = {
      styleName: type,
      key,
      onClick,
    }

    return (
      <li {...props} >
        {
          (type === 'link') ? <a styleName="item-inner">{content}</a> : <span styleName="item-inner">{content}</span>
        }
      </li>
    )
  }
  render() {
    const pageCount = this.props.pageCount
    const currentPage = this.props.currentPage

    const start = Math.max(currentPage - 2, 2)
    const end = Math.min(currentPage + 2, pageCount)

    const result = []

    // prev
    result.push(
      this.renderItem(currentPage === 1 ? 'item' : 'link', 'prev', <Icon type="arrow-left" styleName="arrow" />)
    )
    // first
    result.push(
      this.renderItem(currentPage === 1 ? 'active' : 'link', 1)
    )
    // dot
    if (start > 2) {
      result.push(
        this.renderItem('item', 'prev-dot', '...')
      )
    }
    // list
    for (let i = start; i <= end; i++) {
      result.push(
        this.renderItem(currentPage === i ? 'active' : 'link', i)
      )
    }
    // dot
    if (end < pageCount - 1) {
      result.push(
        this.renderItem('item', 'next-dot', '...')
      )
    }
    // last
    if (end < pageCount) {
      result.push(
        this.renderItem(currentPage === pageCount ? 'active' : 'link', pageCount)
      )
    }
    // next
    result.push(
      this.renderItem(currentPage === pageCount ? 'item' : 'link', 'next', (
        <span>Next&nbsp;<Icon type="arrow-right" styleName="arrow" /></span>
      ))
    )

    return (
      <ul styleName="list" >{result}</ul>
    )
  }
}

export default rcm(List, styles)
