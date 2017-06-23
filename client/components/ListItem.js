import React from 'react'
import s from './list-item.pcss'
import classnames from 'classnames'

const ListItem = (props) => {
  const {children, handleClick, className} = props

  return (
    <li className={classnames(s.listItem, className)} onClick={handleClick}>
      {children}
    </li>
  )
}

export default ListItem