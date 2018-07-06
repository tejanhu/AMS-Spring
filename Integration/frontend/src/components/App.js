import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import '../App.css';
import  Navbar from './navbar';
import Jumbotron from './jumbotron';
import UserTable from './userTable';
import Form from './form';
import Footer from './footer';

// import FontAwesome from 'react-fontawesome';

    var App = React.createClass({

        getInitialState: function () {
            return {users: []};
        },

        loadUsersFromServer: function () {
            var self =this;
            console.log("getting request");
        $.ajax({
            url: "http://localhost:8080/api/users/all"
        }).then(function (data) {
            self.setState({users: data});
        });
    },



        componentDidMount: function () {
        this.loadUsersFromServer();
    },
        componentWillMount: function () {
                this.loadUsersFromServer();
                },

        statics:{
                update: function(){
                    this.loadUsersFromServer();
                    this.render();
                }
            },
        render() {
        console.log(this.state);

        return (
            <div>
                <Navbar users={this.state.users}/>,
                <Jumbotron/>,
                <Form/>,
                <Footer/>
            </div>
        );
    }
});


    ReactDOM.render(
    <App />, document.getElementById('root')
    );


    export default App;










