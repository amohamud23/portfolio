import React from "react";
import "./../css/Section4.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Chart } from "react-google-charts";
import ReactImg from "../assets/react.png";
import NodeImg from "../assets/nodejs.png";
import DjangoImg from "../assets/django.png";

class Languages extends React.Component {
  render() {
    return (
      <Container className="section04" fluid>
        <h1 className="section04-title">Skills</h1>
        <Row className="section04-row">
          <Col className="section04-col1" lg={true}>
            <h2 className="section04-col-title">Frameworks</h2>
            <Row className="section04-col1-row">
              <Col style={{ width: "50%", height: "100%" }}>
                <Image className="section04-col1-img" src={ReactImg} />{" "}
              </Col>
              <Col className="section04-col1-label">
                <h3 className="section04-framework-text">React</h3>
              </Col>
            </Row>
            <Row className="section04-col1-row">
              <Col
                style={{
                  width: "50%",
                  height: "100%",
                }}
              >
                <Image className="section04-col1-img" src={NodeImg} />{" "}
              </Col>
              <Col className="section04-col1-label">
                <h3 className="section04-framework-text">Node JS</h3>
              </Col>
            </Row>
            <Row className="section04-col1-row">
              <Col style={{ width: "50%", height: "100%" }}>
                <Image className="section04-col1-img" src={DjangoImg} />{" "}
              </Col>
              <Col className="section04-col1-label">
                <h3 className="section04-framework-text">Django</h3>
              </Col>
            </Row>
          </Col>
          <Col className="section04-col2" lg={true}>
            <h2 className="section04-col-title">Languages</h2>
            <Row className="section04-col2-row">Java</Row>
            <Row className="section04-col2-row">Javascript</Row>
            <Row className="section04-col2-row">Python</Row>
            <Row className="section04-col2-row">HTML</Row>
            <Row className="section04-col2-row">CSS</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Languages;
