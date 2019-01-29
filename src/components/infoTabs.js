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
    h1:{
        color: `#bdbdbd`
    },
    subtitle:
    {
        color: `#bdbdbd`,

    },
    text:
    {
        color: `#bdbdbd`
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
                Item One
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <StaticQuery query={graphql`
                    query projectsQuery {
                      allMarkdownRemark {
                        edges {
                          node {
                            id
                            html
                            frontmatter {
                              title
                              subtitle
                            }
                          }
                        }
                      }
                    }
                  `} render={data => 
                  <List>                    
                      {data.allMarkdownRemark.edges.map(post =>(      
                        <ListItem>
                            <ListItemText>
                                <StyledPanel>
                                <ExpansionPanelSummary>
                                    <h3 style={panelStyling.h1}>{post.node.frontmatter.title}</h3>
                                    <p style={panelStyling.subtitle}>{post.node.frontmatter.subtitle}</p>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                        <div dangerouslySetInnerHTML={{ __html: post.node.html }} style={panelStyling.text}/>
                                </ExpansionPanelDetails>
                                </StyledPanel>
                            </ListItemText>
                        </ListItem>
                      ))}
                  </List>
                } />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                Item Three
              </TabContainer>
            </SwipeableViews>
          </MuiThemeProvider>
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(FullWidthTabs);  

// export const pageQuery = graphql`
//   query projectsQuery{
//     markdownRemark{
//       frontmatter {
//         title
//       }
//     }
//   }
//   `