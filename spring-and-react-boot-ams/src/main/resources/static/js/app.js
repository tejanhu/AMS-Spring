
    // var User = React.createClass({
    //     render: function() {
    //         return (<div>user</div>);
    //     }
    // });
    // var UserTable = React.createClass({
    //     render: function() {
    //         return (<div>user table</div>);
    //     }
    // });

    var Navbar = React.createClass({

        render: function() {
            return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">AMS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/createAccount">Create Account <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/viewAccount">View Account <span className="sr-only">(current)</span></a>
                            </li>
                            {/* <li className="nav-item">
             <a className="nav-link" href="/">Link</a>
           </li> */}
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" onClick={this.showDropdownMenu} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account <span className="sr-only">(current)</span>
                                </a>
                                {this.state.displayMenu ? (
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/viewAccount">View Accounts</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/createAccount">Add Account</a>
                                            {/* <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="/">Something else here</a> */}
                                        </div>
                                    ):
                                    (
                                        null
                                    )
                                }
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>

                </nav>
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

    var USERS = [
{username: 'John', password: 'happy', surname: 'Wilson', accno: 45, firstName: 'Jonny'},
{username: 'Monday', password: 'sad', surname: 'Willis', accno: 54, firstName: 'Balraj'},
{username: 'Christiano', password: 'angry', surname: 'Billy', accno: 34, firstName: 'Timmerson'},
{username: 'Timbo', password: 'hungry', surname: 'Timmy', accno: 33, firstName: 'Hope'}
    ];


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
    return ( <UserTable users={this.state.users}/> );
}
});

    ReactDOM.render(
    <App />, document.getElementById('root')
    );











