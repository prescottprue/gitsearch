import React from 'react'
import { Navbar } from 'components/Navbar/Navbar'
import classes from 'components/Navbar/Navbar.scss'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Navbar', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Navbar/>)
  })

  it.skip('Renders a navbar', () => {
    const welcome = _wrapper.find('h1')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/React Redux Starter Kit/)
  })

})
