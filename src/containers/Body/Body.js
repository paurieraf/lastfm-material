import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import ArtistsPage from '../../pages/ArtistsPage/ArtistsPage';
import LoginDialog from '../../components/LoginDialog/LoginDialog';

class Body extends Component {
    style = {
        width: '80%',
        margin: 10,
        textAlign: 'center',
        display: 'inline-block',
    };

    render() {
        if (!this.props.loggedUser) {
            return (
                <div className="Body">
                    <LoginDialog />
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
};


export default connect(mapStateToProps)(Body);