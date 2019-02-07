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


const StyledPaper = withStyles({
  root: {
    backgroundColor: `#d73a3173`,
    verticalAlign: `center`
  },
})(Paper)
const styles = {
  title: {
    color: `#bdbdbd`,
    paddingBottom: `2%`,
    paddingRight: `5%`,
    marginTop: `0`,
    paddingTop: `2%`,
  },
  image: {
    /* width: 100,
        height: 100, */
    borderRadius: `50%`,
  },
  text: {
    color: `#bdbdbd`,
  },
  paper: {
    //   textAlign: `center`,
    paddingLeft: `3%`,
    paddingBottom: `3%`,
    // height: `400px`
  },
  h: {
    marginTop: 0,
    marginBottom: 0,
    textAlign: `center`,
  },
  titleh: {
    paddingTop: `5%`,
  },
  subtitle: {
    paddingBottom: `2%`,
  },
  scale: {
    width: `23px`,
    height: `23px`,
    float: `right`,
  },
  skillsGrid: {
    maxWidth: `100%`,
  },
  leftGrid: {
    //   borderLeft: `0.5px solid black`
  },
  skills: {
    fontSize: `calc(1vw + 1vh + 1vmin)`,
    display: `inline-block`,
    padding: `1% 3% 2% 3%`,
    width: `25%`,
    textAlign: `center`
  },
  panel: {
    backgroundColor: `#032b2fba`,
  },
}

const About = () => (
  <List>
    <ListItem>
      <ListItemText>
        <AboutPanel style={styles.panel}>
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
        <AboutPanel style={styles.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2 style={styles.title}>Education</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{
                textAlign: `center`,
                width: `77%`,
                margin: `auto`
            }}>
            <div>
                <StyledPaper style={styles.paper} square>
                    <h4 style={Object.assign({}, styles.titleh, styles.h)}>Science and Technology</h4>
                    <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Colégio de Ermesinde</h5>
                    <FaMapMarkerAlt />
                    Ermesinde, Porto
                    <FaCalendar /> Set 2004 - Jun 2017
                    <FaGraduationCap /> Jun 2017
                    <br/>
                    <FaLink />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.colegiodeermesinde.com"
                    >
                        https://www.colegiodeermesinde.com
                     </a>
                </StyledPaper>
            </div>
            <div>
                <StyledPaper style={styles.paper} square>
                    <h4 style={Object.assign({}, styles.titleh, styles.h)}>
                        Integrated Masters in Informatics and Computeer Engineering
                    </h4>
                    <h5 style={Object.assign({}, styles.h, styles.subtitle)}>
                        Faculty of Engineering of Porto (FEUP)
                    </h5>
                    <FaMapMarkerAlt />
                    Porto
                    <FaCalendar /> Set 2017 - Today
                    <FaGraduationCap /> Expected in June 2022
                    <br/>
                    <FaLink />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sigarra.up.pt/feup/en/"
                    >
                        https://sigarra.up.pt/feup/en/
                    </a>
                </StyledPaper>
            </div>
            <div>
                <StyledPaper style={styles.paper} square>
                    <h4 style={Object.assign({}, styles.titleh, styles.h)}>
                        Cambridge Certificate of Proficiency in English
                    </h4>
                    <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Cambridge University</h5>
                    <FaMapMarkerAlt />
                    Ermesinde, Porto
                    <FaCalendar /> Jan 2018
                    <br/>
                    <FaLink />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.cambridgeenglish.org/exams-and-tests/proficiency/"
                    >
                        https://www.cambridgeenglish.org/exams-and-tests/proficiency/
                    </a>
                </StyledPaper>
            </div>
            </div>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        <AboutPanel style={styles.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2 style={styles.title}>Experience</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
                <div style={{
                    textAlign: `center`,
                    width: `77%`,
                    margin: `auto`
                }}>
                <div>
                <StyledPaper style={styles.paper} square>
                  <h4 style={Object.assign({}, styles.titleh, styles.h)}>Member</h4>
                  <h5 style={Object.assign({}, styles.h, styles.subtitle)}>NIAEFEUP</h5>
                  <FaMapMarkerAlt />
                  FEUP, Porto
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
                </StyledPaper>
              </div>
              <div>
                <StyledPaper style={styles.paper} square>
                  <h4 style={Object.assign({}, styles.titleh, styles.h)}>Competitor and Organizer</h4>
                  <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Google Hash Code</h5>
                  <FaMapMarkerAlt />
                  Porto - Porto Hub
                  <FaCalendar /> Mar 2018
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
                </StyledPaper>
              </div>
              <div>
                <StyledPaper style={styles.paper} square>
                  <h4 style={Object.assign({}, styles.titleh, styles.h)}>
                    Member of the Public Relations Department
                  </h4>
                  <h5 style={Object.assign({}, styles.h, styles.subtitle)}>Semana de Informática 2018</h5>
                  <FaMapMarkerAlt />
                  FEUP, Porto
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
                </StyledPaper>
              </div>
            </div>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        <AboutPanel style={styles.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2 style={styles.title}>Skills</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            C/C++ -    
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Proficient</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Javascript   
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Intermediate</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Python    
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Proficient</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            React   
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Intermediate</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Node.js   
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Begginer</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Bootstrap    
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Proficient</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Jquery   
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Intermediate</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Linux    
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Proficient</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Bash    
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Intermediate</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
              <div style={styles.skills}>
                <StyledPaper>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            Git    
                        </Grid>
                        <Grid item xs={12} style={styles.leftGrid}>
                            <div> Expert</div>
                        </Grid>
                    </Grid>
                </StyledPaper>
              </div>
            </div>
          </ExpansionPanelDetails>
        </AboutPanel>
      </ListItemText>
    </ListItem>
  </List>
)

export default About;