import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [formType, setFormType] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSubjectChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSubjects(value);
  };

  const showStudentForm = () => setFormType("student");
  const showTutorForm = () => setFormType("tutor");

  const toggleOccupationFields = (e) => setOccupation(e.target.value);

  return (
    <Container
      fluid
      className=" text-white p-4"
      style={{ backgroundColor: "#1a1a2e" }}
    >
      <Row className="justify-content-center mt-3">
        <Col md={8} sm={12}>
          {/* Title */}
          <div className="text-center mb-4">
            <h3>User Registration</h3>
          </div>

          {/* User Type Selection */}
          <div className="mb-4 text-center">
            <p>Do you want to register as:</p>
            <Button
              style={{ backgroundColor: "#ff6f61", border: "#ff6f61" }}
              onClick={showStudentForm}
              className="m-2"
            >
              Student
            </Button>
            <Button
              style={{ backgroundColor: "#ff6f61", border: "#ff6f61" }}
              onClick={showTutorForm}
              className="m-2"
            >
              Tutor
            </Button>
          </div>

          {/* Conditional Forms */}
          {formType === "student" && (
            <Card className="p-4">
              <h5>Student Registration</h5>
              <Form>
                <Form.Group controlId="studentName">
                  <Form.Label className="mt-2 mb-2">Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group controlId="studentGender">
                  <Form.Label className="mt-2 mb-2">Gender</Form.Label>
                  <Form.Select as="select" required>
                    <option disabled selected>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="studentGrade">
                  <Form.Label className="mt-2 mb-2">Grade</Form.Label>
                  <Form.Select as="select" required>
                    <option disabled selected>
                      Select Grade
                    </option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="studentMedium">
                  <Form.Label className="mt-2 mb-2">Medium</Form.Label>
                  <Form.Select as="select" required>
                    <option disabled selected>
                      Select Medium
                    </option>
                    <option value="Tamil">Tamil</option>
                    <option value="English">English</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="studentRegion">
                  <Form.Label className="mt-2 mb-2">Region</Form.Label>
                  <Form.Control as="select" required>
                    <option disabled selected>
                      Select District
                    </option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="studentSchoolName" className="">
                  <Form.Label className="mt-2 mb-2">School Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                {/* Subjects Required */}
                <Form.Group controlId="studentSubjects" className="">
                  <Form.Label className="mt-2 mb-2">
                    Subjects Required
                  </Form.Label>
                  <Form.Control
                    as="select"
                    multiple
                    value={selectedSubjects}
                    onChange={handleSubjectChange}
                    required
                  >
                    <option value="english">English</option>
                    <option value="maths">Maths</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="accounts">Accounts</option>
                    <option value="commerce">Commerce</option>
                  </Form.Control>
                </Form.Group>

                {/* Passport Size Photo */}
                <Form.Group controlId="studentPhoto">
                  <Form.Label className="mt-2 mb-2">
                    Passport Size Photo
                  </Form.Label>
                  <Form.Control type="file" required />
                </Form.Group>

                {/* Contact Details */}
                <hr />
                <h5>Contact Details</h5>
                <Form.Group controlId="studentPhone">
                  <Form.Label className="mt-2 mb-2">Phone Number</Form.Label>
                  <Form.Control type="tel" />
                </Form.Group>

                <Form.Group controlId="studentMail">
                  <Form.Label className="mt-2 mb-2">Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                {/* Parental Information */}
                <hr />
                <h5>Parental Information</h5>
                <Form.Group controlId="Fathername">
                  <Form.Label className="mt-2 mb-2">Father Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="Mothername">
                  <Form.Label className="mt-2 mb-2">Mother Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="FatherOccupation" className="mb-3">
                  <Form.Label className="mt-2 mb-2">
                    Father Occupation
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                {/* Mother Occupation */}
                <Form.Group controlId="MotherOccupation" className="mb-3">
                  <Form.Label>Mother Occupation</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                {/* Parents Contact Number */}
                <Form.Group controlId="ParentNumber" className="">
                  <Form.Label>Parents' Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    required
                    pattern="[0-9]{10}" // Validates for a 10-digit number
                    title="Enter a valid 10-digit contact number"
                  />
                </Form.Group>

                {/* Password Fields */}

                <Form.Group controlId="password">
                  <Form.Label className="mt-2 mb-2">Password</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                  <Form.Label className="mt-2 mb-2">
                    Confirm Password
                  </Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>

                <div className="text-center mt-3">
                  <Button
                    style={{ backgroundColor: "#ff6f61", border: "#ff6f61" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card>
          )}

          {formType === "tutor" && (
            <Card className="p-4">
              <h5>Tutor Registration</h5>
              <Form>
                {/* Personal Details */}
                <h6>Personal Details</h6>
                <Form.Group controlId="tutorName">
                  <Form.Label className="mt-2 mb-2">Name</Form.Label>
                  <Form.Control type="text"required />
                </Form.Group>

                <Form.Group controlId="tutorGender">
                  <Form.Label className="mt-2 mb-2">Gender</Form.Label>
                  <Form.Select as="select" required>
                    <option selected disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="tutorPhone">
                  <Form.Label className="mt-2 mb-2">Phone Number</Form.Label>
                  <Form.Control type="tel" />
                </Form.Group>

                <Form.Group controlId="tutorMail">
                  <Form.Label className="mt-2 mb-2">Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="tutorAddress">
                  <Form.Label className="mt-2 mb-2">Address</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="tutorRegion">
                  <Form.Label className="mt-2 mb-2">Region</Form.Label>
                  <Form.Select as="select" required>
                    <option disabled selected>Select District</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="uploadPhoto">
                  <Form.Label className="mt-2 mb-2">
                    Upload Photo
                  </Form.Label>
                  <Form.Control type="file" required />
                </Form.Group>

                {/* Occupation Details */}
                <hr />
                <h6>Occupation Details</h6>
                <Form.Group controlId="tutorOccupation">
                  <Form.Label className="mt-2 mb-2">Occupation</Form.Label>
                  <Form.Select
                    as="select"
                    value={occupation}
                    onChange={toggleOccupationFields}
                    required
                  >
                    <option>Select Occupation</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                  </Form.Select>
                </Form.Group>

                {occupation === "student" && (
                  <div>
                    <Form.Group controlId="tutorDomain">
                      <Form.Label className="mt-2 mb-2">Domain</Form.Label>
                      <Form.Select as="select">
                        <option selected disabled>Select Domain</option>
                        <option value="arts">Arts</option>
                        <option value="engineering">Engineering</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="tutorCourseName">
                      <Form.Label className="mt-2 mb-2">Course Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="studentOccupationYearOfStudy">
                      <Form.Label className="mt-2 mb-2">Year Of Study</Form.Label>
                      <Form.Select as="select">
                        <option  selected disabled>Select Year</option>
                        <option value="Year 1">Year 1</option>
                        <option value="Year 2">Year 2</option>
                        <option value="Year 3">Year 3</option>
                        <option value="Year 4">Year 4</option>
                       
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="studentOccupationPassingOutYear">
                      <Form.Label className="mt-2 mb-2">Passing Out Year</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="studentOccupationCollegeName">
                      <Form.Label className="mt-2 mb-2">College Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                )}

                {occupation === "employee" && (
                  <div>
                    <Form.Group controlId="tutorJobRole">
                      <Form.Label className="mt-2 mb-2">Job Role</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="tutorCompanyName">
                      <Form.Label className="mt-2 mb-2">
                        Company Name
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="tutorDomain">
                      <Form.Label className="mt-2 mb-2">Domain</Form.Label>
                      <Form.Select as="select">
                        <option selected disabled>Select Domain</option>
                        <option value="arts">Arts</option>
                        <option value="engineering">Engineering</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="tutorCourseName">
                      <Form.Label className="mt-2 mb-2">Course Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="employeOccupationPassingOutYear">
                      <Form.Label className="mt-2 mb-2">Passing Out Year</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="employeOccupationCollegeName">
                      <Form.Label className="mt-2 mb-2">College Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                )}

                {/* Bank Details */}
                <hr />
                <h6>Bank Account Details</h6>
                <Form.Group controlId="tutorBankName">
                  <Form.Label className="mt-2 mb-2">Bank Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="tutorBranch">
                  <Form.Label className="mt-2 mb-2">Branch</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="tutorAccountNumber">
                  <Form.Label className="mt-2 mb-2">Account Number</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group controlId="tutorIFSC">
                  <Form.Label className='mt-2 mb-2'> IFSC Code</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="tutorAccountHolder">
                  <Form.Label className="mt-2 mb-2">
                    Account Holder Name
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                {/* Password Fields */}
             
                <Form.Group controlId="passwordTutor">
                  <Form.Label className="mt-2 mb-2">Password</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>

                <Form.Group controlId="confirmPasswordTutor">
                  <Form.Label className="mt-2 mb-2">
                    Confirm Password
                  </Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>

                <div className="text-center mt-3">
                  <Button
                    style={{ backgroundColor: "#ff6f61", border: "#ff6f61" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
