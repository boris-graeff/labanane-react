import React from 'react'
import s from './list-item.pcss'

const ListItem = (props) => {
  return (
    <li className={s.listitem}>
      {props.children}
    </li>
  )
}

export default ListItem