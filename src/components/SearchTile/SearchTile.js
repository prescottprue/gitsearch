import React, { Component } from 'react'
import styles from './SearchTile.scss'
import { Paper, TextField, RaisedButton } from 'material-ui'

type Props = {
  users: Array,
  onUpdateInput: Function,
  onSubmit: Function
};
export class SearchTile extends Component {
  props: Props;

  constructor (props) {
    super(props)
    this.state = { users: this.props.users || [] }
  }

  componentWillReceiveProps (nextProps) {
    const { users } = nextProps
    if (users) this.setState({ users })
  }

  handleUpdate = (e) => {
    this.setState({ inputVal: e.target.value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.inputVal)
  }

  render () {
    return (
      <Paper className={styles.paper} zDepth={1}>
        <TextField
          hintText='prescottprue'
          floatingLabelText='Enter Github Username(s)'
          multiLine
          onChange={this.handleUpdate}
          style={{width: '70%'}}
          className={styles.input}
        />
        <RaisedButton
          label='Search'
          onClick={this.handleSubmit}
          primary
        />
      </Paper>
    )
  }
}

export default SearchTile
