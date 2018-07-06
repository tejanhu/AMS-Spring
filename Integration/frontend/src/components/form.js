import React from 'react';
import '../App.css';
import $ from 'jquery';




var Form = React.createClass({
    getInitialState: function () {
        return {display: true};
    },

    modifyFirstName: function (e) {
        this.setState({
            firstName: e.target.value
        })
    },

    modifySurname: function (e) {
        this.setState({
            surname: e.target.value
        })

    },

    modifyUsername: function (e) {
        this.setState({
            username: e.target.value
        })
    },

    modifyPassword: function (e) {

            this.setState({
                password: e.target.value
            })


    },

    modifyAccountNumber: function (e) {
        this.setState({
            accno: e.target.value
        })
    },

    onSubmit: function(e){
        e.preventDefault();

        const data = {
            "username": this.state.username,
            "password": this.state.password,
            "firstName": this.state.firstName,
            "surname": this.state.surname,
            "accno": this.state.accno
        };

        e.target.reset();

        const jsonData =  JSON.stringify(data);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:8080/api/users/create",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "authorization": "Basic cm9vdDpwYXNzd29yZA==",
                "cache-control": "no-cache",
                "postman-token": "7d00a872-7fe4-5e0b-5ce3-61fa0f4244e9"
            },
            "processData": false,
            "data": jsonData
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            // toastr.success("Added User!");
        });

    },
    render: function() {
        return (

            <div>
                <h1>Create an Account</h1>
                <form ref="accountForm" onSubmit={this.onSubmit}>
                    <div className="container">
                        <label htmlFor="uname" className="cred"><br/>Username:<br/></label>
                        <input type="text" className="form-control" maxlength="17" id="uname" ref="uname"
                               placeholder="Enter username" required onChange={this.modifyUsername}/>

                        <label htmlFor="psw" className="cred"><br/>Password:<br/></label>
                        <input type="text" className="form-control" id="psw" ref="psw"
                               placeholder="Enter password" required validations={{matchRegexp: new RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/")
                        }} onChange={this.modifyPassword}/>

                        <label htmlFor="fname" className="cred"><br/>First-name:<br/></label>
                        <input type="text" className="form-control" maxlength="15" id="fname" ref="name"
                               placeholder="Enter firstname" required onChange={this.modifyFirstName}/>

                        <label htmlFor="sname" className="cred"><br/>Surname:<br/></label>
                        <input type="text" className="form-control" maxlength="12" id="lname" ref="surname"
                               placeholder="Enter surname" required onChange={this.modifySurname}/>

                        <label htmlFor="accno" className="cred"><br/>Account number<br/></label>
                        <input type="text" className="form-control" id="acc_no" ref="accno"
                               placeholder="Enter account number" maxlength="4" required onChange={this.modifyAccountNumber}/>
                        <button type="submit" className="btn btn-primary" id="submit-btn">Submit
                        </button>
                    </div>
                </form>


            </div>
        )
    }
});

export default Form;