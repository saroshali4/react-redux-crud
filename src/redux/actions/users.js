import { FETCH_USERS, ADD_USER, DELETE_USER } from "../types";
import axios from "axios";

export const fetchUsers = () => {
  return function(dispatch) {
    return axios
      .get("http://localhost:3000/users")
      .then(
        response => dispatch({ type: FETCH_USERS, payload: response.data }),
        error => console.log(error)
      );
  };
};

export const addUser = user => {
  return function(dispatch) {
    return axios
      .post("http://localhost:3000/users", user)
      .then(
        response => dispatch({ type: ADD_USER, payload: response }),
        error => console.log(error)
      );
  };
};

export const deleteUser = user => {
  return function(dispatch) {
    return axios
      .delete(`http://localhost:3000/users/${user.id}`)
      .then(() => dispatch({ type: DELETE_USER }), error => console.log(error));
  };
};
