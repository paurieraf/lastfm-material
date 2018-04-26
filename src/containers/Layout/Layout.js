import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Body from '../Body/Body';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';



class Layout extends Component {
    drawerWidth = 240;

    styles = theme => ({
        root: {
            flexGrow: 1,
            height: 430,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawerPaper: {
            position: 'relative',
            width: 240,
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
            minWidth: 0, // So the Typography noWrap works
        },
        toolbar: theme.mixins.toolbar,
    });


    constructor(props) {
        super(props);
        this.state = {
            open: true,
            show: null
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (

            <div className={this.styles.root}>
                <AppBar position="absolute" className={this.styles.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            Clipped drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    styles={{
                        paper: this.styles.drawerPaper,
                    }}>
                    <div className={this.styles.toolbar} />
                    <List>
                    </List>
                    <Divider />
                    <List>
                    </List>
                </Drawer>
                <main className={this.styles.content}>
                    <div className={this.styles.toolbar} />
                    <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
                </main>
            </div>
        );
    }
}

export default Layout;