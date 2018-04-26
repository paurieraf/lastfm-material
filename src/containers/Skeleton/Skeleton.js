import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Body from '../Body/Body';



class Skeleton extends Component {

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

            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className="iconbutton" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className="typo">
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Body />
            </div>

        );
    }
}

export default Skeleton;