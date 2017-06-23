import React, {Component} from 'react'
import s from './create-form.pcss'
import TextBox from '../../../components/TextBox'

class CreateForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state.name, this.state.password)
  }

  render () {
    const {state, handleSubmit, handleChange} = this
    return (
      <form onSubmit={handleSubmit} className={s.createForm}>
        <TextBox label="Name" name="name" value={state.name} handleChange={handleChange}></TextBox>
        <TextBox type='password' label="Password" name="password" value={state.password} handleChange={handleChange}></TextBox>
        <button type='submit'>Create</button>
      </form>
    )
  }
}

export default CreateForm