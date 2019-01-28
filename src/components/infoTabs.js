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

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  tabs: {
    backgroundColor: `#494949`,
    color: `#bdbdbd`,
  },
  appBar:{
    padding: 0,
    maxWidth: `100%`
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
                            frontmatter {
                              title
                              subtitle
                            }
                          }
                        }
                      }
                    }
                  `} render={data =>( 
                      <div>
                          <h1>
                          {data.allMarkdownRemark.edges[0].node.frontmatter.title}
                          </h1>
                          <div>{data.allMarkdownRemark.edges[0].node.frontmatter.subtitle}</div>
                      </div>
                  )} />
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