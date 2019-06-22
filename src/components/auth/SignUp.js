import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, ()=> console.log(this.state))
        // console.log(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        let newUser = this.state;
        this.props.signUp(newUser)
    }

    render() {
        if(this.props.auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input name="firstName" type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input name="lastName" type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {
                                this.props.authError 
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
