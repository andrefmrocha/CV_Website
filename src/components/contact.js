import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaEnvelope
}from 'react-icons/fa';
import Icon from './icon'
import { Grid } from '@material-ui/core';

const styles = {
  iconWrapper: {
    display: `inline-block`,
  },
  link: {
    backgroundImage: `none`,
    color: `inherit`,
    textShadow: `none`,
    paddingTop: `5%`
  },
  iconText: {
    paddingLeft: `25%`,
  },
  linkRight:{
    float:`right`,
    paddingRight: `5%`
  },
  linkLeft:{
    float:`left`,
    paddingLeft: `5%`,
    
  },
  iconSize: 100,
}

const contact = () => (
    <div>
        <Grid 
            container
            spacing={24}
            alignItems="center"
            justify="center"
            zeroMinWidth
        >
            <Grid 
                item xs={6}
                style={styles.iconWrapper}
            >
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/andrefmrocha"
                style= {{...styles.link, ...styles.linkRight}}
                >
                <Icon>
                    <FaGithub size={styles.iconSize}/>
                    <div style={styles.iconText}>Github</div>
                </Icon>
                </a>
            </Grid>
            <Grid 
                item xs={6}
                style={styles.iconWrapper}
            >
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/andrefmrocha/"
                style={{ ...styles.link, ...styles.linkLeft }}
                >
                <Icon>
                    <FaLinkedin size={styles.iconSize}/>
                    <div style={styles.iconText}>LinkedIn</div>
                </Icon>
                </a>
            </Grid>
            <Grid 
                item xs={6}
                style={styles.iconWrapper}
            >
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:andrefmrocha@live.com.pt"
                style={{ ...styles.link, ...styles.linkRight }}
                >
                <Icon>
                    <FaEnvelope size={styles.iconSize}/>
                    <div style={styles.iconText}>E-Mail</div>
                </Icon>
                </a>
            </Grid>
            <Grid 
                item xs={6}
                style={styles.iconWrapper}
            >
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/andrefmrocha"
                style={{ ...styles.link, ...styles.linkLeft}}
                >
                <Icon>
                    <FaFacebook size={styles.iconSize}/>
                    <div style={styles.iconText}>Facebook</div>
                </Icon>
                </a>
            </Grid>
        </Grid>
    </div>
)

export default contact;