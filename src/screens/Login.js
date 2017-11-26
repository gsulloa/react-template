import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { ContainerCenter, SpacedRow as Row, Col } from "../components/Container"
import Form, { Button } from "../components/Form"

import { loginUser } from "../redux/modules/authentication"
import { push } from "react-router-redux"

const mapStateToProps = state => ({
  authenticated: state.authentication.isAuthenticated,
  fetching: state.authentication.fetching,
})
const mapDispatchToProps = dispatch => ({
  loginUser: creds => dispatch(loginUser(creds)),
  goIndex: () => dispatch(push("/")),
})
class Login extends Component {
  state = {
    email: "",
    password: "",
  }
  handleEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }
  handlePassword = e => {
    this.setState({
      password: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser({ ...this.state })
    this.setState({
      password: "",
    })
  }
  componentWillMount = () => {
    if (this.props.authenticated) {
      this.props.goIndex()
    }
  }
  render = () => {
    return (
      <ContainerCenter>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>Email</Col>
            <Col>
              <input
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </Col>
          </Row>
          <Row>
            <Col>Contraseña</Col>
            <Col>
              <input
                type="password"
                placeholder="Contraseña"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </Col>
          </Row>

          <Row>
            <Col smOffset={3} sm={9}>
              <Button type="submit" disabled={this.props.fetching}>
                Sign in
              </Button>
            </Col>
          </Row>
        </Form>
      </ContainerCenter>
    )
  }
}
Login.propTypes = {
  loginUser: PropTypes.func,
  authenticated: PropTypes.bool,
  goIndex: PropTypes.func,
  fetching: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
