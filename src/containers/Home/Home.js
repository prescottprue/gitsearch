import React, { Component, PropTypes } from 'react'
import styles from './Home.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import SearchTile from 'components/SearchTile/SearchTile'
import UsersTable from 'components/UsersTable/UsersTable'

class Home extends Component {
  static propTypes = {
    getUser: PropTypes.func,
    users: PropTypes.array
  }

  loadUser = (username) => {
    // console.log('load user called:', username)
    this.props.getUser(username)
  }

  render () {
    const { users } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <SearchTile onSubmit={this.loadUser} />
        </div>
        {
          users
          ? (
            <div className={styles.table}>
              <UsersTable users={users} />
            </div>
          )
          : null
        }
      </div>
    )
  }
}
// Place state of redux store into props of component
const mapStateToProps = (state) => {
  return {
    users: state.users.items,
    account: state.account,
    router: state.router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
