import React from 'react';
import '../App.css';


var Jumbotron = React.createClass({
    render: function(){
        return (
            <div className="jumbotron centering">
                <h1 className="display-3">Welcome to AMS</h1>
                <p className="lead">This is a simple account management system.</p>
                <hr className="my-4"></hr>
                <p>It allows users to create an account, view their account, update their account and save any changes on their account.</p>
            </div>
        )
    }
});

export default Jumbotron;