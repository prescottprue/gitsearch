import React, { Component } from 'react'
import './Navbar.scss'
import { Link } from 'react-router'
import { AppBar } from 'material-ui'

export default class Navbar extends Component {
  render () {
    return (
      <AppBar
        title={<Link className='Navbar-Brand' to='/'>gitsearch</Link>}
        className='Navbar'
        showMenuIconButton={false}
      />
    )
  }
}
