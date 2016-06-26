import React, { Component } from 'react'
import styles from './Home.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { CircularProgress } from 'material-ui'
import SearchTile from 'components/SearchTile/SearchTile'
import UsersTable from 'components/UsersTable/UsersTable'

type Props = {
  users: Array,
  isFetching: Boolean,
  getUsers: Function,
  removeUser: Function
};
class Home extends Component {
  props: Props;

  loadUser = (username) => {
    this.props.getUsers(username)
  }

  render () {
    const { users, isFetching, removeUser } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <SearchTile onSubmit={this.loadUser} />
        </div>
        {
          isFetching
          ? <CircularProgress size={1.5} className={styles.progress} />
          : null
        }
        {
          users && users.length >= 1
          ? (
            <div className={styles.table}>
              <UsersTable users={users} onDeleteClick={removeUser} />
            </div>
          )
          : null
        }
      </div>
    )
  }
}
// Place state of redux store into props of component
const mapStateToProps = ({ selectedUsers, router, entities }) => {
  const { items, isFetching } = selectedUsers
  return {
    isFetching,
    users: items ? items.map(username => entities.users[username]) : null,
    router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
