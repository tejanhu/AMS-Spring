import React from 'react';
import $ from 'jquery';
import '../App.css';

var User = React.createClass({
    getInitialState: function() {
        return {display: true, editing: false };
    },


    handleDelete() {
        var self = this;
        $.ajax ({
            url: "http://localhost:8080/api/users/delete/" + this.props.user.id,
            type: "DELETE",
            success: function(res) {
                self.setState({delete: true});
                alert("Deleted User!");
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Error!");
            }

        });


    },
    handleEdit() {

        this.setState({
            editing: true
        });
    },

    save: function(){


        this.setState({
            editing: false
        });
        if(this.refs.newUsername.value === false
            || this.refs.newPassword.value === false
            || this.refs.newSurname === false
            || this.refs.newAccountNumber === false
            || this.refs.newFirstName === false){
            // alert(jsonData.alert)
        }else {
            this.props.user.username = this.refs.newFirstName.value
            this.props.user.firstName = this.refs.newUsername.value
            this.props.user.password = this.refs.newPassword.value
            this.props.user.surname = this.refs.newSurname.value
            this.props.user.accno = this.refs.newAccountNumber.value


            $.ajax({
                url: "http://localhost:8080/api/users/edit/" + this.props.user.id,
                type: 'PUT',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(this.props.user),
                success: function (result) {
                    result.sort((a,b) => (a.id) - (b.id));
                    //this.setState({display: false});
                    alert("Updated User!");

                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.responseJSON.message);
                }
            });
        }
    },

    render: function() {
        if (this.state.delete) return null;
        else if(this.state.editing){
            return (
                <tr>
                    <td><input ref="newUsername" defaultValue={this.props.user.username}/></td>
                    <td> <input type="text" ref="newPassword" defaultValue={this.props.user.password}/></td>
                    <td> <input ref="newSurname" defaultValue={this.props.user.surname}/></td>
                    <td><input ref="newAccountNumber" defaultValue={this.props.user.accno}/></td>
                    <td> <input ref="newFirstName" defaultValue={this.props.user.firstName}/></td>
                    <td>
                        <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                    </td>
                    <td>
                        <button className="btn btn-info" onClick={this.handleEdit}>Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-success" onClick={this.save}>Save</button>
                    </td>
                </tr>
            )
        }
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

export default User;