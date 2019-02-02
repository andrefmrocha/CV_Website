import React from 'react'
import Paper from '@material-ui/core/Paper'
import Image from '../images/background.jpeg'
import { FaUserCircle, FaToolbox, FaPhone } from 'react-icons/fa'
import { Link, animateScroll as scroll} from 'react-scroll';
import Icon from '../components/icon'

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
    paddingTop: `12%`,
    verticalAlign: `middle`,
  },
  nameHeader: {
    color: `#f3f3f3`,
    backgroundColor: `rgba(255, 255, 255, 0.4)`,
    textDecoration: `none`,
    textAlign: `center`,
    verticalAlign: `baseline`,
    paddingTop: `10%`,
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
  textInfo:{
    display: `inline-block`,
  }
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
          <div style={{ paddingTop: `2.5%` }}>{personDescription}</div>
          <div style={{ verticalAlign: `top` , paddingBottom: `3%`}}>
            <Link to='info-tabs' style={{backgroundImage: 'none'}}smooth={true}>
              <Icon>
                <FaUserCircle size={styles.iconSize} color={styles.iconColor} />
              </Icon>
            </Link>
            <Link to='info-tabs' style={{backgroundImage: 'none'}}smooth={true}>
              <Icon>
                <FaToolbox size={styles.iconSize} color={styles.iconColor} />
              </Icon>
            </Link>
            <Link to='info-tabs' style={{backgroundImage: 'none'}}smooth={true}>
              <Icon>
                <FaPhone size={styles.iconSize} color={styles.iconColor} />
              </Icon>
            </Link>
          </div>
        </Paper>
      </h1>
    </div>
  </Paper>
)

export default Header
