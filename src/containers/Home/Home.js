import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Home.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { find } from 'lodash'

class Home extends Component {
  componentDidMount () {
    this.loadUser('prescottprue')
  }
  loadUser (username) {
    this.props.getUser(username)
  }
  render () {
    const { users } = this.props
    console.log('users:', users)
    return (
      <div className={styles.container}>
        <h2>Welcome to gitsearch</h2>
        <p>Example search applicaiton </p>
        {
          users
          ? (
              <div>
                Username: { users[0].login }<br/>
                Email: { users[0].email }
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
  console.log('state:', state)
  return {
    users: state.users.items,
    account: state.account,
    router: state.router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
