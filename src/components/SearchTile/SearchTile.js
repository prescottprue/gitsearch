import React, { Component } from 'react'
import styles from './SearchTile.scss'
import { Paper, TextField, List, FlatButton } from 'material-ui'

type Props = {
  users: Array,
  onUpdateInput: Function,
  onSubmit: Function
};
export class SearchTile extends Component {
  props: Props;

  constructor(props) {
    super(props)
    this.state = { users: this.props.users || [] }
  }

  componentWillReceiveProps (nextProps) {
    const { users } = nextProps
    if (users) this.setState({ users })
  }

  handleUpdate = (e) => {
    console.log('inputval:', e.target.value)
    this.setState({ inputVal: e.target.value })
  }

  handleSubmit = (inputVal) => {
    console.log('inputVal')
    this.props.onSubmit.bind(this, inputVal)
  }

  render () {
    const { inputVal, users } = this.state
    return (
      <Paper className={styles.paper} zDepth={1}>
        <div>
          <TextField
            hintText="prescottprue"
            floatingLabelText="Enter Github username's"
            multiLine={true}
            onChange={this.handleUpdate}
          />
          <FlatButton label='Search' onClick={this.props.onSubmit.bind(this, inputVal)}/>
        </div>
      </Paper>
    )
  }
}

export default SearchTile
