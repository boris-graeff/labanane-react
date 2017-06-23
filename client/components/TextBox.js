import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './text-box.pcss'

let id = 0

class TextBox extends Component {

  componentWillMount () {
    this.id = `textBox-${id++}`
  }
  
  render () {
    const {props, id} = this
    const {label} = props

    return (
      <div className={s.textBox}>
        <label htmlFor={id}>{label}</label>
        <input type='text' id={id} />
      </div>
    )
  }
}

TextBox.propTypes = {
  label: PropTypes.string,

}

export default TextBox