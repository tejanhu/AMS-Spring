import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import App from "./App";
import Dashboard from "./dashboard";
import Login from "./login";
import User from "./user";
import UserTable from "./userTable";
import Footer from "./footer";


var Navbar = React.createClass({

    dashboard: function(){
        ReactDOM.render(
            <div>
                <Navbar/>,
                <Dashboard/>,
                <Footer/>
            </div>
            , document.getElementById('root'));
    },

    accessLogin: function(){
        ReactDOM.render(
            <div>
                <Navbar/>,
                <Login/>,
                <Footer/>
            </div>, document.getElementById('root'));
    },

    addAccount: function(){

    },

    viewAccount: function(){
        ReactDOM.render(
            <div>
                <UserTable users={this.props.users}/>,
                <Footer/>
            </div>
            , document.getElementById('root'));
    },


    render: function() {
        return(
            <div className="navbarDiv">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">AMS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.dashboard}>Dashboard <span className="sr-only">(current)</span></a>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*<a className="nav-link" href="/createAccount">Create Account <span className="sr-only">(current)</span></a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*<a className="nav-link" href="/viewAccount">View Account <span className="sr-only">(current)</span></a>*/}
                            {/*</li>*/}
                            {/* <li className="nav-item">
             <a className="nav-link" href="/">Link</a>
           </li> */}
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account <span className="sr-only">(current)</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#" onClick={this.viewAccount}>View Accounts</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Add Account</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.accessLogin}>Login</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }

});

export default Navbar;