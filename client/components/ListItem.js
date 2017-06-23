import React, {Component} from 'react'
import s from './list-item.pcss'
import classnames from 'classnames'

class ListItem extends Component {
  render () {
    const {props} = this
    return (
      <li className={classnames(s.listItem, props.className)}>
        {props.children}
      </li>
    )
  }
}

export default ListItem