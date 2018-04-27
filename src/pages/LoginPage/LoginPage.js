import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from 'material-ui';
import * as userActions from '../../store/actions/index';

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

    handleOnFetchLoggedUser = () => {
        this.props.onFetchLoggedUser();
    }

    render() {
        return (
            <div className="LoginForm" style={this.style}>
                <TextField
                    hintText="Username"
                />
                <br />
                <Button
                    variant="raised"
                    label="Login"
                    onClick={this.handleOnFetchLoggedUser()} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        error: state.user.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchLoggedUser: () => dispatch(userActions.fetchLoggedUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);