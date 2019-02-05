import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Radium from 'radium'
import Contact from './contact'
import About from './aboutMe'

const palette = createMuiTheme({
    palette: {
        primary: {
            main:'#bdbdbd',
            light: '#efefef',
            dark: '#8d8d8d',
            contrastText: '#000'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

function TabContainer({ children, dir }) {
    return (
        <div dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </div>
    );
}

const StyledPanel = withStyles(
    {
        root:{
            backgroundColor: `inherit`,
        }
    }
)(ExpansionPanel)


const panelStyling = {
  h1: {
    color: `#bdbdbd`,
    paddingBottom: `2%`,
    paddingRight: `5%`,
  },
  subtitle: {
    color: `#bdbdbd`,
    paddingTop: `4%`,
  },
  text: {
    color: `#bdbdbd`,
    width: `100%`,
  },
  link: {
    paddingLeft: `10px`,
    backgroundImage: `none`,
    color: `inherit`,
    fontWeight: `bold`,
    textShadow: `none`,
    ':hover': {
      color: `red`,
      textShadow: `0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff, 0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;`,
    },
  },
  images: {
    /* width: `100%`,
    height: `33%`,
    objectFit: `fill` */
    marginBottom: `0px`
  }
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const StyledList = withStyles(
    {
        root:{

        }
    }
)

const styles = theme => ({
  tabs: {
    backgroundColor: `#494949`,
    color: `#bdbdbd`,
  },
  appBar:{
    padding: 0,
    maxWidth: `100%`
  },
  textColor:{
      textColor: `#bdbdbd`
  }
})

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;
        return <MuiThemeProvider theme={palette}>
            <AppBar position="static" color="default" className={classes.appBar} style={{ padding: 0 }} id="info-tabs">
              <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" fullWidth className={classes.tabs}>
                <Tab label="About Me" />
                <Tab label="Projects" />
                <Tab label="Contact" />
              </Tabs>
            </AppBar>
            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex} className={classes.tabs}>
              <TabContainer dir={theme.direction}>
                <About />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <StaticQuery query={graphql`
                    query projectsQuery {
                      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
                        edges {
                          node {
                            id
                            html
                            frontmatter {
                              title
                              subtitle
                              link
                              date
                              image_1 {
                                publicURL
                              }
                              image_2 {
                                publicURL
                              }
                              image_1_legend
                              image_2_legend
                            }
                          }
                        }
                      }
                    }
                  `} render={data => <List>
                      {data.allMarkdownRemark.edges.map(post => (
                        <ListItem>
                          <ListItemText>
                            <StyledPanel>
                              <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                              >
                                <h3 style={panelStyling.h1}>
                                  {post.node.frontmatter.title}
                                </h3>
                                <p style={panelStyling.subtitle}>
                                  {post.node.frontmatter.subtitle}
                                </p>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <div>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: post.node.html,
                                    }}
                                    style={panelStyling.text}
                                    className="text-links"
                                  />
                                  <div style={panelStyling.text}>
                                    Want to know more?
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href={post.node.frontmatter.link}
                                      className="text-links"
                                    >
                                      Click here
                                    </a>
                                  </div>

                                  <Carousel infiniteLoop autoPlay stopOnHover>
                                    <div>
                                      <img
                                        src={
                                          post.node.frontmatter.image_1
                                            .publicURL
                                        }
                                        style={panelStyling.images}
                                      />
                                      <p className="legend">
                                        {
                                          post.node.frontmatter
                                            .image_1_legend
                                        }
                                      </p>
                                    </div>
                                    <div>
                                      <img
                                        src={
                                          post.node.frontmatter.image_2
                                            .publicURL
                                        }
                                        style={panelStyling.images}
                                      />
                                      <p className="legend">
                                        {
                                          post.node.frontmatter
                                            .image_2_legend
                                        }
                                      </p>
                                    </div>
                                  </Carousel>
                                </div>
                              </ExpansionPanelDetails>
                            </StyledPanel>
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>} />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <Contact />
              </TabContainer>
            </SwipeableViews>
          </MuiThemeProvider>
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(Radium(FullWidthTabs));  

// export const pageQuery = graphql`
//   query projectsQuery{
//     markdownRemark{
//       frontmatter {
//         title
//       }
//     }
//   }
//   `