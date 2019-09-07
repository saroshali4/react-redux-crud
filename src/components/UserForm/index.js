import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
  Row
} from "reactstrap";

import { addUser } from "../../redux/actions/users";

class UserForm extends React.Component {
  validation = Yup.object().shape({
    name: Yup.string()
      .required("Must not be empty")
      .max(100, "Too Long"),
    email: Yup.string()
      .required("Must not be empty")
      .email("Must be a valid Email")
      .max(255, "Too Long"),
    gender: Yup.string().required("You have to select Gender!"),
    profession: Yup.string()
      .oneOf(["Developer", "Doctor", "Business Man"])
      .required("Please choose your Profession"),
    address: Yup.string()
      .required("Must not be empty")
      .min(3, "Not less than 3 characters ")
      .max(100, "Too Long")
  });

  onSubmit = values => {
    this.props.addUser(values).finally(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }} className="mt-5">
            <h3>Add User</h3>
            <Formik
              initialValues={{
                name: "",
                email: "",
                gender: "",
                profession: "",
                address: ""
              }}
              validationSchema={this.validation}
              onSubmit={this.onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      tag={Field}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      invalid={errors.name && touched.name}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      tag={Field}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      invalid={errors.email && touched.email}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </FormGroup>
                  <FormGroup className="show-msg">
                    <Label for="gender">Gender</Label>
                    <FormGroup check>
                      <Label check>
                        <Input
                          id="gender"
                          type="radio"
                          name="gender"
                          value="Male"
                          onChange={handleChange}
                          invalid={errors.gender && touched.gender}
                        />{" "}
                        Male
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="gender"
                          value="Female"
                          onChange={handleChange}
                          invalid={errors.gender && touched.gender}
                        />{" "}
                        Female
                      </Label>
                    </FormGroup>
                    <FormFeedback>{errors.gender}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="profession">Profession</Label>
                    <Input
                      type="select"
                      name="profession"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.profession}
                      invalid={errors.profession && touched.profession}
                    >
                      <option value="" disabled>
                        Choose
                      </option>
                      <option value="Developer">Developer</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Business Man">Business Man</option>
                    </Input>
                    <FormFeedback>{errors.profession}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      component="textarea"
                      name="address"
                      tag={Field}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      invalid={errors.address && touched.address}
                    />
                    <FormFeedback>{errors.address}</FormFeedback>
                  </FormGroup>
                  <Button color="primary" type="submit" className="mb-5">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </>
    );
  }
}

const mapDispatchToProps = {
  addUser
};

export default connect(
  null,
  mapDispatchToProps
)(UserForm);
