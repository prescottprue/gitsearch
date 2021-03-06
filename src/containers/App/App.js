import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from 'actions'

// Components
import Navbar from 'components/Navbar/Navbar'

// Styling
import Theme from 'theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import styles from './App.scss'

// Tap Plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class Main extends Component {

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  getChildContext = () => {
    return {
      muiTheme: getMuiTheme(Theme)
    }
  }

  render () {
    return (
      <div className={styles.app}>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

// Place state of redux store into props of component
const mapStateToProps = (state) => {
  return {
    account: state.account,
    router: state.router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
