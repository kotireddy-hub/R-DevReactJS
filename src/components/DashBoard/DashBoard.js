import React, { Component } from "react";
import UserService from "../../shared/services/user-service";

class DashBoardComponent extends Component {
  constructor() {
    super();
    this.state = {
      Users: []
    };
    this.userService = new UserService();
  }
  componentDidMount = () => {
    this.userService.getUser().then(users => {
      this.setState({
        Users: users
      });
      console.log(this.state.Users.user);
    });
  };
  render() {
    return (
      <div>
        <table striped bordered hover size="sm" className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th> Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>PhoneNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Users.user &&
              this.state.Users.user.map((user, i) => {
                return (
                  <tr key={i}>
                    <td> {user.id}</td>
                    <td> {user.name}</td>
                    <td> {user.age}</td>
                    <td> {user.gender}</td>
                    <td> {user.email}</td>
                    <td> {user.phoneNo}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DashBoardComponent;
