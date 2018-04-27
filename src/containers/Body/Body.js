import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ArtistsPage from '../../pages/ArtistsPage/ArtistsPage';

class Body extends Component {

    style = {
        width: '80%',
        margin: 10,
        textAlign: 'center',
        display: 'inline-block',
    };


    render() {
        if (!this.props.isLoggedIn) {
            return (
                <div className="Body">
                    <LoginPage />
                </div>
            );
        }

        return (
            <div className="Body">
                <ArtistsPage />
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


export default connect(mapStateToProps)(Body);