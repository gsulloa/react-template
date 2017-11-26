import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route as RouteDom, Link, Switch, withRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Home from "./screens/Home"
import NotFound from "./screens/NotFound"

import routes from "./routes"

const siteTitle = title => (title ? `RT | ${title}` : "React Template")

const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #3f51b5;
  color: White;
`

const NavSection = styled.div`
  display: flex;
  flex-flow: row;
`

const NavLeft = styled(NavSection)``

const NavRight = styled(NavSection)``

const NavHref = styled(Link)`
  padding: 0 12px;
  color: ${props => (props.className === "active" ? "black" : "white")};
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    color: black;
  }
`

const NavLink = ({ to, label, exact, ignore = false }) => (
  <RouteDom path={to} exact={exact}>
    {({ match }) => {
      return (
        <NavHref to={to} className={!ignore && match ? "active" : ""}>
          {label}
        </NavHref>
      )
    }}
  </RouteDom>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  ignore: PropTypes.bool,
}

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 50px 0 0;
  width: 100%;
`

const Route = props => (
  <Body>
    <Helmet>
      <title>{siteTitle(props.title)}</title>
    </Helmet>
    <RouteDom {...props} />
  </Body>
)

Route.propTypes = {
  title: PropTypes.string,
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: lightGray;
`

const FooterSection = styled.div`
  display: flex;
  flex-flow: row;
`

const FooterLeft = styled(FooterSection)``

const FooterRight = styled(FooterSection)``

const FooterHref = styled.a`
  padding: 0 12px;
  color: ${props => (props.active ? "blueviolet" : "black")};
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;
  :hover {
    color: blueviolet;
  }
`

const FooterLink = ({ to, label }) => (
  <FooterHref href={to} target={"_blank"}>
    {label}
  </FooterHref>
)

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

class Navigator extends Component {
  render() {
    return (
      <App>
        <Nav>
          <NavLeft>
            <NavLink to={routes.homePath} label="React Template" exact ignore />
            <NavLink to={routes.customPath("/other1")} label="Other 1" />
            <NavLink to={routes.customPath("/other2")} label="Other 2" />
          </NavLeft>
          <NavRight>
            <NavLink to={routes.customPath("/custom")} label="Custom" />
          </NavRight>
        </Nav>
        <Switch>
          <Route exact path={routes.homePath} component={Home} />
          <Route component={NotFound} title="Not found" />
        </Switch>
        <Footer>
          <FooterLeft>
            <FooterLink to="https://google.com" label="Google" />
          </FooterLeft>
          <FooterRight>
            <FooterLink
              to="https://github.com/negebauer/react-template"
              label="Github"
            />
          </FooterRight>
        </Footer>
      </App>
    )
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigator)
)
