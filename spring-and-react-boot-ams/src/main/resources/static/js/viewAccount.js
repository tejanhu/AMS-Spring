import React, { Component } from 'react';

class ViewAccount extends Component{
    render(){
        return (
           
                <form ref="accountForm">
                    <div className="container">
                         <label for="fname">First-name:</label><br/>
                         <input type="text" className="form-control" id="fname" ref="name" placeholder="Enter firstname" />
                         
                         <label for="sname">Surname:</label><br/>
                         <input type="text" className="form-control" id="lname" ref="surname" placeholder="Enter surname"/>
                         
                         <label for="accno">Account number</label><br/>
                         <input type="text" className="form-control" id="acc_no" ref="accno" placeholder="Enter account number"/>
                         <button type="submit" className="btn btn-primary" id="submit-btn" onClick={this.addAccount}>Submit</button>
                    </div>
                </form>
                       
                
                
                    
        )
    }
}

export default ViewAccount;