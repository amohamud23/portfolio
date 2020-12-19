import React from "react";
import "../css/Section2.css";
import Me from "../assets/me.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import Slide from "react-reveal/Slide";

class Section02 extends React.Component {
  render() {
    return (
      <Container className="section2" fluid>
        <Row style={{ backgroundColor: "black" }}>
          <Col className="section2-cols" lg={true}>
            <div className="aboutme">
              <Slide left>
                <div style={{ border: "white solid 8px" }}>
                  <h1 className="title">A Little About Me</h1>
                  <p className="description">
                    My name is Abdi Mohamud and I'm a San Diego native. I
                    graduated from San Francisco State University with a degree
                    in Computer Engineering in 2019. Been developing for about a
                    1.5 years, mainly as a fullstack engineer. I love technology
                    and enjoy building great looking products with efficiency
                    and performance.
                  </p>
                </div>
              </Slide>
            </div>
          </Col>
          <Col className="section2-cols" lg={true}>
            <div className="imgContainer">
              <Slide right>
                <Image className="userPic" src={Me} roundedCircle />
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Section02;
