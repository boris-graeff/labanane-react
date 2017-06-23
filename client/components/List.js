import React, {Component} from 'react'
import s from './list.pcss'
import classnames from 'classnames'

class List extends Component {
  render () {
    const {props} = this
    return (
      <ul className={classnames(s.list, props.className)}>
        {props.children}
      </ul>
    )
  }
}

export default List