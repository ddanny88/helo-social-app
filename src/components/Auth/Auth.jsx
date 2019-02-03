import React, { Component } from 'react';
import { updateUsername, updatePassword } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Auth extends Component {

    handleUsername = (e) => {
        this.props.updateUsername(e.target.value);
    }

    handlePassword = (e) => {
        this.props.updatePassword(e.target.value);
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <form className="auth-form">
                    <input 
                        onChange={this.handleUsername}
                        placeholder=" username" 
                    />

                    <input 
                        onChange={this.handlePassword}
                        placeholder=" password" 
                    />
                </form>
            </div>
        );
    }
}
function mapStateToProps(state){
    const {username} = state;
    return {
        username
    }
}
export default connect(mapStateToProps, { updateUsername, updatePassword })(Auth);