
 var Navbar = React.createClass({

     dashboard: function(){
         ReactDOM.render(
             <div>
                 <Navbar/>,
                 <Dashboard/>
             </div>
             , document.getElementById('root'));
     },

     createAccount: function(){

     },

     viewAccount: function(){
        ReactDOM.render(
            <div>
                <Navbar/>,
                <App/>
            </div>
            , document.getElementById('root'));
     },

     editAccount: function(){

     },

     saveAccount: function(){

     },

        render: function() {
            return(
                <div className="navbarDiv">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">AMS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                </div>
            )
        }


    });

    var Dashboard = React.createClass({
        render: function(){
            return (
                <div><h1>Dashboard</h1></div>
            )
        }
    })


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

    var Form = React.createClass({
        render: function() {
            return (
                <div>
                    <Navbar/>
                    <Jumbotron/>
                    <h1>Create an Account</h1>
                    <form ref="accountForm">
                        <div className="container">
                            <label htmlFor="uname" className="cred"><br/>Username:<br/></label>
                            <input type="text" className="form-control" id="uname" ref="uname"
                                   placeholder="Enter username"/>

                            <label htmlFor="psw" className="cred"><br/>Password:<br/></label>
                            <input type="password" className="form-control" id="psw" ref="psw"
                                   placeholder="Enter password"/>

                            <label htmlFor="fname" className="cred"><br/>First-name:<br/></label>
                            <input type="text" className="form-control" id="fname" ref="name"
                                   placeholder="Enter firstname"/>

                            <label htmlFor="sname" className="cred"><br/>Surname:<br/></label>
                            <input type="text" className="form-control" id="lname" ref="surname"
                                   placeholder="Enter surname"/>

                            <label htmlFor="accno" className="cred"><br/>Account number<br/></label>
                            <input type="text" className="form-control" id="acc_no" ref="accno"
                                   placeholder="Enter account number"/>
                            <button type="submit" className="btn btn-primary" id="submit-btn"
                                    onClick={(e) => this.addAccount(e)}>Submit
                            </button>
                        </div>
                    </form>


                </div>
            )
        }
    });

    var User = React.createClass({
    getInitialState: function() {
    return {display: true };
},
    handleDelete() {
    var self = this;
    $.ajax ({
    url: "http://localhost:8080/api/users/delete/" + this.props.user.id,
    type: "GET",
        success: function(res) {
            self.setState({delete: true});
        },
        error: function(xhr, ajaxOptions, thrownError) {
            toastr.error("Error!");
        }

});



},

    handleUpdate() {
    var self = this;
        $.ajax ({
            url: "http://localhost:8080/api/users/edit/" + this.props.user.id,
            type: "PUT",
            success: function(res) {
                self.setState({update: true});
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error("Error!");
            }
});

},

    render: function() {
    if (this.state.delete) return null;
    else return (

    <tr>
    <td>{this.props.user.username}</td>
    <td>{this.props.user.password}</td>
    <td>{this.props.user.surname}</td>
    <td>{this.props.user.accno}</td>
    <td>{this.props.user.firstName}</td>
    <td>
    <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
    </td>
    <td>
    <button className="btn btn-info" onClick={this.handleEdit}>Edit</button>
    </td>
    </tr>);
}
});


    var UserTable = React.createClass({
    render: function() {
    var rows = [];
    this.props.users.forEach(function(user) {
    rows.push(<User user={user} />);
});
    return (
    <div className="container">

    <table className="table table-striped">

    <thead>
    <tr>
    <th>Username</th><th>Password</th><th>Surname</th><th>Acc No</th><th>First Name</th><th>Delete</th><th>Edit</th>
    </tr>
    </thead>
    <tbody>{rows}</tbody>
    </table>
    </div>);
}
});


//     var USERS = [
// {username: 'John', password: 'happy', surname: 'Wilson', accno: 45, firstName: 'Jonny'},
// {username: 'Monday', password: 'sad', surname: 'Willis', accno: 54, firstName: 'Balraj'},
// {username: 'Christiano', password: 'angry', surname: 'Billy', accno: 34, firstName: 'Timmerson'},
// {username: 'Timbo', password: 'hungry', surname: 'Timmy', accno: 33, firstName: 'Hope'}
//     ];


    var App = React.createClass({

    loadUsersFromServer: function () {
    var self = this;
    $.ajax({
    url: "http://localhost:8080/api/users/all"
}).then(function (data) {
    self.setState({users: data});
});
},

    getInitialState: function () {
    return {users: []};
},

    componentDidMount: function () {
    this.loadUsersFromServer();
},

    render() {
    console.log(self.state);

    return (
        <div>
            {/*<Navbar/>*/}
            {/*<Jumbotron/>*/}
            {/*<Form/>*/}
        <UserTable users={this.state.users}/>
        </div>
    );
}
});


    ReactDOM.render(
    <Form />, document.getElementById('root')
    );











