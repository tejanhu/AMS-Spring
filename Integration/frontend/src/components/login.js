import React from 'react';
import '../App.css';
import Dashboard from "./dashboard";

var Login = React.createClass({
    render: function () {
        return (
            <div>
                <form ref="userForm">
                    <div className="container">
                        <label className="cred"><br/>Username:<br/></label>
                        <input type="text" className="form-control" id="uname" ref="uname" placeholder="Enter Username"
                               required/>
                        <label className="cred"><br/>Password:<br/></label>
                        <input type="password" className="form-control" id="psw" ref="psw" placeholder="Enter Password"
                               required/>
                        <div className="forgot-psw">
                            <a className="forgot" href="/">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary" id="login-btn"
                                onClick={this.dashboard}>Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
});

export default Login;