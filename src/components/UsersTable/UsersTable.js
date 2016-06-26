import React, { Component } from 'react'
import styles from './UsersTable.scss'
import {
  Paper, Table, TableHeader, TableRow, TableBody,
  TableHeaderColumn, TableRowColumn, IconButton
} from 'material-ui'
import DeleteIcon from 'react-material-icons/icons/action/delete'

type Props = {
  users: Array,
  onDeleteClick: Function
};
export class UsersTable extends Component {
  props: Props;

  render () {
    const openRowDetail = (r) => {
      console.log('open row detail called:', r)
    }
    const handleDeleteClick = (user) => {
      this.props.onDeleteClick(user)
    }
    const { users } = this.props
    if (!users) {
      return (
        <Paper className={styles.empty}>
          <div>Search and select users above</div>
        </Paper>
      )
    }
    console.log('users before map:', users)
    const rows = users.map((user, i) => (
      <TableRow key={`User-${i}`} onRowClick={openRowDetail}>
        <TableRowColumn key={`User-${i}-Username`}>{user.login}</TableRowColumn>
        <TableRowColumn key={`User-${i}-Email`}>{user.email}</TableRowColumn>
        <TableRowColumn key={`User-${i}-Repos`} className={styles.hiddenMobile}>{user.public_repos}</TableRowColumn>
        <TableRowColumn key={`User-${i}-Username-Delete`} className={styles.hiddenMobile} onClick={handleDeleteClick}>
          <IconButton><DeleteIcon /></IconButton>
        </TableRowColumn>
      </TableRow>
    ))
    return (
      <Paper {...this.props}>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn className={styles.hiddenMobile}>Public Repos</TableHeaderColumn>
              <TableHeaderColumn className={styles.hiddenMobile}>Remove</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} stripedRows>{rows}</TableBody>
        </Table>
      </Paper>
    )
  }
}

export default UsersTable
