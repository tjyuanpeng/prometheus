import React, { Component } from 'react'
import rcm from 'react-css-modules'

import Button from './button.jsx'

import styles from './group.module.css'

class Group extends Component {
  resolveHeadTail(first, last) {
    let name = 'button-child'
    if (first) {
      name = 'button-child-first'
    } else if (last) {
      name = 'button-child-last'
    }
    return name
  }
  renderGrandSon(son, first, last) {
    const result = []
    const kids = son.props.children
    const max = kids.length

    for (let i = 0; i < max; i++) {
      const kid = kids[i]

      const props = {
        ...kid.props,
      }
      if (kid.type === Button) {
        props.styleName = this.resolveHeadTail(first, last)
      }

      result.push((
        <kid.type {...props} />
      ))
    }

    return result
  }
  renderSon() {
    const kids = this.props.children
    const max = kids.length

    const result = []
    for (let i = 0; i < max; i++) {
      const kid = kids[i]

      const props = {
        ...kid.props,
      }
      if (kid.type === Button) {
        const name = this.resolveHeadTail(i === 0, i === max - 1)
        props.styleName = `item ${name}`
      } else {
        props.styleName = 'item'
        props.children = this.renderGrandSon(kid, i === 0, i === max - 1)
      }

      result.push((
        <kid.type {...props} key={i} />
      ))
    }

    return result
  }
  renderChildren() {
    return (

      this.props.children.map((child, index) => {
        const props = {
          ...child.props,
          key: index,
        }

        if (child.type === Button) {
          props.styleName = 'item button-child'
        } else {
          const children = child.props.children.map((child2) => {
            if (child2.type === Button) {
              const child2Props = {
                ...child2.props,
              }
              child2Props.styleName = 'item button-child'
              return (
                <child2.type {...child2Props} />
              )
            }
            return child2
          })
          props.styleName = 'item'
          props.children = children
        }

        return (
          <child.type {...props} />
        )
      })
    )
  }
  render() {
    return (
      <span {...this.props} styleName="wrap">
        {
          this.renderSon()
        }
      </span>
    )
  }
}

Group.defaultProps = {
}

export default rcm(Group, styles, { allowMultiple: true })
