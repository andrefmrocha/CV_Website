import React from 'react'
import Paper from '@material-ui/core/Paper'
import Image from '../images/background.jpeg'
import { FaUserCircle, FaToolbox, FaPhone } from 'react-icons/fa'
import { Link, animateScroll as scroll} from 'react-scroll';
import Icon from '../components/icon'
import { Grid } from '@material-ui/core';

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
    paddingTop: `25vh`,
    verticalAlign: `middle`,
  },
  nameHeader: {
    color: `#f3f3f3`,
    // backgroundColor: `#25273285`,
    textDecoration: `none`,
    textAlign: `center`,
    verticalAlign: `baseline`,
    paddingTop: `10%`,
    fontSize: `30px`,
    maxHeight: `50%`,
    // lineHeight: `75vh`
  },
  imgHeader: {
    maxWidth: `30%`,
    marginLeft: `auto`,
    marginRight: `auto`,
  },
  img: {
    borderRadius: `100px`,
  },
  iconSize: 45,
  iconColor: `#2B4251`,
  textInfo: {
    display: `inline-block`,
  },
}


const Header = ({ personTitle, personDescription }) => (
  <Paper style={styles.paperContainer} square>
    <div style={styles.paperFront}>
      <h1 style={{ margin: 0 }}>
        <Grid container spacing={24} >
          <Grid item xs={4} style={{
            float: `left`,
          }}>
            <Grid style={{ verticalAlign: `top` , paddingBottom: `3%`}} container spacing={24}>
              <Grid item xs={12}>
                <Link to='info-tabs' style={{backgroundImage: 'none'}} smooth={true}>
                  <Icon>
                    <FaUserCircle size={styles.iconSize} color={styles.iconColor} />
                  </Icon>
                </Link>
                <Grid item xs={12}>
              </Grid>
                <Link to='info-tabs' style={{backgroundImage: 'none'}} smooth={true}>
                  <Icon>
                    <FaToolbox size={styles.iconSize} color={styles.iconColor} />
                  </Icon>
                </Link>
                <Grid item xs={12}>
              </Grid>
                <Link to='info-tabs' style={{backgroundImage: 'none'}} smooth={true}>
                  <Icon>
                    <FaPhone size={styles.iconSize} color={styles.iconColor} />
                  </Icon>
                </Link>
              </Grid>
              </Grid>
          </Grid>
          <Grid item xs={8} style={{
            float: `right`,
            paddingRight: `11%`
          }}>
          <div>
            <div style={{ 
              marginBottom: `2.5%` , 
              paddingTop: `4%`,
              float: `right`,
              paddingBottom: `4%`              
              }}>{personTitle}</div>
            {/* <div
              style={{
                border: `1px solid white`,
                maxWidth: `90%`,
                marginLeft: `auto`,
                marginRight: `auto`,
              }}
            /> */}
            <div style={{ paddingTop: `2.5%`, float: `right` }}>{personDescription}</div>
          </div>
          </Grid>
        </Grid>
      </h1>
    </div>
  </Paper>
)

export default Header
