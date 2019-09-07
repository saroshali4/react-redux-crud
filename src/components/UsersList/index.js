import React from "react";
import { connect } from "react-redux";

import { Row, Col, Table, Button } from "reactstrap";

import { fetchUsers } from "../../redux/actions/users";
import { deleteUser } from "../../redux/actions/users";

import { Link } from "react-router-dom";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  deleteUser = user => {
    return this.props.deleteUser(user).finally(() => {
      this.props.fetchUsers();
    });
  };

  renderRows = () =>
    this.props.users.map((user, index) => (
      <tr key={index + 1}>
        <th scope="row">{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.profession}</td>
        <td>{user.address}</td>
        <td>
          <Button
            color="primary"
            size="sm"
            tag={Link}
            to={{ pathname: `/update/${user.id}`, state: { user: user } }}
          >
            Edit
          </Button>{" "}
          <Button
            color="danger"
            size="sm"
            onClick={() => {
              this.deleteUser(user);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));

  render() {
    return (
      <>
        <Row>
          <Col sm="12" md={{ size: 9, offset: 1 }} className="mt-5">
            <h3>Users</h3>
          </Col>
          <Col sm="12" md={{ size: 9, offset: 1 }} className="mt-2">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Profession</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{this.renderRows()}</tbody>
            </Table>
          </Col>
          <Col sm="12" md={{ size: 9, offset: 1 }} className="mt-1">
            <Button color="primary" tag={Link} to="/add" className="mt-1">
              Add User
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = {
  fetchUsers,
  deleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
