import React, { Component } from 'react';
import { Paper } from 'material-ui';
import LoginForm from '../../components/LoginForm/LoginForm';

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
        this.state = {
            isLoggedIn: true,
        };

        this.isLoggedIn = this.state.isLoggedIn;
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        console.log(this.isLoggedIn);
        

        return (
            <div className="Body">
                <Paper style={this.style} zDepth={1}>
                    {isLoggedIn ? (
                        <LoginForm isLoggedIn={isLoggedIn} />
                    ) : (
                        <LoginForm isLoggedIn={false} />
                    )}

                </Paper>
            </div>
        );
    }
}

export default Body;