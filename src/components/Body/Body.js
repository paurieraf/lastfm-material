import React, { Component } from 'react';
import { Paper } from 'material-ui';
import LoginForm from '../LoginForm/LoginForm';



class Body extends Component {
    style = {
        height: 500,
        width: '100%',
        margin: 10,
        textAlign: 'center',
        display: 'inline-block',
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Body">
                <Paper style={this.style} zDepth={1}>
                    <LoginForm />
                </Paper>
            </div>
        );
    }
}

export default Body;