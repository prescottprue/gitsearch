import React, { Component } from 'react'
import styles from './<%= pascalEntityName %>.scss'
import Relay from 'react-relay'

type Props = {

}
export class <%= pascalEntityName %> extends Component {
  props: Props;

  render () {
    return (
      <div></div>
    )
  }
}

export default Relay.createContainer(<%= pascalEntityName %>, {
  fragments: {
    viewer: () => Relay.QL`

    `
  }
})
