import React from 'react'
import Paper from '@material-ui/core/Paper'
import Image from '../images/background.jpeg'
import Me from '../images/eu.jpeg'
import { FaUserCircle, FaToolbox, FaPhone } from 'react-icons/fa'
import posed from 'react-pose'

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
  iconSize: 45,
  iconColor: `#2B4251`,
  square: {
    width: `100px`,
    height: `100px`,
    background: `red`,
  }
}

const Icon = posed.div({
  hoverable: true,
  pressable: true,
  init: { 
    scale: 1,
    margin: `17% 13% 0px 13%`,
    display: `inline-block`
  },
  hover: { scale: 1.4 },
  press: { scale: 1.2}
});


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
          <div style={{ verticalAlign: `top` }}>
            <Icon>
              <FaUserCircle size={styles.iconSize} color={styles.iconColor} />
            </Icon>
            <Icon>
              <FaToolbox size={styles.iconSize} color={styles.iconColor} />
            </Icon>
            <Icon>
              <FaPhone size={styles.iconSize} color={styles.iconColor} />
            </Icon>
          </div>
        </Paper>
      </h1>

    </div>
  </Paper>
)

export default Header
