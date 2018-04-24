import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';



class Skeleton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: null
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div className="App">
                <AppBar
                    title="Last.fm"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}>

                    <AppBar
                        title="Menu"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        onLeftIconButtonClick={this.handleToggle}
                    />
                    <MenuItem>Test 1</MenuItem>
                    <MenuItem>Test 2</MenuItem>
                    <MenuItem>Test 3</MenuItem>

                </Drawer>
            </div>
        );
    }
}

export default Skeleton;