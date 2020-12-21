import React from "react";
import "./../css/Section3.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Adventure from "../assets/adventure-logo.png";
import GuessWho from "../assets/guessWho.png";
import Zoom from "react-reveal/Zoom";
import PineLogo from "../assets/PineLogo.png";

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
              <h4 className="company-date">Auguest 2020 - Present</h4>
              <ul className="company-description">
                <li>
                  {" "}
                  Lead Engineer on a mobile game project designing the software
                  and design the database models using Swift and Mongo.
                </li>
                <li>
                  {" "}
                  Built the entire backend service that handles http requests
                  from our game and deployed it on GCP and MongoDB.
                </li>
                <li>
                  Responsible for integrating our backend service on the app and
                  testing game functionality ensure user satisfaction.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <Row className="section03-row">
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
                  Co - Founded a startup which focuses on the development of a
                  mobile app that will buy/sell US stocks to Africans.
                </li>
                <li>
                  {" "}
                  Currently building out user verification for the UI to verify
                  all users on our platform are authenticated.
                </li>
                <li>
                  Working in an agile environment to complete 1 screen per week
                  in collaboration with the design team using React Native.
                </li>
              </ul>
            </div>
          </Col>
        </Row> */}
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
              <h4 className="company-date">May 2020 - Aug 2020</h4>
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
