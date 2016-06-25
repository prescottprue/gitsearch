import React, { Component } from 'react'
import styles from './SearchTile.scss'
import { Paper, AutoComplete, List } from 'material-ui'

type Props = {

};
export class SearchTile extends Component {
  props: Props;

  state = { dataSource: [] }

  handleUpdateInput = (t) => {
    this.setState({
      dataSource: [t, t + t, t + t + t]
    })
  }

  render () {
    return (
      <Paper className={styles.paper} zDepth={1}>
        <div>
          <AutoComplete
          hintText="Search to Add User"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          />
        </div>
      </Paper>
    )
  }
}

export default SearchTile
