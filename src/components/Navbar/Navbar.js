import React, { Component } from 'react'
import styles from './Navbar.scss'
import { Link } from 'react-router'
import { AppBar } from 'material-ui'

export default class Navbar extends Component {
  render () {
    return (
      <AppBar
        title={
          <Link className='Navbar-Brand' to='/'>
            Github Search
          </Link>
        }
        className={styles.navbar}
        showMenuIconButton={false}
      />
    )
  }
}
