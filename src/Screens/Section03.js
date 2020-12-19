import React from "react";
import "./../css/Section3.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Adventure from "../assets/adventure-logo.png";
import GuessWho from "../assets/guessWho.png";
import Zoom from "react-reveal/Zoom";
import PineLogo from "../assets/PineLogo.png";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

class Experience extends React.Component {
  render() {
    return (
      <Container className="section03" fluid>
        <div className="section03-title">
          <p>Experience</p>
        </div>

        <Row className="section03-row">
          <Col lg={true}>
            <div className="section03-company-logo">
              <Zoom>
                <Image className="company-img" src={GuessWho} />
              </Zoom>
            </div>
          </Col>
          <Col lg={true}>
            <div className="section03-container">
              <h1 className="company-title">Guess Who</h1>
              <h3 className="company-role">Position: Full Stack Engineer</h3>
              <ul className="company-description">
                <li>
                  {" "}
                  Led a team of software engineer interns to implement a
                  prototype Text to Speech feature using agile methodologies.
                </li>
                <li>
                  {" "}
                  Used React, NodeJS, and Twitch to send Ethereum tokens to
                  user's Metamask Wallet on the Rinkeby Test Network
                </li>
                <li>
                  Developed on a team to build a game using Web-sockets to send
                  real time player updates to multiple game rooms.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="section03-row">
          <Col lg={true}>
            <div className="section03-company-logo">
              <Zoom>
                <Image className="company-img" src={PineLogo} />
              </Zoom>
            </div>
          </Col>
          <Col lg={true}>
            <div className="section03-container">
              <h1 className="company-title">Pine</h1>
              <h3 className="company-role">Position: Full Stack Engineer</h3>
              <ul className="company-description">
                <li>
                  {" "}
                  Led a team of software engineer interns to implement a
                  prototype Text to Speech feature using agile methodologies.
                </li>
                <li>
                  {" "}
                  Used React, NodeJS, and Twitch to send Ethereum tokens to
                  user's Metamask Wallet on the Rinkeby Test Network
                </li>
                <li>
                  Developed on a team to build a game using Web-sockets to send
                  real time player updates to multiple game rooms.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="section03-row" style={{}}>
          <Col lg={true}>
            <div className="section03-company-logo">
              <Zoom>
                <Image className="company-img" src={Adventure} />
              </Zoom>
            </div>
          </Col>
          <Col lg={true}>
            <div className="section03-container">
              <h1 className="company-title">Adventure Corporation</h1>
              <h3 className="company-role">
                Position: Software Engineer Intern
              </h3>
              <h4>May 2020 - Aug 2020</h4>
              <ul className="company-description">
                <li>
                  {" "}
                  Led a team of software engineer interns to implement a
                  prototype Text to Speech feature using agile methodologies.
                </li>
                <li>
                  {" "}
                  Used React, NodeJS, and Twitch to send Ethereum tokens to
                  user's Metamask Wallet on the Rinkeby Test Network
                </li>
                <li>
                  Developed on a team to build a game using Web-sockets to send
                  real time player updates to multiple game rooms.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Experience;
