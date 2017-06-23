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
    const {label, value, name, type, handleChange} = props

    return (
      <div className={s.textBox}>
        <label htmlFor={id}>{label}</label>
        <input type={type} name={name} id={id} value={value} onChange={handleChange}/>
      </div>
    )
  }
}

TextBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  type: PropTypes.string
}

TextBox.defaultProps = {
  type: 'text'
};

export default TextBox