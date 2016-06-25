import React, { Component } from 'react'
import styles from './UsersTable.scss'
import {
  Paper, Table, TableHeader, TableRow, TableBody,
  TableHeaderColumn, TableRowColumn
} from 'material-ui'

type Props = {
  users: Array
};
export class UsersTable extends Component {
  props: Props;

  render () {
    const openRowDetail = (r) => {
      console.log('open row detail called:', r)
    }
    const { users } = this.props
    if (!users) {
      return (
        <Paper className={styles.empty}>
          <div>Search and select users above</div>
        </Paper>
      )
    }
    const rows = users.map((user, i) => (
      <TableRow key={`User-${i}`} onRowClick={openRowDetail}>
        <TableRowColumn>{user.login}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
        <TableRowColumn>{user.public_repos}</TableRowColumn>
      </TableRow>
    ))
    return (
      <Paper {...this.props}>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Repos</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} stripedRows>{rows}</TableBody>
        </Table>
      </Paper>
    )
  }
}

export default UsersTable
