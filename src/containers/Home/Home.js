import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Home.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'

class Home extends Component {
  componentDidMount () {
    this.props.getUser('prescottprue')
  }
  render () {
    return (
      <div className={styles.container}>
        <h2>Welcome to gitsearch</h2>
        <p>Example application built React and Firebase. </p>
        <Link to='/cars'>Cars List Example</Link>
      </div>
    )
  }
}
// Place state of redux store into props of component
const mapStateToProps = (state) => {
  console.log('state:', state)
  return {
    account: state.account,
    router: state.router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
