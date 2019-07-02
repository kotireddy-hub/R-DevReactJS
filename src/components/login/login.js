import React, { Component } from "react";
import { connect } from "react-redux";

class LoginComponent extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.props.userName === "hruday@gmail.com" &&
      this.props.Password === "hruday123"
    ) {
      this.props.history.push("/DashBoard");
      this.props.clearErrorMessage();
    } else {
      this.props.setErrorMessage();
    }
  };

  render() {
    const {
      userName,
      Password,
      errorMessage,
      handleChangeUserName,
      handleChangePassword
    } = this.props;
    console.log("userName", userName, this.props);
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            className="form-control"
            value={userName}
            onChange={handleChangeUserName}
          />
          <label>Password</label>
          <input
            type="Password"
            name="Password"
            className="form-control"
            value={Password}
            onChange={handleChangePassword}
          />
          <br />
          <button type="submit" className="btn btn-primary" value="Submit">
            Submit
          </button>
          <br />
         
        </div>
        {errorMessage !== "" ? (
            <p className="alert alert-danger">{errorMessage}</p>
          ) : (
            ""
          )}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    userName: state.login.userName,
    Password: state.login.Password,
    errorMessage: state.login.errorMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChangeUserName: e => {
      dispatch({ type: "ADD_USERNAME", payload: e.target.value });
    },
    handleChangePassword: e => {
      dispatch({ type: "PASSWORD", payload: e.target.value });
    },
    setErrorMessage() {
      dispatch({ type: "SET_ERROR_MESSAGE" });
    },
    clearErrorMessage(){
      dispatch({ type: "CLEAR_ERROR_MESSAGE" });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
