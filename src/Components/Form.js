import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
            address: "",
            emailId: "",



        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    emailIdhandler = (event) => {
        this.setState({
            emailId: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert("First Name: "+this.state.firstName+"\ngender: "+this.state.gender+"\naddress: "+this.state.address+"\nemailId: "+this.state.emailId)
        
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
            address: "",
            emailId: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    
                    <label>Address :</label> <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address..." /><br />
                    
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>Email Id :</label> <input type="email" value={this.state.emailId} onChange={this.emailIdhandler} placeholder="Email Id..." /><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
