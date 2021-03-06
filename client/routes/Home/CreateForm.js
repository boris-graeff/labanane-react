import React, {Component} from 'react'
import s from './create-form.pcss'
import TextBox from '../../components/TextBox'
import {createPlaylist} from '../../actions/playlist'
import {slugify} from '../../helpers/string'

class CreateForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleChange (event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }
  
  handleNameChange (event) {
    const {value} = event.target
    const name = slugify(value)
    this.setState({name})
  }

  handleSubmit (event) {
    event.preventDefault()
    createPlaylist(this.state)
      .then(({data}) => {
        const playlistId = data.id
        this.context.router.history.push(`/playlist/${playlistId}`)
      })
  }

  render () {
    const {state, handleSubmit, handleChange, handleNameChange} = this
    return (
      <form onSubmit={handleSubmit} className={s.createForm}>
        <TextBox label="Name" name="name" value={state.name} handleChange={handleNameChange}></TextBox>
        <TextBox type='password' label="Password" name="password" value={state.password} handleChange={handleChange}></TextBox>
        <button type='submit'>Create</button>
      </form>
    )
  }
}

CreateForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CreateForm