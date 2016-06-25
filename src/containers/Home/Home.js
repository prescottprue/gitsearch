import React, { Component, PropTypes } from 'react'
import styles from './Home.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import SearchTile from 'components/SearchTile/SearchTile'
import MultilineTile from 'components/MultilineTile/MultilineTile'

class Home extends Component {
  static propTypes = {
    getUser: PropTypes.func,
    users: PropTypes.array
  }
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
        <div className={styles.tiles}>
          <SearchTile />
          <MultilineTile />
        </div>
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
