import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Body from '../Body/Body';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        //height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    flex: {
        flex: 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar
});

class Layout extends Component {

    constructor(props) {
        super(props);
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    render() {
        const { classes } = this.props;
        let helloUser = this.props.loggedUser ?
            <span>
                <IconButton
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                Hello {this.props.loggedUser.user.name}
            </span> : '';

        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                            Last.fm
                        </Typography>

                        <Typography color="inherit">
                            {helloUser}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper
                    }}>
                    <div className={classes.toolbar} />
                    <List>
                        <ListItem button>
                            <ListItemText primary="Artists" href="/artists" />
                        </ListItem>
                        <ListItem button component="a" href="/albums">
                            <ListItemText primary="Albums" />
                        </ListItem>
                        <ListItem button component="a" href="/tracks">
                            <ListItemText primary="Tracks" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemText primary="About" href="/about" />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Body />
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        error: state.user.error
    }
}

export default compose(withStyles(styles), connect(mapStateToProps))(Layout);