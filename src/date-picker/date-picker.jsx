import React, { Component } from 'react'
import rcm from 'react-css-modules'
import moment from 'moment'

import { Icon } from '../icon'

import styles from './date-picker.module.css'

class DatePicker extends Component {
  constructor(props) {
    super(props)

    const value = props.value ? moment(props.value, props.format) : moment()
    this.state = {
      value,
      view: value.clone(),
      mode: 'date',
    }

    this.handleDateClick = this.handleDateClick.bind(this)
    this.handleSwitchMode = this.handleSwitchMode.bind(this)
    this.handleJump = this.handleJump.bind(this)
    this.handleJumpToToday = this.handleJumpToToday.bind(this)
  }
  componentWillReceiveProps(props) {
    const value = props.value ? moment(props.value, props.format) : moment()
    this.setState({
      ...this.state,
      value,
      view: value.clone(),
    })
  }
  handleJumpToToday() {
    if (this.props.onChange) {
      const now = moment()
      const start = this.props.start && moment(this.props.start, this.props.format)
      const startIsValid = !start || (start && start.isSameOrBefore(now, 'day'))

      const end = this.props.end && moment(this.props.end, this.props.format)
      const endIsValid = !end || (end && end.isSameOrAfter(now, 'day'))

      if (startIsValid && endIsValid) {
        this.props.onChange(now.format(this.props.format))
      }
    }
  }
  handleDateClick(date) {
    if (this.props.onChange) {
      this.props.onChange(this.state.view.date(date).format(this.props.format))
    }
  }
  handleSwitchMode(mode, year, month) {
    let view = this.state.view
    if (year !== undefined || month !== undefined) {
      view = view.clone()
    }
    if (year !== undefined) {
      view.year(year)
    }
    if (month !== undefined) {
      view.month(month)
    }

    this.setState({
      ...this.state,
      view,
      mode,
    })
  }
  handleJump(dir, num, type) {
    this.setState({
      ...this.state,
      view: (dir === 'prev') ? this.state.view.clone().subtract(num, type) : this.state.view.clone().add(num, type),
    })
  }
  renderRows(list, cellPerRow, tagType = 'td') {
    const rows = []
    let cells = []
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      const styleName = `cell${item.disabled ? ' cell-disabled' : ''}${item.current ? ' cell-current' : ''}`
      cells.push(
        tagType === 'td'
          ? <td key={item.key} styleName={styleName} onClick={item.onClick}>{item.content}</td>
          : <th key={item.key} styleName="cell cell-head">{item.content}</th>
      )

      if (cells.length === cellPerRow) {
        rows.push(
          <tr key={rows.length}>{cells}</tr>
        )
        cells = []
      }
    }
    return rows
  }
  renderDateCells() {
    const currentDate = this.state.view
    const firstDay = currentDate.clone().date(1)
    const item = firstDay.subtract(firstDay.day(), 'd')

    const list = []
    const currentMonth = currentDate.month()
    const start = this.props.start && moment(this.props.start, this.props.format)
    const end = this.props.end && moment(this.props.end, this.props.format)

    for (let i = 0; i < 42; i++) {
      const date = item.date()
      const disabled = (item.month() !== currentMonth)
          || (start && item.isBefore(start, 'day')) || (end && item.isAfter(end, 'day'))
      const current = !disabled && item.isSame(this.state.value)
      list.push({
        key: i,
        disabled,
        current,
        content: date,
        onClick: disabled ? null : () => {
          this.handleDateClick(date)
        },
      })
      item.add(1, 'd')
    }

    return this.renderRows(list, 7)
  }
  renderDate() {
    return (
      <div styleName="date-picker" >
        <div styleName="header">
          <Icon type="arrow-left" styleName="prev" onClick={() => { this.handleJump('prev', 1, 'M') }} />
          <span styleName="selector" onClick={() => { this.handleSwitchMode('year') }} >
            {this.state.view.year()}
          </span>
          <span styleName="selector" onClick={() => { this.handleSwitchMode('month') }} >
            {this.state.view.format('MM')}
          </span>
          <Icon type="arrow-right" styleName="next" onClick={() => { this.handleJump('next', 1, 'M') }} />
        </div>
        <table styleName="date-table">
          <thead>
            <tr>
              <th styleName="cell cell-head">Su</th>
              <th styleName="cell cell-head">Mo</th>
              <th styleName="cell cell-head">Tu</th>
              <th styleName="cell cell-head">We</th>
              <th styleName="cell cell-head">Th</th>
              <th styleName="cell cell-head">Fr</th>
              <th styleName="cell cell-head">Sa</th>
            </tr>
          </thead>
          <tbody>
            {
              this.renderDateCells()
            }
          </tbody>
        </table>
        <div styleName="footer">
          <span styleName="selector" onClick={this.handleJumpToToday}>
            {moment().format(this.props.format)}
          </span>
        </div>
      </div>
    )
  }
  renderMonthCells() {
    const year = this.state.view.year()
    const sameyear = this.state.value.year() === year
    const currentMonth = this.state.value.month()
    const list = Array.from({ length: 12 }, (n, i) =>
      ({
        key: i + 1,
        current: sameyear && (i === currentMonth),
        disabled: false,
        content: i + 1,
        onClick: () => {
          this.handleSwitchMode('date', year, i)
        },
      })
    )
    return this.renderRows(list, 3)
  }
  renderMonth() {
    return (
      <div styleName="date-picker" >
        <div styleName="header">
          <Icon type="arrow-left" styleName="prev" onClick={() => { this.handleJump('prev', 1, 'y') }} />
          <span styleName="selector" onClick={() => { this.handleSwitchMode('year') }} >
            {this.state.view.year()}
          </span>
          <Icon type="arrow-right" styleName="next" onClick={() => { this.handleJump('next', 1, 'y') }} />
        </div>
        <table styleName="month-table">
          <tbody>
            {
              this.renderMonthCells()
            }
          </tbody>
        </table>
        <div styleName="footer">
          <span styleName="selector" onClick={this.handleJumpToToday}>
            {moment().format(this.props.format)}
          </span>
        </div>
      </div>
    )
  }
  renderYearCells(year, start) {
    const yearOfCurrent = this.state.value.year()
    const list = []
    list.push({
      key: 'blank-first',
      disabled: true,
      content: '',
    })
    for (let i = 0; i < 10; i++) {
      const item = start + i
      list.push({
        key: item,
        disabled: false,
        current: (item === yearOfCurrent),
        content: item,
        onClick: () => {
          this.handleSwitchMode('month', item)
        },
      })
    }
    list.push({
      key: 'blank-last',
      disabled: true,
      content: '',
    })
    return this.renderRows(list, 3)
  }
  renderYear() {
    const year = this.state.view.year()
    const start = Math.floor(year / 10) * 10
    return (
      <div styleName="date-picker" >
        <div styleName="header">
          <Icon type="arrow-left" styleName="prev" onClick={() => { this.handleJump('prev', 10, 'y') }} />
          <span >{start} ~ {start + 9}</span>
          <Icon type="arrow-right" styleName="next" onClick={() => { this.handleJump('next', 10, 'y') }} />
        </div>
        <table styleName="year-table">
          <tbody>
            {
              this.renderYearCells(year, start)
            }
          </tbody>
        </table>
        <div styleName="footer">
          <span styleName="selector" onClick={this.handleJumpToToday}>
            {moment().format(this.props.format)}
          </span>
        </div>
      </div>
    )
  }
  render() {
    let view = []
    switch (this.state.mode) {
      case 'date':
        view = this.renderDate()
        break
      case 'month':
        view = this.renderMonth()
        break
      case 'year':
        view = this.renderYear()
        break
      default:
    }

    return (
      <div {...this.props} styleName="wrap" >
        {
          view
        }
      </div>
    )
  }
}

DatePicker.defaultProps = {
  format: 'YYYY/MM/DD',
}

export default rcm(DatePicker, styles, { allowMultiple: true })
