import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from 'material-ui';
import * as userActions from '../../store/actions/index';
import { Dialog } from 'material-ui';
import { DialogTitle } from 'material-ui';
import { DialogContent } from 'material-ui';
import { DialogActions } from 'material-ui';
import { DialogContentText } from 'material-ui';

class LoginDialog extends Component {
    state = {
        username: ''
    }

    constructor(props) {
        super(props);
    }

    handleOnFetchLoggedUser = () => {
        console.log('LOGIN_DIALOG_HANDLE_ON_FETCH_LOGGED_USER');
        this.props.onFetchLoggedUser(this.state.username);
    }

    handleUsernameInputChange = (event) => {
        console.log('LOGIN_DIALOG_HANDLE_USERNAME_INPUT_CHANGE_EVENT', event);
        const { name, value } = event.target;
        this.setState({
            username: value
        });
        console.log('LOGIN_DIALOG_HANDLE_USERNAME_INPUT_CHANGE_NEW_STATE', this.state);
    }

    render() {
        return (
            <Dialog
                open>
                <DialogTitle>
                    Last.fm
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Insert your Last.fm username to check your profile
                    </DialogContentText>
                    <TextField
                        id="username"
                        label="Username"
                        type="text"
                        autoFocus
                        margin="dense"
                        fullWidth
                        onChange={this.handleUsernameInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleOnFetchLoggedUser}>
                        Login
                </Button>
                </DialogActions>
            </Dialog>
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
        onFetchLoggedUser: (username) => dispatch(userActions.fetchLoggedUser(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);