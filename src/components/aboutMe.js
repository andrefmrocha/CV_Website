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
import {
    FaMapMarkerAlt,
    FaCalendar,
    FaGraduationCap,
    FaLink,
    FaCode,
    FaMedal
}from 'react-icons/fa'

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
      textAlign: `center`,
  },
  h:{
      marginTop:0,
      marginBottom:0,
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
                  Dedicated Linux fan{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/andrefmrocha/dotfiles"
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
            <h2 style={styles.title}>Education and Experience</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24} alignItems="center" justify="center">
              <Grid item xs={4}>
                <Paper style={styles.paper}>
                  <h4 style={styles.h}>Science and Technology</h4>
                  <h5 style={styles.h}>Colégio de Ermesinde</h5>
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
                  <h4 style={styles.h}>
                    Integrated Masters in Informatics and Computeer Engineering
                  </h4>
                  <h5 style={styles.h}>
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
                  <h4 style={styles.h}>Member</h4>
                  <h5 style={styles.h}>NIAEFEUP</h5>
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
                  <h4 style={styles.h}>Competitor and Organizer</h4>
                  <h5 style={styles.h}>Google Hash Code</h5>
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
                  <h4 style={styles.h}>
                    Member of the Public Relations Department
                  </h4>
                  <h5 style={styles.h}>Semana de Informática 2018</h5>
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
              <Grid item xs={4}>
                <Paper style={styles.paper}>
                  <h4 style={styles.h}>
                    Cambridge Certificate of Proficiency in English
                  </h4>
                  <h5 style={styles.h}>Cambridge University</h5>
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
            <h2 style={styles.title}>Skills</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <Paper>C/C++</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Javascript</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Python</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>React</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Node.js</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Bootstrap</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Jquery</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Keras/Tensorflow</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Linux</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Bash</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>Git</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
  </List>
)

export default About;