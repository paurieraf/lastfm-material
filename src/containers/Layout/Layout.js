import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import { MenuList, MenuItem } from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import Hidden from 'material-ui/Hidden';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class Layout extends Component {
    state = {
        mobileOpen: false,
    };

    constructor(props) {
        super(props);
    };

    handleDrawerToggle = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        });
    };

    render() {
        const { classes, theme } = this.props;

        let helloUser = this.props.loggedUser ?
            <span>
                <IconButton
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                Hello {this.props.loggedUser.user.name}
            </span> : '';

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <MenuList>
                    <MenuItem button component={Link} to="/artists" >
                        <ListItemText primary="Artists" />
                    </MenuItem>
                    <MenuItem button component={Link} to="/albums">
                        <ListItemText primary="Albums" />
                    </MenuItem>
                    <MenuItem button component={Link} to="/tracks">
                        <ListItemText primary="Tracks" />
                    </MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem button component={Link} to="/about">
                        <ListItemText primary="About" />
                    </MenuItem>
                </MenuList>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                            Last.fm
                        </Typography>

                        <Typography color="inherit">
                            {helloUser}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/* <Body /> */}
                    {this.props.children}
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        error: state.user.error
    }
}

export default compose(withStyles(styles, { withTheme: true }), connect(mapStateToProps))(Layout);