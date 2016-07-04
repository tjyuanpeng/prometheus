import React, { Component } from 'react'
import rcm from 'react-css-modules'

import Jumper from './jumper.jsx'
import List from './list.jsx'
import SizeSelector from './size-selector.jsx'

import styles from './pagination.module.css'

class Pagination extends Component {
  renderSizeSelector() {
    return (
      <div styleName="size-selector">
        <SizeSelector
          pageSize={this.props.pageSize}
          pageSizeList={this.props.pageSizeList}
          onChange={this.props.onPageSizeChange}
        />
      </div>
    )
  }
  renderJumper(pageCount) {
    return (
      <div styleName="jumper">
        <Jumper pageCount={pageCount} onChange={this.props.onPageChange} />
      </div>
    )
  }
  renderList(pageCount) {
    return (
      <div styleName="list">
        <List currentPage={this.props.currentPage} pageCount={pageCount} onChange={this.props.onPageChange} />
      </div>
    )
  }
  render() {
    const pageCount = this.props.pageCount !== undefined || Math.ceil(this.props.total / this.props.pageSize) || 1
    const currentPage = (this.props.currentPage > 0 && this.props.currentPage <= pageCount) ? this.props.currentPage : 1
    return (
      <div {...this.props} styleName="wrap" >
        {
          this.props.showSizeSelector ? this.renderSizeSelector() : null
        }
        <div styleName="list">
          <List currentPage={currentPage} pageCount={pageCount} onChange={this.props.onPageChange} />
        </div>
        {
          this.props.showJumper ? this.renderJumper(pageCount) : null
        }
      </div>
    )
  }
}

Pagination.defaultProps = {
  currentPage: 1,
  total: 1,
  pageSize: 10,
  pageSizeList: [
    10,
    20,
    30,
  ],
  showSizeSelector: false,
  showJumper: false,
}

export default rcm(Pagination, styles)
