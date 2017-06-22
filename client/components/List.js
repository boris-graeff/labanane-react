import React from 'react'
import s from './list.pcss'

const List = (props) => {
  return (
    <ul className={s.list}>
      {props.children}
    </ul>
  )
}

export default List