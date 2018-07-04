import React, { Component } from 'react';

class Home extends Component{
    render(){
        return (
           
                <form ref="userForm">
                        <div class="container">
                            <label className="cred"><br/>Username:<br/></label>
                            <input type="text" class="form-control" id="uname" ref="uname" placeholder="Enter Username" required/>
                            <label className="cred"><br/>Password:<br/></label>
                            <input type="password" class="form-control" id="psw" ref="psw" placeholder="Enter Password" required/>                         
                            <div class="forgot-psw">
                                <a class="forgot" href="/">Forgot password?</a>
                            </div>
                            <button type="submit" class="btn btn-primary" id="login-btn" onClick={this.viewDashboard}>Login</button>
                         </div>
                </form>
            
        )
    }
}

export default Home;