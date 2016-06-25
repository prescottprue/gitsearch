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
    const { users } = this.props
    if (!users) {
      return (
        <Paper className={styles.empty}>
          <div>Search and select users above</div>
        </Paper>
      )
    }
    const rows = users.map(user => (
      <TableRow key={`User-${user.login}`}>
        <TableRowColumn>{user.login}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
      </TableRow>
    ))
    return (
      <Paper>
        <Table {...this.props}>
         <TableHeader>
           <TableRow>
             <TableHeaderColumn>Username</TableHeaderColumn>
             <TableHeaderColumn>Email</TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody>
            {rows}
         </TableBody>
       </Table>
     </Paper>
    )
  }
}

export default UsersTable
