import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Home.scss'

export default class Home extends Component {
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
