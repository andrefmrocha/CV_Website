import React from 'react';
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
import red from '@material-ui/core/colors/blue'

const palette = createMuiTheme({
    palette: {
        primary: {
            main:'#bdbdbd',
            light: '#efefef',
            contrastText: '#efefef',
            dark: '#8d8d8d'
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
  root: {
    color: `black`,
    backgroundColor: theme.palette.background.paper,
    width: `100%`,
    flexGrow: 1,
  },
  tabs: {
    backgroundColor: `#373737`,
      color: `#0000008a`,
  },
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

        return (
            <MuiThemeProvider theme = {palette}> 
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                            className = {classes.tabs}
                        >
                            <Tab label="About Me" />
                            <Tab label="Projects" />
                            <Tab label="Contact" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                        className = {classes.tabs}
                    >
                        <TabContainer dir={theme.direction}>Item One</TabContainer>
                        <TabContainer dir={theme.direction}>Item Two</TabContainer>
                        <TabContainer dir={theme.direction}>Item Three</TabContainer>
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);  