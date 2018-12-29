import React from 'react'
import Paper from '@material-ui/core/Paper'
import Image from '../images/background.jpeg'

const styles = {
  paperContainer: {
    backgroundImage: `url(` + Image + `)`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    height: `100vh`,
    verticalAlign: `middle`,
  },
  paperFront: {
    margin: `auto`,
    maxWidth: `50%`,
    paddingTop: `15%`,
    verticalAlign: `middle`,
  },
  nameHeader: {
    color: `#f3f3f3`,
    backgroundColor: `rgba(255, 255, 255, 0.4)`,
    textDecoration: `none`,
    textAlign: `center`,
    height: `50vh`,
    verticalAlign: `baseline`,
    paddingTop: `15%`,
    // lineHeight: `75vh`
  },
}


const Header = ({ personTitle,  personDescription}) => (
  <Paper style={styles.paperContainer}>
    <div style={styles.paperFront}>
      <h1 style={{ margin: 0}}>
        <Paper style={styles.nameHeader}>
          {personTitle}
          <div>{personDescription}</div>
        </Paper>
      </h1>
    </div>
  </Paper>
)

export default Header
