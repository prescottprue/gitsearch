import React, { Component } from 'react'
import styles from './SearchTile.scss'
import { Paper, TextField, RaisedButton } from 'material-ui'
import { stringToList } from '../../utils'
import { find } from 'lodash'

type Props = {
  users: Array,
  onUpdateInput: Function,
  onSubmit: Function
};
export class SearchTile extends Component {
  props: Props;

  constructor (props) {
    super(props)
    this.state = { users: this.props.users || [], errorMessage: null }
  }

  componentWillReceiveProps ({users}) {
    if (users) this.setState({ users })
  }

  handleUpdate = ({target}) => {
    this.setState({ inputVal: target.value })
  }

  handleSubmit = () => {
    const { inputVal } = this.state
    const inputList = stringToList(inputVal)
    const matching = find(inputList, (input) => find(this.props.users || [], { login: input }))
    if (matching) return this.setState({ errorMessage: `${matching} already exists` })
    if (!inputVal) return this.setState({ errorMessage: 'Username(s) required' }) // handle no input
    this.setState({ inputVal: '' }) // empty input
    this.props.onSubmit(inputVal)
  }

  render () {
    const { errorMessage, inputVal } = this.state
    return (
      <Paper className={styles.paper} zDepth={1}>
        <TextField
          hintText='someuser'
          floatingLabelText='Enter Username(s)'
          multiLine
          onChange={this.handleUpdate}
          className={styles.input}
          value={inputVal}
          errorText={errorMessage}
        />
        <RaisedButton
          label='Search'
          onClick={this.handleSubmit}
          secondary
        />
      </Paper>
    )
  }
}

export default SearchTile
