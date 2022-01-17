import React, {useState} from "react";
import ButtonRegister from "../lv2/button_User_Register";
import { Box_Centered_Mobile, Box_centered } from "../../../../styles";
import { Card, CardBody } from "reactstrap";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import TitleSample1 from "../lv2/title_sample1";
import MediaQuery from "react-responsive";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// 各コンポーネントの配置
function MainSample1() { 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <MediaQuery query="(min-width: 450px)">
          <Row>
            <Col>
              <Box_centered>
                <Card style={{ height: "21rem" }}>
                  <TitleSample1 />
                  <CardBody>
                    <Row>
                      <Col style={{ top:"50px" }}>
                        {" "}
                        <ButtonRegister />
                      </Col>
                    </Row>
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
                    <Row className="mx-0">
                      <Button as={Col} variant="primary">
                        ユーザー登録
                      </Button>
                      <Button as={Col} variant="secondary" className="mx-2">
                        一覧
                      </Button>
                    </Row>
                    <br></br>
                    <Row className="mx-0">
                      <Button as={Col} variant="success" className="mx-1">
                        CSV出力
                      </Button>
                      <Button as={Col} variant="primary" className="mx-1">
                        同期
                      </Button>
                    </Row>
                    <br></br>

                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button variant="primary" className="mx-1">
                        キャンセル
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Box_Centered_Mobile>
            </Col>
          </Row>
        </MediaQuery>
      </Container>

      <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>


    </div>
  );
}
export default MainSample1;
