import React from 'react'
import { List, 
        ListItem,
        ListItemText,
        ExpansionPanelSummary,
        ExpansionPanelDetails,
        ExpansionPanel,
        Grid,
        Avatar,
        Paper
        } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
    withStyles,
} from '@material-ui/core/styles'
import Me from '../images/eu.jpeg'
import Green from '../images/green.png'
import Blue from '../images/blue.png'
import DiamondOne from '../images/diamond-one.png'
import DiamondTwo from '../images/diamond-two.png'
import {
    FaMapMarkerAlt,
    FaCalendar,
    FaGraduationCap,
    FaLink,
    FaCode,
    FaMedal
}from 'react-icons/fa'

import '../css/linkelements.css'
//TO-DO CHANGE TEXT SO THAT ONLY TITLES ARE IN CENTER
const AboutPanel = withStyles(
    {
        root: {
            backgroundColor: `inherit`,
        }
    }
)(ExpansionPanel)

const styles = {
  title: {
    color: `#bdbdbd`,
    paddingBottom: `2%`,
    paddingRight: `5%`,
    marginTop: `0`,
    paddingTop: `2%`
  },
  image: {
    /* width: 100,
        height: 100, */
    borderRadius: `50%`,
  },
  text: {
    color: `#bdbdbd`,
  },
  paper:{
    //   textAlign: `center`,
    paddingLeft: `5%`,
    paddingBottom: `5%,`
  },
  h:{
      marginTop:0,
      marginBottom:0,
      textAlign: `center`,
  },
  titleh:{
    paddingTop: `5%`
  },
  subtitle:{
      paddingBottom: `2%`
  },
  scale:{
      width: `25px`,
      height :`25px`,
      float: `right`
  },
  skillsGrid:{
      maxWidth: `100%`
  },
  leftGrid:{
      borderLeft: `0.5px solid black`
  }
}

const About = () => (
  <List>
    <ListItem>
      <ListItemText>
        <AboutPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2 style={styles.title}>Biography</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <img src={Me} style={styles.image} />
              </Grid>
              <Grid item xs={6} style={styles.text}>
                <p>
                  A passionate computer science student with an ever going
                  interest in Web Development and AI. Using my free time to
                  further develop what I love the most, as well as learn new and
                  interesting skills.
                </p>
                <p>
                  Dedicated Linux fan
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/andrefmrocha/dotfiles"
                    className="text-links"
                  >
                    (come check out my dotfiles!){' '}
                  </a>
                  and a strong supporter of the open source community.
                </p>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        <AboutPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2 style={styles.title}>Education</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24} alignItems="center" justify="center">
            <Grid item xs={4}>
                <Paper style={styles.paper}>
                    <h4 style={Object.assign({}, styles.titleh, styles.h)}>Science and Technology</h4>
                    <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Colégio de Ermesinde</h5>
                    <FaMapMarkerAlt />
                    Ermesinde, Porto
                    <br />
                    <FaCalendar /> Set 2004 - Jun 2017
                    <br />
                    <FaGraduationCap /> Jun 2017
                    <br />
                    <FaLink />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.colegiodeermesinde.com"
                    >
                        https://www.colegiodeermesinde.com
                     </a>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper style={styles.paper}>
                    <h4 style={Object.assign({}, styles.titleh, styles.h)}>
                        Integrated Masters in Informatics and Computeer Engineering
                    </h4>
                    <h5 style={Object.assign({}, styles.h, styles.subtitle)}>
                        Faculty of Engineering of Porto (FEUP)
                    </h5>
                    <FaMapMarkerAlt />
                    Porto
                    <br />
                    <FaCalendar /> Set 2017 - Today
                    <br />
                    <FaGraduationCap /> Expected in June 2022
                    <br />
                    <FaLink />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sigarra.up.pt/feup/en/"
                    >
                        https://sigarra.up.pt/feup/en/
                    </a>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper style={styles.paper}>
                    <h4 style={Object.assign({}, styles.titleh, styles.h)}>
                        Cambridge Certificate of Proficiency in English
                    </h4>
                    <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Cambridge University</h5>
                    <FaMapMarkerAlt />
                    Ermesinde, Porto
                    <br />
                    <FaCalendar /> Jan 2018
                    <br />
                    <FaLink />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.cambridgeenglish.org/exams-and-tests/proficiency/"
                    >
                        https://www.cambridgeenglish.org/exams-and-tests/proficiency/
                    </a>
                </Paper>
            </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        <AboutPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2 style={styles.title}>Experience</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24} alignItems="center" justify="center">
              <Grid item xs={4}>
                <Paper style={styles.paper}>
                  <h4 style={Object.assign({}, styles.titleh, styles.h)}>Member</h4>
                  <h5 style={Object.assign({}, styles.h, styles.subtitle)}>NIAEFEUP</h5>
                  <FaMapMarkerAlt />
                  FEUP, Porto
                  <br />
                  <FaCalendar /> May 2018 - Today
                  <br />
                  <FaLink />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ni.fe.up.pt"
                  >
                    https://ni.fe.up.pt
                  </a>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={styles.paper}>
                  <h4 style={Object.assign({}, styles.titleh, styles.h)}>Competitor and Organizer</h4>
                  <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Google Hash Code</h5>
                  <FaMapMarkerAlt />
                  Porto - Porto Hub
                  <br />
                  <FaCalendar /> Mar 2018
                  <br />
                  <FaMedal /> 24,520,507 points
                  <br />
                  <FaCode />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codingcompetitions.withgoogle.com/hashcode/"
                  >
                    https://codingcompetitions.withgoogle.com/hashcode/
                  </a>
                  <br />
                  <FaLink />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sigarra.up.pt/feup/en/"
                  >
                    https://sigarra.up.pt/feup/en/
                  </a>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={styles.paper}>
                  <h4 style={Object.assign({}, styles.titleh, styles.h)}>
                    Member of the Public Relations Department
                  </h4>
                  <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Semana de Informática 2018</h5>
                  <FaMapMarkerAlt />
                  FEUP, Porto
                  <br />
                  <FaCalendar /> Out 2018
                  <br />
                  <FaLink />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sinf.pt"
                  >
                    https://sinf.pt
                  </a>
                </Paper>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        <AboutPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2 style={styles.title}>Skills</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24}>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            C/C++ -    
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Proficient <img style={styles.scale} src={DiamondOne} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Javascript   
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Intermediate <img style={styles.scale} src={Blue} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Python    
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Proficient <img style={styles.scale} src={DiamondOne} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            React   
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Intermediate <img style={styles.scale} src={Blue} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Node.js   
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Begginer <img style={styles.scale} src={Green} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Bootstrap    
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Proficient <img style={styles.scale} src={DiamondOne} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Jquery   
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Intermediate <img style={styles.scale} src={Blue} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Linux    
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Proficient <img style={styles.scale} src={DiamondOne} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Bash    
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Intermediate <img style={styles.scale} src={Blue} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            Git    
                        </Grid>
                        <Grid item xs={6} style={styles.leftGrid}>
                            <div> Expert <img style={styles.scale} src={DiamondTwo} /></div>
                        </Grid>
                    </Grid>
                </Paper>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
  </List>
)

export default About;