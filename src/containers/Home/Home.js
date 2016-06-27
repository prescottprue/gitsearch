import React, { Component } from 'react'
import styles from './Home.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { CircularProgress, Snackbar } from 'material-ui'
import SearchTile from 'components/SearchTile/SearchTile'
import UsersTable from 'components/UsersTable/UsersTable'

type Props = {
  users: Array,
  isFetching: Boolean,
  getUsers: Function,
  removeUser: Function,
  error: Object
};
class Home extends Component {
  props: Props;

  state = { messageCanOpen: false }

  loadUser = (username) => {
    this.props.getUsers(username)
    this.setState({
      messageCanOpen: true
    })
  }

  handleTouchTap = () => {
    this.setState({
      messageCanOpen: true
    })
  }

  handleRequestClose = () => {
    this.setState({
      messageCanOpen: false
    })
  }

  render () {
    const { users, isFetching, removeUser, error } = this.props
    const errorMessage = error ? `${error.status === 404 ? 'User' : ''} ${error.statusText}` : null
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <SearchTile onSubmit={this.loadUser} users={users} />
        </div>
        {
          (isFetching && (!users || users.length < 1))
          ? <CircularProgress size={1.5} className={styles.progress} />
          : null
        }
        {
          (users && users.length >= 1)
          ? (
            <div className={styles.table}>
              <UsersTable users={users} onDeleteClick={removeUser} />
            </div>
          )
          : null
        }
        <Snackbar
          open={this.state.messageCanOpen && !!errorMessage}
          message={errorMessage || 'Error'}
          action='close'
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}
// Place state of redux store into props of component
const mapStateToProps = ({ selectedUsers, router, entities }) => {
  const { items, isFetching, error } = selectedUsers
  return {
    isFetching,
    error,
    users: items ? items.map(username => entities.users[username]) : null,
    router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
