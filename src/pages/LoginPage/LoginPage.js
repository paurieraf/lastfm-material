import React, { Component } from 'react';
import { TextField, Button } from 'material-ui';

class LoginForm extends Component {
    style = {
        // height: '100%',
        // width: '100%',
        // margin: 10,
        // textAlign: 'center',
        // display: 'inline-block',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LoginForm" style={this.style}>
                <TextField
                    hintText="Username"
                />
                <br />
                <Button variant="raised" label="Login" />
            </div>
        );
    }
}

export default LoginForm;