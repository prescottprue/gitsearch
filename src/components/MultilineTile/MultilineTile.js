import React, { Component } from 'react'
import styles from './MultilineTile.scss'
import { Paper } from 'material-ui'

type Props = {

};
export class MultilineTile extends Component {
  props: Props;

  render () {
    return (
      <Paper className={styles.paper} zDepth={1}>
        <div>
          Multiline Input
        </div>
      </Paper>
    )
  }
}

export default MultilineTile
