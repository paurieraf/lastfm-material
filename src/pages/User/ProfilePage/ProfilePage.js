import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginDialog from '../../../components/User/LoginDialog/LoginDialog';
import ProfileCard from '../../../components/User/ProfileCard/ProfileCard';


class ProfilePage extends Component {

    componentDidMount() {
    }

    render() {

        if (!this.props.loggedUser) {
            return (
                <div className="Main">
                    <LoginDialog />
                </div>
            );
        }

        return (
            <div>
                <h1>Profile</h1>
                <ProfileCard user={this.props.loggedUser} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        error: state.track.error
    };
}

const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);