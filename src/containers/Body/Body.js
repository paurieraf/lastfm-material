import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import ArtistsPage from '../../pages/Artist/ArtistsPage/ArtistsPage';
import LoginDialog from '../../components/User/LoginDialog/LoginDialog';

class Body extends Component {
    state = {
        redirect: false
    }

    style = {
        width: '80%',
        margin: 10,
        textAlign: 'center',
        display: 'inline-block',
    };

    render() {
        const { redirect } = this.state;
        if (!this.props.loggedUser) {
            return (
                <div className="Body">
                    <LoginDialog />
                </div>
            );
        }

        return (
            <Redirect to='/artists' />
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        error: state.user.error
    };
};


export default connect(mapStateToProps)(Body);