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

    const { users } = this.props
    if (!users) {
      return (
        <Paper className={styles.empty}>
          <div>Search and select users above</div>
        </Paper>
      )
    }
    const rows = users.map((user, i) => {
      const handleDeleteClick = (e) => {
        this.props.onDeleteClick(user.login)
      }
      return (
        <TableRow key={`User-${i}`} onRowClick={openRowDetail}>
          <TableRowColumn key={`User-${i}-Username`}>
            <div className={styles.row}>{user.login}</div>
          </TableRowColumn>
          <TableRowColumn key={`User-${i}-Email`}>
            <div className={styles.row}>{user.email}</div>
          </TableRowColumn>
          <TableRowColumn key={`User-${i}-Repos`} className={`${styles.hiddenMobile}`}>
            <div className={styles.row}>{user.public_repos}</div>
          </TableRowColumn>
          <TableRowColumn key={`User-${i}-Username-Delete`} className={styles.hiddenMobile} >
            <div className={styles.row}>
              <IconButton onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            </div>
          </TableRowColumn>
        </TableRow>
      )
    })
    return (
      <Paper {...this.props}>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn><div className={styles.row}>Username</div></TableHeaderColumn>
              <TableHeaderColumn>
                <div className={styles.row}>Email</div>
              </TableHeaderColumn>
              <TableHeaderColumn className={styles.hiddenMobile}>
                <div className={styles.row}>Public Repos</div>
              </TableHeaderColumn>
              <TableHeaderColumn className={styles.hiddenMobile}>
                <div className={styles.row}>Remove</div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} stripedRows>{rows}</TableBody>
        </Table>
      </Paper>
    )
  }
}

export default UsersTable
