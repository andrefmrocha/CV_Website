import React from 'react'
import Paper from '@material-ui/core/Paper'
import Image from '../images/background.jpeg'
import Me from '../images/eu.jpeg'
import { FaUserCircle, FaToolbox } from 'react-icons/fa'

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
    fontSize: `30px`
    // lineHeight: `75vh`
  },
  imgHeader:{
    maxWidth: `30%`,
    marginLeft: `auto`,
    marginRight: `auto`,
  },
  img: {
    borderRadius: `100px`,
  },
}


const Header = ({ personTitle, personDescription }) => (
  <Paper style={styles.paperContainer}>
    <div style={styles.paperFront}>
      <h1 style={{ margin: 0 }}>
        <Paper style={styles.nameHeader}>
          <div style={{ marginBottom: `2.5%` }}>{personTitle}</div>
          <div
            style={{
              border: `1px solid white`,
              maxWidth: `90%`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          />
          <div style={{ marginTop: `2.5%` }}>{personDescription}</div>
        </Paper>
      </h1>
      <div>
        <FaUserCircle/>
        <FaToolbox/>

      </div>
    </div>
  </Paper>
)

export default Header
