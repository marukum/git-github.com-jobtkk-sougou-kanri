import React, { Component } from "react";
import ButtonLogin from "../lv2/button_Login";
import Input from "../lv2/inputText_sample1";
import Password from "../lv2/input_password_login";
import { Box_Centered_Mobile, Box_centered } from "../../../styles";
import { Card, CardBody } from "reactstrap";
import { Container, Row, Col } from "react-bootstrap";
import TitleSample1 from "../lv2/title_sample1";
import MediaQuery from "react-responsive";
import axios from "axios";

// 各コンポーネントの配置
export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

   /* axios
      .post(
        "http://localhost:3000/secondpage",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });*/
    event.preventDefault();
    alert("aqui")
  }

  render() {
    return (
      <div>
        <Container>
          <MediaQuery query="(min-width: 450px)">
            <Row>
              <Col>
                <Box_centered>
                  <Card>
                    <CardBody>
                      <form  onSubmit={this.handleSubmit}>
                        <div>
                          <Input value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div>
                          <Password value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div>
                          <ButtonLogin />
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </Box_centered>
              </Col>
            </Row>
          </MediaQuery>
          <MediaQuery query="(max-width: 449px)">
            <Row>
              <Col>
                <Box_Centered_Mobile>
                  <Card style={{ left: "-5.4rem", width: "21rem" }}>
                    <TitleSample1 />
                    <CardBody>
                      <form  onSubmit={this.handleSubmit}>
                        <div>
                          <Input value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div>
                          <Password value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div>
                          <ButtonLogin />
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </Box_Centered_Mobile>
              </Col>
            </Row>
          </MediaQuery>
        </Container>
      </div>
    );
  }
}
