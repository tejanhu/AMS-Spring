
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











