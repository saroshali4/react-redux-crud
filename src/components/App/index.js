import React from "react";
import UsersList from "../UsersList";
import UserForm from "../UserForm";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class App extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  render() {
    return (
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">
            React CRUD
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/add">
                  Add User
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route exact path="/add" component={UserForm} />
            <Route exact path="/update/:id" component={UserForm} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
