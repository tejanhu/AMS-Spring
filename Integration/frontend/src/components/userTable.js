import React from 'react';
import '../App.css';
import User from "./user";
import Footer from "./footer";
import Navbar from "./navbar";


var UserTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.users.forEach(function(user) {
            rows.push(<User user={user} />);
        });
        return (
            <div className="container">
                <Navbar/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Surname</th>
                        <th>Acc No</th>
                        <th>First Name</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
});

export default UserTable;